import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayService } from '../../core/services/overlay.service';
import { PropostaService } from '../../core/services/proposta.service';
import { AnnuncioService } from '../../core/services/annuncio.service';
import { ToastService } from '../toast/toast.service';
import { Router } from '@angular/router';

// Component per la gestione del modal di invio proposta, mostra gli annunci dell'utente e permette di selezionare quelli a cui inviare la proposta

// inizia il decoratore, @Component definisce un componente Angular, con selettore 'app-proposta-modal'
@Component({
  selector: 'app-proposta-modal',
  standalone: true, // stabilisce che il componente è standalone, cioè non fa parte di un modulo Angular e usa le dipendenze dichiarate in imports
  imports: [CommonModule], // importa il modulo CommonModule, che fornisce direttive comuni come @if e @for
  templateUrl: './proposta-modal.component.html',
  styleUrls: ['./proposta-modal.component.scss']
})
export class PropostaModalComponent {
  private overlayService  = inject(OverlayService);
  private propostaService = inject(PropostaService);
  private annuncioService = inject(AnnuncioService);
  private toast           = inject(ToastService);
  private router          = inject(Router);

  mieiAnnunci    = signal<any[]>([]);
  selezionati    = signal<Set<number>>(new Set());
  loadingAnnunci = signal(false);
  loading        = signal(false);

  // getter per sapere se il modal di proposta è aperto, qual è l'annuncio target e quanti annunci sono stati selezionati
  get aperto()         { return this.overlayService.propostaAperta(); }
  get annuncioTarget() { return this.overlayService.annuncioTarget(); }
  get nSelezionati()   { return this.selezionati().size; }

  // costruttore del componente, imposta un effetto che si attiva quando il modal di proposta viene aperto, 
  // per caricare gli annunci dell'utente dal backend
  constructor() {
    effect(() => {
      if (this.overlayService.propostaAperta()) {
        this.loadingAnnunci.set(true);
        this.annuncioService.getMieiAnnunci().subscribe({
          next: (data) => {
            this.mieiAnnunci.set(data.filter((a: any) => a.stato_annuncio === 'attivo'));
            this.loadingAnnunci.set(false);
          },
          error: () => this.loadingAnnunci.set(false)
        });
        this.selezionati.set(new Set());
      }
    });
  }

  // aggiorna il set di annunci selezionati, aggiungendo o rimuovendo l'id dell'annuncio cliccato
  toggleAnnuncio(id: number) {
    this.selezionati.update(set => {
      const n = new Set(set);
      if (n.has(id)) n.delete(id); 
      else n.add(id);
      return n;
    });
  }

  // verifica se un annuncio è selezionato (utile per aggiornare la UI)
  isSelezionato(id: number) { return this.selezionati().has(id); }

  // metodi per chiudere il modal in caso di click su 'Annulla' o sullo sfondo
  chiudi()                  { this.overlayService.chiudiProposta(); }
  onBgClick(e: MouseEvent)  { if (e.target === e.currentTarget) this.chiudi(); }

  // invia la proposta al backend, mostrando un toast di conferma o errore a seconda del risultato
  inviaProposta() {
    const target = this.annuncioTarget;
    if (!target || !this.nSelezionati) return;
    this.loading.set(true);
    this.propostaService.invia(target.id_annuncio, Array.from(this.selezionati())).subscribe({
      next: () => {
        this.loading.set(false);
        this.toast.ok('Proposta inviata!', "L'utente riceverà la tua proposta.", '📤');
        this.chiudi();
        setTimeout(() => this.router.navigate(['/proposte'], {
          queryParams: { tab: 'inv' } // queryParams per aprire la tab "inviate" della pagina delle proposte
        }), 900);
      },
      error: () => {
        this.loading.set(false);
        this.toast.err('Errore', 'Impossibile inviare la proposta.', '❌');
      }
    });
  }
}