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

  // Ordine di visualizzazione dei badge nel profilo
  private readonly ORDINE_BADGE = [
    'Primo passo',
    'Riciclatore Seriale',
    'Leggenda verde',
    'Green Hero',
    'In cima al mondo',
    'Vicino di fiducia',
    'Punto di riferimento',
    'Verde profondo',
    'Eco-Mostro',
    'Irraggiungibilmente green'
  ];

  get tuttiBadgeOrdinati() {
    return [...this.tuttiBadge()].sort((a, b) => {
      const ia = this.ORDINE_BADGE.findIndex(n => n.toLowerCase() === a.nome_badge?.toLowerCase());
      const ib = this.ORDINE_BADGE.findIndex(n => n.toLowerCase() === b.nome_badge?.toLowerCase());
      return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
    });
  }

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
   * Controlla se ci sono annunci oscurati dall'admin non ancora notificati
   * (notifica_oscuramento_letta = 0 sul DB), mostra il toast e segna la
   * notifica come letta sul BE per non ripeterla.
   */
  private _notificaAnnunciOscurati(annunci: any[]) {
    const nuoviOscurati = annunci.filter(
      a => a.stato_annuncio === 'oscurato' && !a.notifica_oscuramento_letta
    );

    nuoviOscurati.forEach(ann => {
      this.toast.err(
        'Annuncio rimosso',
        `Il tuo annuncio "${ann.titolo}" è stato rimosso da un amministratore.`,
        '🚫'
      );
      this.annuncioService.segnaNotificaOscuramentoLetta(ann.id_annuncio).subscribe({
        error: () => {}
      });
    });
  }

  apriModificaProfilo() { this.overlayService.apriModificaProfilo(); }

  apriProfiloUtente(idUtente: number) { this.overlayService.apriUtente(idUtente); }

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

  testoStatoSegnalazione(stato: string): string {
    return (stato || '').replace(/_/g, ' ');
  }

  vaiAllaChat(ann: any) { this.router.navigate(['/chat'], { queryParams: { idAnnuncio: ann.id_annuncio } }); }
}