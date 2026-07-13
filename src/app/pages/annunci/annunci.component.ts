import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnuncioService } from '../../core/services/annuncio.service';
import { OverlayService } from '../../core/services/overlay.service';
import { ToastService } from '../../shared/toast/toast.service';

// Component per la visualizzazione degli annunci, mostra una lista di annunci filtrabili per categoria e query di ricerca 
// e gestisce l'apertura del dettaglio dell'annuncio

// inizia il decoratore, @Component definisce un componente Angular, con selettore 'app-annunci'
@Component({
  selector: 'app-annunci', 
  standalone: true, // stabilisce che il componente è standalone, cioè non fa parte di un modulo Angular e usa le dipendenze dichiarate in imports
  imports: [CommonModule], // importa il modulo CommonModule, che fornisce direttive comuni come @if e @for
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
    { label: 'Tutti',          value: 'tutti'       },
    { label: 'Arredamento',    value: 'arredamento' },
    { label: 'Libri',          value: 'libri'       },
    { label: 'Sport',          value: 'sport'       },
    { label: 'Elettronica',    value: 'elettronica' },
    { label: 'Casa & Cucina',  value: 'casa'        },
    { label: 'Musica',         value: 'musica'      },
  ];

  // ngOnInit viene chiamato quando il componente viene inizializzato, caricando gli annunci dal backend
  ngOnInit() {
    this.annuncioService.getAnnunciQuartiere().subscribe({
      next: (data) => {
        // per ogni annuncio carica la prima foto
        const annunci = data.map((a: any) => ({ ...a, foto_preview: null }));
        this.annunci.set(annunci);
        this.annunciFiltrati.set(annunci);
        this.loading.set(false);

        // carica le altre foto 
        annunci.forEach((ann: any) => {
          this.annuncioService.getFoto(ann.id_annuncio).subscribe({
            next: (foto) => {
              if (foto.length > 0) {
                // aggiorna la foto_preview dell'annuncio specifico
                this.annunci.update(list =>
                  list.map(a => a.id_annuncio === ann.id_annuncio ? { ...a, foto_preview: foto[0] } : a));
                this.annunciFiltrati.update(list =>
                  list.map(a => a.id_annuncio === ann.id_annuncio ? { ...a, foto_preview: foto[0] } : a));
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

  // filtra gli annunci per categoria e aggiorna la lista filtrata
  filtra(categoria: string) {
    this.categoriaAttiva.set(categoria);
    this._applicaFiltri();
  }

  // filtra gli annunci per query di ricerca e aggiorna la lista filtrata
  cerca(q: string) {
    this.searchQuery.set(q);
    this._applicaFiltri();
  }

  // applica i filtri di categoria e ricerca agli annunci e aggiorna la lista filtrata
  private _applicaFiltri() {
    let r = this.annunci();
    if (this.categoriaAttiva() !== 'tutti') {
      r = r.filter(a => a.categoria.toLowerCase().includes(this.categoriaAttiva()));
    }
    if (this.searchQuery()) {
      r = r.filter(a => a.titolo.toLowerCase().includes(this.searchQuery().toLowerCase()));
    }
    this.annunciFiltrati.set(r);
  }

  // apre il dettaglio dell'annuncio selezionato, passando l'annuncio al servizio OverlayService
  apriDettaglio(ann: any) { this.overlayService.apriAnnuncio(ann); }

  iniziali(nome?: string): string {
    return (nome || '').split(' ').map((p: string) => p[0]).join('').substring(0, 2).toUpperCase();
  }
}