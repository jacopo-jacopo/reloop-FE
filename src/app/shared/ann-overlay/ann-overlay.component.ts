import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegnalazioneService } from '../../core/services/segnalazione.service';
import { AnnuncioService } from '../../core/services/annuncio.service';
import { ToastService } from '../toast/toast.service';
import { AuthService } from '../../core/services/auth.service';
import { OverlayService } from '../../core/services/overlay.service';

@Component({
  selector: 'app-ann-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ann-overlay.component.html',
  styleUrls: ['./ann-overlay.component.scss']
})
export class AnnOverlayComponent {
  private segnalazioneService = inject(SegnalazioneService);
  private annuncioService     = inject(AnnuncioService);
  private toast               = inject(ToastService);
  private auth                = inject(AuthService);
  overlayService              = inject(OverlayService);

  // Etichette leggibili per i valori dell'enum condizioni del DB
  private readonly LABEL_CONDIZIONI: Record<string, string> = {
    scarso:     'Scarso',
    discreto:   'Discreto',
    buono:      'Buono',
    ottimo:     'Ottimo',
    come_nuovo: 'Come nuovo'
  };

  labelCondizione(value: string): string {
    return this.LABEL_CONDIZIONI[value] ?? value;
  }

  giaSegnalato      = signal(false);
  motivazione       = signal('');
  mostraSegnalaForm = signal(false);
  isMio             = signal(false);
  foto              = signal<string[]>([]);
  fotoIndice        = signal(0);

  get annuncio() { return this.overlayService.annuncioSelezionato(); }
  get aperto()   { return this.overlayService.annOverlayAperto(); }

  get fotoCorrente(): string | null {
    const f = this.foto();
    return f.length > 0 ? f[this.fotoIndice()] : null;
  }

  constructor() {
    effect(() => {
      const ann = this.overlayService.annuncioSelezionato();
      if (ann) {
        const utente = this.auth.utenteCorrente() as any;
        this.isMio.set(ann.pubblicante?.id_utente_reg === utente?.id_utente_reg);
        this.mostraSegnalaForm.set(false);
        this.motivazione.set('');
        this.giaSegnalato.set(false);
        this._controllaGiaSegnalato(ann.id_annuncio);
        this.foto.set([]);
        this.fotoIndice.set(0);

        // Carica le foto dal BE
        this.annuncioService.getFoto(ann.id_annuncio).subscribe({
          next: (f) => this.foto.set(f),
          error: () => {}
        });
      }
    });
  }

  fotoSuccessiva() {
    const n = this.foto().length;
    if (n > 1) this.fotoIndice.set((this.fotoIndice() + 1) % n);
  }

  fotoPrecedente() {
    const n = this.foto().length;
    if (n > 1) this.fotoIndice.set((this.fotoIndice() - 1 + n) % n);
  }

  chiudi()                 { this.overlayService.chiudiAnnuncio(); }
  onBgClick(e: MouseEvent) { if (e.target === e.currentTarget) this.chiudi(); }

  apriProfiloUtente() {
    const ann = this.annuncio;
    if (!ann?.pubblicante) return;
    this.overlayService.apriUtente(ann.pubblicante.id_utente_reg);
  }

  apriModalProposta() {
    const ann = this.annuncio;
    if (!ann) return;
    this.chiudi();
    this.overlayService.apriProposta(ann);
  }

  apriSegnalaForm() { this.mostraSegnalaForm.set(true); }

  inviaSegnalazione() {
    const ann = this.annuncio;
    const mot = this.motivazione().trim();
    if (!ann || !mot) {
      this.toast.warn('Campo vuoto', 'Inserisci una motivazione.', '⚠️');
      return;
    }
    this.segnalazioneService.invia(ann.id_annuncio, mot).subscribe({
      next: () => {
        this.giaSegnalato.set(true);
        this.mostraSegnalaForm.set(false);
        this.toast.err('Segnalazione inviata', 'I moderatori esamineranno l\'annuncio.', '🚩');
        setTimeout(() => this.chiudi(), 1200);
      },
      error: (err) => {
        if (err.status === 409) {
          this.giaSegnalato.set(true);
          this.mostraSegnalaForm.set(false);
          this.toast.warn('Già segnalato', 'Hai già segnalato questo annuncio.', '🚩');
        } else {
          this.toast.err('Errore', 'Impossibile inviare la segnalazione.', '❌');
        }
      }
    });
  }

  /** Controlla sul BE se l'utente ha già una segnalazione non chiusa per questo annuncio */
  private _controllaGiaSegnalato(idAnnuncio: number): void {
    this.segnalazioneService.getMie().subscribe({
      next: (segnalazioni) => {
        const giaSegnalato = segnalazioni.some(s =>
          s.annuncio_segnalato?.id_annuncio === idAnnuncio
          && s.stato_segnalazione !== 'chiusa'
        );
        this.giaSegnalato.set(giaSegnalato);
      },
      error: () => {}
    });
  }
}