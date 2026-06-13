import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtenteService } from '../../core/services/utente.service';
import { OverlayService } from '../../core/services/overlay.service';

@Component({
  selector: 'app-user-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-overlay.component.html',
  styleUrls: ['./user-overlay.component.scss']
})
export class UserOverlayComponent {
  private utenteService = inject(UtenteService);
  overlayService        = inject(OverlayService);

  utente     = signal<any>(null);
  loading    = signal(false);
  recensioni = signal<any[]>([]);

  get aperto()   { return this.overlayService.userOverlayAperto(); }
  get iniziali() {
    const nome = this.utente()?.nome_completo || '';
    return nome.split(' ').map((p: string) => p[0]).join('').substring(0, 2).toUpperCase();
  }

  constructor() {
    effect(() => {
      const id = this.overlayService.idUtenteSelezionato();
      if (id) {
        this.loading.set(true);
        this.utenteService.getById(id).subscribe({
          next: (u) => { this.utente.set(u); this.loading.set(false); },
          error: () => this.loading.set(false)
        });
        this.utenteService.getRecensioni(id).subscribe({
          next: (r) => this.recensioni.set(r),
          error: () => {}
        });
      }
    });
  }

  chiudi()                  { this.overlayService.chiudiUtente(); }
  onBgClick(e: MouseEvent)  { if (e.target === e.currentTarget) this.chiudi(); }
}