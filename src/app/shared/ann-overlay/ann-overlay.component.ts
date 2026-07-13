import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegnalazioneService } from '../../core/services/segnalazione.service';
import { AnnuncioService } from '../../core/services/annuncio.service';
import { ToastService } from '../toast/toast.service';
import { AuthService } from '../../core/services/auth.service';
import { OverlayService } from '../../core/services/overlay.service';

// Componente per la visualizzazione di un annuncio in overlay, con possibilità di segnalazione e navigazione tra le foto

// inizia il decoratore, @Component definisce un componente Angular, con selettore 'app-ann-overlay'
@Component({
  selector: 'app-ann-overlay',
  standalone: true, // stabilisce che il componente è standalone, cioè non fa parte di un modulo Angular e usa le dipendenze dichiarate in imports
  imports: [CommonModule], // importa il modulo CommonModule, che fornisce direttive comuni come @if e @for
  templateUrl: './ann-overlay.component.html',
  styleUrls: ['./ann-overlay.component.scss']
})
export class AnnOverlayComponent {
  private segnalazioneService = inject(SegnalazioneService);
  private annuncioService     = inject(AnnuncioService);
  private toast               = inject(ToastService);
  private auth                = inject(AuthService);
  overlayService              = inject(OverlayService);

  // etichette leggibili per i valori dell'enum condizioni del DB (per non avere snake case nella UI)
  private readonly LABEL_CONDIZIONI: Record<string, string> = {
    scarso:     'Scarso',
    discreto:   'Discreto',
    buono:      'Buono',
    ottimo:     'Ottimo',
    come_nuovo: 'Come nuovo'
  };

  // restituisce l'etichetta leggibile per un valore di condizione, o il valore stesso se non è presente nella mappa
  labelCondizione(value: string): string {
    return this.LABEL_CONDIZIONI[value] ?? value; // ?? è il fallback operator
  }

  giaSegnalato      = signal(false);
  motivazione       = signal('');
  mostraSegnalaForm = signal(false);
  isMio             = signal(false);
  foto              = signal<string[]>([]);
  fotoIndice        = signal(0);

  // getter per l'annuncio selezionato e per sapere se l'overlay è aperto, leggendo i signal dal servizio OverlayService
  get annuncio() { return this.overlayService.annuncioSelezionato(); }
  get aperto()   { return this.overlayService.annOverlayAperto(); }

  // getter per ottenere la foto corrente da visualizzare, basata sull'indice e sulla lista di foto
  get fotoCorrente(): string {
    return this.foto()[this.fotoIndice()];
  }

  constructor() {
    // effetto che si attiva quando l'annuncio selezionato cambia, per aggiornare lo stato dell'overlay
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

        // carica le foto dal BE
        this.annuncioService.getFoto(ann.id_annuncio).subscribe({
          next: (f) => this.foto.set(f),
          error: () => {}
        });
      }
    });
  }

  // metodi per navigare tra le foto dell'annuncio, aggiornando l'indice in modo ciclico
  fotoSuccessiva() {
    const n = this.foto().length;
    if (n > 1) this.fotoIndice.set((this.fotoIndice() + 1) % n);
  }
  fotoPrecedente() {
    const n = this.foto().length;
    if (n > 1) this.fotoIndice.set((this.fotoIndice() - 1 + n) % n);
  }

  // metodi per chiudere l'overlay catturando il click sul pulsante "Chiudi" o sullo sfondo
  chiudi()                 { this.overlayService.chiudiAnnuncio(); }
  onBgClick(e: MouseEvent) { if (e.target === e.currentTarget) this.chiudi(); }

  // metodo per ottenere le iniziali del nome completo di un utente
  iniziali(nome?: string): string {
    return (nome || '').split(' ')                  // (nome || '') e non nome? perché map su undefined da errore
                       .map((p: string) => p[0])
                       .join('').substring(0, 2)
                       .toUpperCase();
  }

  // metodo per aprire il profilo dell'utente che ha pubblicato l'annuncio
  apriProfiloUtente() {
    const ann = this.annuncio;
    if (!ann?.pubblicante) return;
    this.overlayService.apriUtente(ann.pubblicante.id_utente_reg);
  }

  // metodo per aprire il form di proposta, se l'annuncio non è mio e non l'ho segnalato
  apriModalProposta() {
    const ann = this.annuncio;
    if (!ann || this.giaSegnalato()) return;
    this.chiudi();
    this.overlayService.apriProposta(ann);
  }

  // metodo per aprire il form di segnalazione
  apriSegnalaForm() { this.mostraSegnalaForm.set(true); }

  // metodo per inviare la segnalazione
  inviaSegnalazione() {
    const ann = this.annuncio;
    const mot = this.motivazione().trim(); // trim rimuove spazi bianchi iniziali e finali
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
        if (err.status === 409) { // 409 = conflitto, l'utente ha già una segnalazione aperta per questo annuncio
          this.giaSegnalato.set(true);
          this.mostraSegnalaForm.set(false);
          this.toast.warn('Già segnalato', 'Hai già segnalato questo annuncio.', '🚩');
        } else {
          this.toast.err('Errore', 'Impossibile inviare la segnalazione.', '❌');
        }
      }
    });
  }

  // controlla sul BE se l'utente ha già una segnalazione non chiusa per questo annuncio
  private _controllaGiaSegnalato(idAnnuncio: number): void {
    this.segnalazioneService.getMie().subscribe({
      next: (segnalazioni) => {
        const giaSegnalato = segnalazioni.some(s => // some restituisce true se almeno un elemento dell'array soddisfa la condizione
          s.annuncio_segnalato?.id_annuncio === idAnnuncio
          && s.stato_segnalazione !== 'chiusa'
        );
        this.giaSegnalato.set(giaSegnalato);
      },
      error: () => {}
    });
  }
}