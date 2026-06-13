import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AnnuncioService } from '../../core/services/annuncio.service';
import { OverlayService } from '../../core/services/overlay.service';
import { ToastService } from '../../shared/toast/toast.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private annuncioService = inject(AnnuncioService);
  private overlayService  = inject(OverlayService);
  private toast           = inject(ToastService);
  private router          = inject(Router);

  annunciRecenti = signal<any[]>([]);
  co2Quartiere   = signal(0);
  loading        = signal(true);

  ngOnInit() {
    this.annuncioService.getAnnunciRecenti().subscribe({
      next: (data) => {
        const annunci = data.map((a: any) => ({ ...a, foto_preview: null }));
        this.annunciRecenti.set(annunci);
        this.loading.set(false);

        // Carica la prima foto di ogni annuncio in background
        annunci.forEach((ann: any) => {
          this.annuncioService.getFoto(ann.id_annuncio).subscribe({
            next: (foto) => {
              if (foto.length > 0) {
                this.annunciRecenti.update(list =>
                  list.map(a => a.id_annuncio === ann.id_annuncio
                    ? { ...a, foto_preview: foto[0] }
                    : a
                  )
                );
              }
            },
            error: () => {}
          });
        });
      },
      error: () => {
        this.toast.err('Errore', 'Impossibile caricare gli annunci.', '❌');
        this.loading.set(false);
      }
    });

    this.annuncioService.getCo2Quartiere().subscribe({
      next: (co2) => this.co2Quartiere.set(co2),
      error: () => {}
    });
  }

  apriDettaglio(ann: any) { this.overlayService.apriAnnuncio(ann); }
  vai(route: string)      { this.router.navigate([route]); }

  get alberiEquivalenti(): number {
    return Math.round(this.co2Quartiere() / 21);
  }

  get kmAuto(): number {
    return Math.round(this.co2Quartiere() / 0.242);
  }
}