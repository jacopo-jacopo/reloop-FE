import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnuncioService } from '../../core/services/annuncio.service';
import { OverlayService } from '../../core/services/overlay.service';
import { ToastService } from '../../shared/toast/toast.service';

@Component({
  selector: 'app-annunci',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './annunci.component.html',
  styleUrls: ['./annunci.component.scss']
})
export class AnnunciComponent implements OnInit {
  private annuncioService = inject(AnnuncioService);
  private overlayService  = inject(OverlayService);
  private toast           = inject(ToastService);

  annunci         = signal<any[]>([]);
  annunciFiltrati = signal<any[]>([]);
  loading         = signal(true);
  categoriaAttiva = signal('tutti');
  searchQuery     = signal('');

  readonly categorie = [
    { label: 'Tutti',              value: 'tutti'       },
    { label: '🚲 Trasporti',       value: 'trasporti'   },
    { label: '🏠 Arredamento',     value: 'arredamento' },
    { label: '📚 Libri',           value: 'libri'       },
    { label: '⚽ Sport',           value: 'sport'       },
    { label: '💻 Elettronica',     value: 'elettronica' },
    { label: '🍳 Casa & Cucina',   value: 'casa'        },
    { label: '🎸 Musica',          value: 'musica'      },
  ];

  ngOnInit() {
    this.annuncioService.getAnnunciQuartiere().subscribe({
      next: (data) => {
        // Per ogni annuncio carica la prima foto in background
        const annunci = data.map((a: any) => ({ ...a, foto_preview: null }));
        this.annunci.set(annunci);
        this.annunciFiltrati.set(annunci);
        this.loading.set(false);

        // Carica le foto in parallelo senza bloccare il rendering
        annunci.forEach((ann: any) => {
          this.annuncioService.getFoto(ann.id_annuncio).subscribe({
            next: (foto) => {
              if (foto.length > 0) {
                // Aggiorna la foto_preview dell'annuncio specifico
                this.annunci.update(list =>
                  list.map(a => a.id_annuncio === ann.id_annuncio
                    ? { ...a, foto_preview: foto[0] }
                    : a
                  )
                );
                this.annunciFiltrati.update(list =>
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
  }

  filtra(categoria: string) {
    this.categoriaAttiva.set(categoria);
    this._appliFiltri();
  }

  cerca(q: string) {
    this.searchQuery.set(q);
    this._appliFiltri();
  }

  private _appliFiltri() {
    let r = this.annunci();
    if (this.categoriaAttiva() !== 'tutti') {
      r = r.filter(a => a.categoria.toLowerCase().includes(this.categoriaAttiva()));
    }
    if (this.searchQuery()) {
      r = r.filter(a => a.titolo.toLowerCase().includes(this.searchQuery().toLowerCase()));
    }
    this.annunciFiltrati.set(r);
  }

  apriDettaglio(ann: any) { this.overlayService.apriAnnuncio(ann); }
}