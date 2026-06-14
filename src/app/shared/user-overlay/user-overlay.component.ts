import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayService } from '../../core/services/overlay.service';

@Component({
  selector: 'app-user-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-overlay.component.html',
  styleUrls: ['./user-overlay.component.scss']
})
export class UserOverlayComponent {
  overlayService = inject(OverlayService);

  get iniziali() {
    const nome = this.overlayService.utenteSelezionato()?.nome_completo || '';
    return nome.split(' ').map((p: string) => p[0]).join('').substring(0, 2).toUpperCase();
  }

  /** Media dei voti delle recensioni ricevute, oppure null se non ce ne sono. */
  get mediaVoto(): number | null {
    const r = this.overlayService.recensioniUtente();
    if (!r.length) return null;
    return r.reduce((acc, x) => acc + x.voto, 0) / r.length;
  }

  chiudi()                  { this.overlayService.chiudiUtente(); }
  onBgClick(e: MouseEvent)  { if (e.target === e.currentTarget) this.chiudi(); }
}
