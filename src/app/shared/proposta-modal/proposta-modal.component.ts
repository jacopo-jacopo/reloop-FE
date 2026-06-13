import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayService } from '../../core/services/overlay.service';
import { PropostaService } from '../../core/services/proposta.service';
import { AnnuncioService } from '../../core/services/annuncio.service';
import { ToastService } from '../toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposta-modal',
  standalone: true,
  imports: [CommonModule],
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

  get aperto()         { return this.overlayService.propostaAperta(); }
  get annuncioTarget() { return this.overlayService.annuncioTarget(); }
  get nSelezionati()   { return this.selezionati().size; }

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

  toggleAnnuncio(id: number) {
    this.selezionati.update(set => {
      const n = new Set(set);
      if (n.has(id)) n.delete(id); else n.add(id);
      return n;
    });
  }

  isSelezionato(id: number) { return this.selezionati().has(id); }
  chiudi()                  { this.overlayService.chiudiProposta(); }
  onBgClick(e: MouseEvent)  { if (e.target === e.currentTarget) this.chiudi(); }

  inviaProposta() {
    const target = this.annuncioTarget;
    if (!target || !this.nSelezionati) return;
    this.loading.set(true);
    this.propostaService.invia(target.id_annuncio, Array.from(this.selezionati())).subscribe({
      next: () => {
        this.loading.set(false);
        this.toast.ok('Proposta inviata! 🤝', "L'utente riceverà la tua proposta.", '📤');
        this.chiudi();
        setTimeout(() => this.router.navigate(['/proposte'], {
          queryParams: { tab: 'inv' }
        }), 900);
      },
      error: () => {
        this.loading.set(false);
        this.toast.err('Errore', 'Impossibile inviare la proposta.', '❌');
      }
    });
  }
}