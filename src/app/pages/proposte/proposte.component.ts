import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PropostaService } from '../../core/services/proposta.service';
import { NotificationService } from '../../core/services/notification.service';
import { ToastService } from '../../shared/toast/toast.service';

// Component per la pagina delle proposte, mostra le proposte ricevute e inviate dall'utente.

// inizia il decoratore, @Component definisce un componente Angular, con selettore 'app-proposte'
@Component({
  selector: 'app-proposte',
  standalone: true, // stabilisce che il componente è standalone, cioè non fa parte di un modulo Angular e usa le dipendenze dichiarate in imports
  imports: [CommonModule], // importa il modulo CommonModule, che fornisce direttive comuni come @if e @for
  templateUrl: './proposte.component.html',
  styleUrls: ['./proposte.component.scss']
})
export class ProposteComponent implements OnInit {
  private propostaService = inject(PropostaService);
  private notif           = inject(NotificationService);
  private toast           = inject(ToastService);
  private router          = inject(Router);
  private route           = inject(ActivatedRoute);

  tabAttiva      = signal<'ric' | 'inv'>('ric');
  ricevute       = signal<any[]>([]);
  inviate        = signal<any[]>([]);
  loading        = signal(true);
  // map id_proposta → id_annuncio del'oggetto scelto tra i multi-offerti
  scelte         = signal<Map<number, number>>(new Map());
  // id_proposta della proposta in fase di accettazione (per disabilitare i bottoni)
  accettando     = signal<number | null>(null);

  // metodo chiamato all'inizializzazione del componente, carica le proposte ricevute e inviate dall'utente
  ngOnInit() {
    const tab = this.route.snapshot                   // snapshot della route attuale, contiene informazioni sulla route attuale
                          .queryParamMap.get('tab');
    if (tab === 'inv') this.tabAttiva.set('inv');
    this.notif.visitaProposte();
    this.caricaTutto();
  }

  // carica le proposte ricevute e inviate dall'utente, gestisce lo stato di caricamento e mostra eventuali errori tramite toast
  caricaTutto() {
    this.loading.set(true);
    this.scelte.set(new Map());
    this.propostaService.getRicevute().subscribe({
      next: (data) => this.ricevute.set(data),
      error: () => this.toast.err('Errore', 'Impossibile caricare le proposte ricevute.', '❌')
    });
    this.propostaService.getInviate().subscribe({
      next: (data) => {
        this.inviate.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.toast.err('Errore', 'Impossibile caricare le proposte inviate.', '❌');
        this.loading.set(false);
      }
    });
  }

  switchTab(t: 'ric' | 'inv') { this.tabAttiva.set(t); }

  // seleziona un annuncio offerto per una proposta specifica, aggiornando la mappa delle scelte
  seleziona(idProposta: number, idAnnuncio: number) {
    this.scelte.update(m => { const n = new Map(m); 
                              n.set(idProposta, idAnnuncio);
                              return n; });
  }

  // verifica se un annuncio offerto è stato selezionato per una proposta specifica
  isSelezionato(idProposta: number, idAnnuncio: number): boolean {
    return this.scelte().get(idProposta) === idAnnuncio;
  }

  // verifica se l'utente può accettare una proposta specifica, basandosi sullo stato di accettazione e sul numero di annunci offerti
  canAccetta(proposta: any): boolean {
    if (this.accettando() !== null) return false;
    if ((proposta.annunci_offerti?.length ?? 0) <= 1) return true;
    return this.scelte().has(proposta.id_proposta);
  }

  accetta(proposta: any) {
    const offerti: any[] = proposta.annunci_offerti ?? [];
    const idScelto: number | undefined = offerti.length === 1 ? offerti[0].annuncio_offerto?.id_annuncio : this.scelte().get(proposta.id_proposta);
    if (!idScelto) return;

    this.accettando.set(proposta.id_proposta);
    this.propostaService.accetta(proposta.id_proposta, idScelto).subscribe({
      next: () => {
        this.accettando.set(null);
        this.toast.ok('Proposta accettata!', 'Gli annunci sono sospesi. La chat è aperta.', '🤝');
        this.caricaTutto();
        setTimeout(() => this.router.navigate(['/chat']), 1200);
      },
      error: () => {
        this.accettando.set(null);
        this.toast.err('Errore', 'Impossibile accettare la proposta.', '❌');
      }
    });
  }

  rifiuta(proposta: any) {
    this.propostaService.rifiuta(proposta.id_proposta).subscribe({
      next: () => {
        this.toast.info('Proposta rifiutata', "L'utente è stato notificato.", '✗');
        this.caricaTutto();
      },
      error: () => this.toast.err('Errore', 'Impossibile rifiutare la proposta.', '❌')
    });
  }

  // aggiunge una classe CSS specifica in base allo stato di una proposta, per stilizzare visivamente le proposte in base al loro stato
  badgeClass(stato: string): string {
    if (stato === 'accettata') return 'prop-badge pb-acc';
    if (stato === 'rifiutata') return 'prop-badge pb-ref';
    return 'prop-badge pb-wait';
  }

  // restituisce un'etichetta leggibile per lo stato di una proposta specifica
  labelStato(stato: string): string {
    if (stato === 'accettata') return 'Accettata';
    if (stato === 'rifiutata') return 'Rifiutata';
    return 'In attesa';
  }

  initials(name: string | undefined): string {
    return name?.split(' ')?.map((p: string) => p[0])?.join('')?.substring(0, 2)?.toUpperCase() ?? '?';
  }
}
