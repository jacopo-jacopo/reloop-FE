import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegnalazioneService } from '../../core/services/segnalazione.service';
import { AnnuncioService } from '../../core/services/annuncio.service';
import { ToastService } from '../../shared/toast/toast.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private segnalazioneService = inject(SegnalazioneService);
  private annuncioService     = inject(AnnuncioService);
  private toast               = inject(ToastService);
  private auth                = inject(AuthService);

  segnalazioni       = signal<any[]>([]);
  segnalazioneAttiva = signal<any | null>(null);
  annuncioAttivo     = signal<any | null>(null);
  fotoAnnuncio       = signal<string[]>([]);
  loading            = signal(true);

  ngOnInit() { this.caricaSegnalazioni(); }

  caricaSegnalazioni() {
    this.segnalazioneService.getTutte().subscribe({
      next: (data) => { this.segnalazioni.set(data); this.loading.set(false); },
      error: () => { this.toast.err('Errore', 'Impossibile caricare le segnalazioni.', '❌'); this.loading.set(false); }
    });
  }

  ispeziona(s: any) {
    this.segnalazioneAttiva.set(s);
    this.fotoAnnuncio.set([]);
    const idAnnuncio = s.annuncio_segnalato?.id_annuncio;
    if (idAnnuncio) {
      this.annuncioService.getById(idAnnuncio).subscribe({
        next: (ann) => this.annuncioAttivo.set(ann),
        error: () => {}
      });
      this.annuncioService.getFoto(idAnnuncio).subscribe({
        next: (f) => this.fotoAnnuncio.set(f),
        error: () => {}
      });
    }
    if (s.stato_segnalazione === 'in_attesa') {
      this.segnalazioneService.prendiInCarico(s.id_segnalazione).subscribe({
        next: (aggiornata) => {
          this.segnalazioni.update(list =>
            list.map(x => x.id_segnalazione === aggiornata.id_segnalazione ? aggiornata : x)
          );
          this.segnalazioneAttiva.set(aggiornata);
          this.toast.ok('Presa in carico', `Segnalazione #${s.id_segnalazione} assegnata a te.`, '📂');
        },
        error: () => {}
      });
    }
  }

  risolvi(oscura: boolean) {
    const s = this.segnalazioneAttiva();
    if (!s) return;
    this.segnalazioneService.chiudi(s.id_segnalazione, oscura).subscribe({
      next: (aggiornata) => {
        this.segnalazioni.update(list =>
          list.map(x => x.id_segnalazione === aggiornata.id_segnalazione ? aggiornata : x)
        );
        this.segnalazioneAttiva.set(aggiornata);
        this.annuncioAttivo.set(aggiornata?.annuncio_segnalato || null);
        if (oscura) this.toast.err('Annuncio rimosso', 'L\'annuncio è stato oscurato.', '🗑️');
        else        this.toast.ok('Segnalazione respinta', 'Annuncio conforme.', '🟢');
      },
      error: () => this.toast.err('Errore', 'Impossibile risolvere.', '❌')
    });
  }

  confermaLogoutAperta = signal(false);

  apriConfermaLogout()   { this.confermaLogoutAperta.set(true); }
  chiudiConfermaLogout() { this.confermaLogoutAperta.set(false); }

  logout() {
    this.confermaLogoutAperta.set(false);
    this.auth.logout();
  }

  badgeClass(stato: string): string {
    if (stato === 'presa_in_carico') return 'badge-stato badge-carico';
    if (stato === 'chiusa')          return 'badge-stato badge-chiusa';
    return 'badge-stato badge-attesa';
  }

  testoStato(stato: string): string {
    return (stato || '').replace(/_/g, ' ');
  }

  /** ID dell'admin attualmente loggato. */
  idAdminCorrente(): number | null {
    return this.auth.utenteCorrente()?.id_utente_adm ?? null;
  }

  /** Segnalazioni ancora da prendere in carico. */
  segnalazioniInAttesa() {
    return this.segnalazioni().filter(s => s.stato_segnalazione === 'in_attesa');
  }

  /** Segnalazioni prese in carico o chiuse dall'admin attualmente loggato. */
  segnalazioniMie() {
    const id = this.idAdminCorrente();
    return this.segnalazioni().filter(s =>
      s.stato_segnalazione !== 'in_attesa' && s.amministratore?.id_utente_adm === id
    );
  }

  /** Segnalazioni prese in carico o chiuse da altri amministratori. */
  segnalazioniAltri() {
    const id = this.idAdminCorrente();
    return this.segnalazioni().filter(s =>
      s.stato_segnalazione !== 'in_attesa' && s.amministratore?.id_utente_adm !== id
    );
  }

  /** Indica se l'admin loggato può agire su questa segnalazione (è sua o non ancora presa in carico). */
  puoAgire(s: any): boolean {
    if (!s) return false;
    if (s.stato_segnalazione === 'chiusa') return false;
    if (s.stato_segnalazione === 'presa_in_carico') {
      return s.amministratore?.id_utente_adm === this.idAdminCorrente();
    }
    return true;
  }
}