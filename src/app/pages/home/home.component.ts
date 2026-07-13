import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AnnuncioService } from '../../core/services/annuncio.service';
import { OverlayService } from '../../core/services/overlay.service';
import { ToastService } from '../../shared/toast/toast.service';

// Component per la home page dell'applicazione, mostra gli annunci recenti e le statistiche di CO2 del quartiere

// inizia il decoratore, @Component definisce un componente Angular, con selettore 'app-home'
@Component({
  selector: 'app-home',
  standalone: true, // stabilisce che il componente è standalone, cioè non fa parte di un modulo Angular e usa le dipendenze dichiarate in imports
  imports: [CommonModule, RouterModule], // importa il modulo CommonModule, che fornisce direttive comuni come @if e @for
                                          // e RouterModule, che fornisce funzionalità per la navigazione tra le pagine dell'app
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

  // chimata quando il componente viene inizializzato, qui vengono caricati gli annunci recenti e le statistiche di CO2
  ngOnInit() {
    this.annuncioService.getAnnunciRecenti().subscribe({
      next: (data) => {
        const annunci = data.map((a: any) => ({ ...a, foto_preview: null }));
        this.annunciRecenti.set(annunci);
        this.loading.set(false);

        // carica la prima foto di ogni annuncio
        annunci.forEach((ann: any) => {
          this.annuncioService.getFoto(ann.id_annuncio).subscribe({
            next: (foto) => {
              if (foto.length > 0) {
                this.annunciRecenti.update(list => list.map(a => a.id_annuncio === ann.id_annuncio ? { ...a, foto_preview: foto[0] } : a ));
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

  // apre il modal di dettaglio dell'annuncio selezionato
  apriDettaglio(ann: any) { this.overlayService.apriAnnuncio(ann); }

  // naviga a una route specifica (per navigare a Annunci, Pubblica e Profilo)
  vai(route: string)      { this.router.navigate([route]); }

  iniziali(nome?: string): string {
    return (nome || '').split(' ').map((p: string) => p[0]).join('').substring(0, 2).toUpperCase();
  }

  // calcola il numero di alberi equivalenti alla quantità di CO2 del quartiere, considerando che un albero assorbe circa 21 kg di CO2 all'anno
  get alberiEquivalenti(): number {
    return Math.round(this.co2Quartiere() / 21);
  }
  // calcola il numero di km percorsi in auto equivalenti alla quantità di CO2 del quartiere, 
  // considerando che un'auto media emette circa 242g di CO2 al km
  get kmAuto(): number {
    return Math.round(this.co2Quartiere() / 0.242);
  }
}