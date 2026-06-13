import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UtenteService } from '../../core/services/utente.service';
import { AnnuncioService } from '../../core/services/annuncio.service';
import { SegnalazioneService } from '../../core/services/segnalazione.service';
import { ToastService } from '../../shared/toast/toast.service';
import { AuthService } from '../../core/services/auth.service';
import { OverlayService } from '../../core/services/overlay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {
  private utenteService       = inject(UtenteService);
  private annuncioService     = inject(AnnuncioService);
  private segnalazioneService = inject(SegnalazioneService);
  private toast               = inject(ToastService);
  private auth                = inject(AuthService);
  private overlayService      = inject(OverlayService);
  private router              = inject(Router);

  // Chiave localStorage per tracciare gli annunci oscurati già notificati
  private readonly OSCURATI_KEY = 'reloop_oscurati_notificati';

  profilo      = signal<any>(null);
  annunci      = signal<any[]>([]);
  badge        = signal<any[]>([]);
  tuttiBadge   = signal<any[]>([]);
  segnalazioni = signal<any[]>([]);
  leaderboard  = signal<any[]>([]);
  recensioni   = signal<any[]>([]);
  fotoProfilo  = signal<string | null>(null);
  loading      = signal(true);

  annuncioSelezionato = signal<any>(null);
  modalAnnuncioAperto = signal(false);

  get annunciAttivi()   { return this.annunci().filter(a => a.stato_annuncio === 'attivo'); }
  get annunciSospesi()  { return this.annunci().filter(a => a.stato_annuncio === 'sospeso'); }
  get annunciChiusi()   { return this.annunci().filter(a => a.stato_annuncio === 'chiuso'); }
  get annunciOscurati() { return this.annunci().filter(a => a.stato_annuncio === 'oscurato'); }

  get iniziali(): string {
    const nome = this.profilo()?.nome_completo || '';
    return nome.split(' ').map((p: string) => p[0]).join('').substring(0, 2).toUpperCase();
  }

  ngOnInit() { this.caricaTutto(); }

  caricaTutto() {
    this.loading.set(true);
    const utente = this.auth.utenteCorrente() as any;
    this.fotoProfilo.set(utente?.foto_profilo || null);

    this.utenteService.getProfilo().subscribe({
      next: (p) => this.profilo.set(p),
      error: () => this.toast.err('Errore', 'Impossibile caricare il profilo.', '❌')
    });

    this.annuncioService.getMieiAnnunci().subscribe({
      next: (a) => {
        this.annunci.set(a);
        // Controlla se ci sono annunci oscurati non ancora notificati
        this._notificaAnnunciOscurati(a);
      },
      error: () => {}
    });

    this.utenteService.getBadgeOttenuti().subscribe({
      next: (b) => this.badge.set(b),
      error: () => {}
    });

    this.utenteService.getTuttiBadge().subscribe({
      next: (b) => this.tuttiBadge.set(b),
      error: () => {}
    });

    this.segnalazioneService.getMie().subscribe({
      next: (s) => this.segnalazioni.set(s),
      error: () => {}
    });

    this.utenteService.getLeaderboard().subscribe({
      next: (l) => this.leaderboard.set(l),
      error: () => {}
    });

    if (utente?.id_utente_reg) {
      this.utenteService.getRecensioni(utente.id_utente_reg).subscribe({
        next: (r) => { this.recensioni.set(r); this.loading.set(false); },
        error: () => this.loading.set(false)
      });
    } else {
      this.loading.set(false);
    }
  }

  /**
   * Controlla se ci sono annunci oscurati dall'admin non ancora notificati.
   * Gli ID già notificati vengono salvati in localStorage per non ripetere il toast.
   */
  private _notificaAnnunciOscurati(annunci: any[]) {
    // Recupera gli ID già notificati
    const giàNotificati: number[] = JSON.parse(
      localStorage.getItem(this.OSCURATI_KEY) || '[]'
    );

    // Filtra gli oscurati non ancora notificati
    const nuoviOscurati = annunci.filter(
      a => a.stato_annuncio === 'oscurato' && !giàNotificati.includes(a.id_annuncio)
    );

    // Mostra un toast per ogni nuovo annuncio oscurato
    nuoviOscurati.forEach(ann => {
      this.toast.err(
        'Annuncio rimosso',
        `Il tuo annuncio "${ann.titolo}" è stato rimosso da un amministratore.`,
        '🚫'
      );
    });

    // Salva i nuovi oscurati notificati nel localStorage
    if (nuoviOscurati.length > 0) {
      const aggiornati = [
        ...giàNotificati,
        ...nuoviOscurati.map((a: any) => a.id_annuncio)
      ];
      localStorage.setItem(this.OSCURATI_KEY, JSON.stringify(aggiornati));
    }
  }

  apriModificaProfilo() { this.overlayService.apriModificaProfilo(); }

  apriModalAnnuncio(ann: any) {
    this.annuncioSelezionato.set(ann);
    this.modalAnnuncioAperto.set(true);
  }

  chiudiModalAnnuncio() {
    this.modalAnnuncioAperto.set(false);
    this.annuncioSelezionato.set(null);
  }

  chiudiAnnuncio() {
    const ann = this.annuncioSelezionato();
    if (!ann) return;
    this.annuncioService.chiudi(ann.id_annuncio).subscribe({
      next: () => {
        this.toast.ok('Annuncio chiuso', `"${ann.titolo}" è stato chiuso.`, '✅');
        this.chiudiModalAnnuncio();
        this.caricaTutto();
      },
      error: () => this.toast.err('Errore', 'Impossibile chiudere l\'annuncio.', '❌')
    });
  }

  isSbloccato(nomeBadge: string): boolean {
    return this.badge().some((b: any) => b.badge?.nome_badge === nomeBadge);
  }

  percentualeBadge(soglia: number): number {
    const punti = this.profilo()?.punteggio || 0;
    return Math.min(Math.round((punti / soglia) * 100), 100);
  }

  posizione(utente: any): number {
    return this.leaderboard().findIndex(u => u.id_utente_reg === utente.id_utente_reg) + 1;
  }

  classeStatoSegnalazione(stato: string): string {
    if (stato === 'presa_in_carico') return 'u-clr-carico';
    if (stato === 'chiusa')          return 'u-clr-chiusa';
    return 'u-clr-attesa';
  }

  vaiAllaChat() { this.router.navigate(['/chat']); }
}