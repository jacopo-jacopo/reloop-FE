import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { OverlayService } from '../../core/services/overlay.service';
import { ToastService } from '../toast/toast.service';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recensione-modal',
  standalone: true,
  imports: [CommonModule],
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
  hoverStella(v: number) { this.hoverVoto.set(v); }
  resetHoverStelle()     { this.hoverVoto.set(0); }
  chiudi() { this.overlayService.chiudiRecensione(); this.voto.set(0); this.hoverVoto.set(0); this.testo.set(''); }
  onBgClick(e: MouseEvent) { if (e.target === e.currentTarget) this.chiudi(); }

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