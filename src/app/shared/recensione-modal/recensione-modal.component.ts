import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { OverlayService } from '../../core/services/overlay.service';
import { ToastService } from '../toast/toast.service';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

// Component per la gestione del modal di invio recensione: 
// permette di selezionare un voto e scrivere un commento per recensire un utente con cui si è completata una chat

// inizia il decoratore, @Component definisce un componente Angular, con selettore 'app-recensione-modal'
@Component({
  selector: 'app-recensione-modal',
  standalone: true, // stabilisce che il componente è standalone, cioè non fa parte di un modulo Angular e usa le dipendenze dichiarate in imports
  imports: [CommonModule], // importa il modulo CommonModule, che fornisce direttive comuni come @if e @for
  templateUrl: './recensione-modal.component.html',
  styleUrls: ['./recensione-modal.component.scss']
})
export class RecensioneModalComponent {
  private http           = inject(HttpClient);
  private overlayService = inject(OverlayService);
  private toast          = inject(ToastService);
  private auth           = inject(AuthService);
  private router         = inject(Router);

  private readonly API = 'http://localhost:8080/api';

  voto      = signal(0);
  hoverVoto = signal(0);
  testo     = signal('');
  loading   = signal(false);

  readonly stelle = [1, 2, 3, 4, 5];

  get aperto() { return this.overlayService.recensioneAperta(); }

  impostaVoto(v: number) { this.voto.set(v); }
  hoverStella(v: number) { this.hoverVoto.set(v); } // imposta il voto temporaneo quando l'utente passa il mouse sopra una stella
  resetHoverStelle()     { this.hoverVoto.set(0); }
  chiudi() { this.overlayService.chiudiRecensione(); 
             this.voto.set(0); 
             this.hoverVoto.set(0); 
             this.testo.set(''); }

  // chiude il modal di recensione se l'utente clicca sullo sfondo del modal
  onBgClick(e: MouseEvent) { if (e.target === e.currentTarget) this.chiudi(); } 

  // invia la recensione al backend, mostrando un messaggio di successo o errore a seconda del risultato
  invia() {
    if (!this.voto()) { this.toast.warn('Valutazione mancante', 'Seleziona almeno una stella.', '⚠️'); return; }
    if (!this.testo().trim()) { this.toast.warn('Testo mancante', 'Inserisci un breve commento.', '⚠️'); return; }
    const idRecensito = this.overlayService.idUtenteRecensito();
    if (!idRecensito) return;
    const idChat = this.overlayService.idChatCompletata();
    this.loading.set(true);
    this.http.post(`${this.API}/recensioni`, {
      id_utente_reg_recensito: idRecensito,
      voto:                    this.voto(),
      descrizione_recensione:  this.testo().trim(),
      id_chat:                 idChat
    }).subscribe({
      next: () => {
        this.loading.set(false);
        this.toast.ok('Recensione inviata!', 'Grazie per aver aiutato la comunità.', '⭐');
        this.chiudi();
        this.router.navigate(['/profilo']);
      },
      error: () => { this.loading.set(false); this.toast.err('Errore', 'Impossibile inviare la recensione.', '❌'); }
    });
  }
}