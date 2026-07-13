import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayService } from '../../core/services/overlay.service';

// Component per mostrare un overlay con le informazioni di un utente selezionato, come nome, foto profilo e recensioni ricevute

// inizia il decoratore, @Component definisce un componente Angular, con selettore 'app-user-overlay'
@Component({
  selector: 'app-user-overlay',
  standalone: true, // stabilisce che il componente è standalone, cioè non fa parte di un modulo Angular e usa le dipendenze dichiarate in imports
  imports: [CommonModule], // importa il modulo CommonModule, che fornisce direttive comuni come @if e @for
  templateUrl: './user-overlay.component.html',
  styleUrls: ['./user-overlay.component.scss']
})
export class UserOverlayComponent {
  overlayService = inject(OverlayService);

  get iniziali() {
    const nome = this.overlayService.utenteSelezionato()?.nome_completo || '';
    return nome.split(' ').map((p: string) => p[0]).join('').substring(0, 2).toUpperCase();
  }

  // getter per ottenere la media dei voti delle recensioni ricevute dall'utente selezionato
  get mediaVoto(): number | null {
    const r = this.overlayService.recensioniUtente();
    if (!r.length) return null;
    return r.reduce((acc, x) => acc + x.voto, 0) / r.length;
  }

  // chiude l'overlay utente se l'utente clicca su 'Chiudi' o sullo sfondo dell'overlay
  chiudi()                  { this.overlayService.chiudiUtente(); }
  onBgClick(e: MouseEvent)  { if (e.target === e.currentTarget) this.chiudi(); }
}
