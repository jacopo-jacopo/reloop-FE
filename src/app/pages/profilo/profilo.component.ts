import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UtenteService } from '../../core/services/utente.service';
import { AnnuncioService } from '../../core/services/annuncio.service';
import { SegnalazioneService } from '../../core/services/segnalazione.service';
import { ToastService } from '../../shared/toast/toast.service';
import { AuthService } from '../../core/services/auth.service';
import { OverlayService } from '../../core/services/overlay.service';
import { Router } from '@angular/router';

// Component per la pagina del profilo utente, mostra le informazioni dell'utente, i suoi annunci, badge, segnalazioni, recensioni e leaderboard.
// Contiene metodi per caricare i dati dal backend, aprire modali per modificare il profilo o visualizzare annunci e gestire le azioni sugli annunci.

// inizia il decoratore, @Component definisce un componente Angular, con selettore 'app-profilo'
@Component({
  selector: 'app-profilo',
  standalone: true,  // stabilisce che il componente è standalone, cioè non fa parte di un modulo Angular e usa le dipendenze dichiarate in imports
  imports: [CommonModule, RouterModule], // importa il modulo CommonModule, che fornisce direttive comuni come @if e @for
                                         // e RouterModule, che fornisce funzionalità per la navigazione tra le pagine dell'applicazione
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {
  private utenteService       = inject(UtenteService);
  private annuncioService     = inject(AnnuncioService);
  private segnalazioneService = inject(SegnalazioneService);
  private toast               = inject(ToastService);
  private auth                = inject(AuthService);
  private overlayService      = inject(OverlayService);
  private router              = inject(Router);

  profilo      = signal<any>(null);
  annunci      = signal<any[]>([]);
  badge        = signal<any[]>([]);
  tuttiBadge   = signal<any[]>([]);
  segnalazioni = signal<any[]>([]);
  leaderboard  = signal<any[]>([]);
  recensioni   = signal<any[]>([]);
  fotoProfilo  = signal<string | null>(null);
  loading      = signal(true);

  annuncioSelezionato = signal<any>(null);
  modalAnnuncioAperto = signal(false);

  // getter per filtrare gli annunci in base al loro stato
  get annunciAttivi()   { return this.annunci().filter(a => a.stato_annuncio === 'attivo'); }
  get annunciSospesi()  { return this.annunci().filter(a => a.stato_annuncio === 'sospeso'); }
  get annunciChiusi()   { return this.annunci().filter(a => a.stato_annuncio === 'chiuso'); }
  get annunciOscurati() { return this.annunci().filter(a => a.stato_annuncio === 'oscurato'); }

  // ordine di visualizzazione dei badge nel profilo
  private readonly ORDINE_BADGE = [
    'Primo passo',
    'Riciclatore Seriale',
    'Leggenda verde',
    'Green Hero',
    'In cima al mondo',
    'Vicino di fiducia',
    'Punto di riferimento',
    'Verde profondo',
    'Eco-Mostro',
    'Irraggiungibilmente green'
  ];

  // getter per ottenere i badge ordinati secondo l'ordine definito in ORDINE_BADGE
  get tuttiBadgeOrdinati() {
    return [...this.tuttiBadge()].sort((a, b) => {
      const ia = this.ORDINE_BADGE.findIndex(n => n.toLowerCase() === a.nome_badge?.toLowerCase());
      const ib = this.ORDINE_BADGE.findIndex(n => n.toLowerCase() === b.nome_badge?.toLowerCase());
      return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
    });
  }

  // getter per ottenere le iniziali dell'utente dal nome completo
  get iniziali(): string {
    const nome = this.profilo()?.nome_completo || '';
    return nome.split(' ').map((p: string) => p[0]).join('').substring(0, 2).toUpperCase();
  }

  ngOnInit() { this.caricaTutto(); }

  caricaTutto() {
    this.loading.set(true);
    const utente = this.auth.utenteCorrente() as any; // cast a any per evitare errori di tipo, (utenteCorrente() => null | oggetto utente)
    this.fotoProfilo.set(utente?.foto_profilo || null);

    // invia la chiamata http (preparata in getProfilo()) per ricevere il profilo dell'utente, e aggiorna il segnale profilo con i dati ricevuti
    this.utenteService.getProfilo().subscribe({
      next: (p) => this.profilo.set(p),
      error: () => this.toast.err('Errore', 'Impossibile caricare il profilo.', '❌')
    });

    // invia la chiamata http (preparata in getMieiAnnunci()) per ricevere gli annunci dell'utente, e aggiorna il segnale annunci con i dati ricevuti
    this.annuncioService.getMieiAnnunci().subscribe({
      next: (a) => {
        this.annunci.set(a);
        // controlla se ci sono annunci oscurati non ancora notificati
        this._notificaAnnunciOscurati(a);
      },
      error: () => {}
    });

    // invia la chiamata http (preparata in getBadgeOttenuti()) per ricevere i badge ottenuti dall'utente, e aggiorna il segnale badge con i dati ricevuti
    this.utenteService.getBadgeOttenuti().subscribe({
      next: (b) => this.badge.set(b),
      error: () => {}
    });

    // invia la chiamata http (preparata in getTuttiBadge()) per ricevere tutti i badge disponibili, e aggiorna il segnale tuttiBadge con i dati ricevuti
    this.utenteService.getTuttiBadge().subscribe({
      next: (b) => this.tuttiBadge.set(b),
      error: () => {}
    });

    // invia la chiamata http (preparata in getMie()) per ricevere le segnalazioni dell'utente, e aggiorna il segnale segnalazioni con i dati ricevuti
    this.segnalazioneService.getMie().subscribe({
      next: (s) => this.segnalazioni.set(s),
      error: () => {}
    });

    // invia la chiamata http (preparata in getLeaderboard()) per ricevere la classifica degli utenti, e aggiorna il segnale leaderboard con i dati ricevuti
    this.utenteService.getLeaderboard().subscribe({
      next: (l) => this.leaderboard.set(l),
      error: () => {}
    });

    // invia la chiamata http (preparata in getRecensioni()) per ricevere le recensioni dell'utente, e aggiorna il segnale recensioni con i dati ricevuti
    if (utente?.id_utente_reg) {
      this.utenteService.getRecensioni(utente.id_utente_reg).subscribe({
        next: (r) => { this.recensioni.set(r); this.loading.set(false); },
        error: () => this.loading.set(false)
      });
    } else {
      this.loading.set(false);
    }
  }

  /*
    controlla se ci sono annunci oscurati dall'admin non ancora notificati (notifica_oscuramento_letta = 0 sul DB),
    mostra il toast e segna la notifica come letta sul BE per non ripeterla
  */
  private _notificaAnnunciOscurati(annunci: any[]) {
    const nuoviOscurati = annunci.filter(
      a => a.stato_annuncio === 'oscurato' && !a.notifica_oscuramento_letta
    );

    nuoviOscurati.forEach(ann => {
      this.toast.err(
        'Annuncio rimosso',
        `Il tuo annuncio "${ann.titolo}" è stato rimosso da un amministratore.`,
        '🚫'
      );
      this.annuncioService.segnaNotificaOscuramentoLetta(ann.id_annuncio).subscribe({
        error: () => {}
      });
    });
  }

  apriModificaProfilo() { this.overlayService.apriModificaProfilo(); }

  apriProfiloUtente(idUtente: number) { this.overlayService.apriUtente(idUtente); }

  apriModalAnnuncio(ann: any) {
    this.annuncioSelezionato.set(ann);
    this.modalAnnuncioAperto.set(true);
  }

  chiudiModalAnnuncio() {
    this.modalAnnuncioAperto.set(false);
    this.annuncioSelezionato.set(null);
  }

  // imposta lo stato dell'annuncio selezionato a "chiuso" e invia la richiesta al backend per chiudere l'annuncio
  chiudiAnnuncio() {
    const ann = this.annuncioSelezionato();
    if (!ann) return;

    // invia la richiesta (preparata da chiudi(ann)) al backend per chiudere l'annuncio selezionato
    this.annuncioService.chiudi(ann.id_annuncio).subscribe({
      next: () => {
        this.toast.ok('Annuncio chiuso', `"${ann.titolo}" è stato chiuso.`, '✅');
        this.chiudiModalAnnuncio();
        this.caricaTutto();
      },
      error: () => this.toast.err('Errore', 'Impossibile chiudere l\'annuncio.', '❌')
    });
  }

  // controlla se l'utente ha sbloccato un determinato badge
  isSbloccato(nomeBadge: string): boolean {
    return this.badge().some((b: any) => b.badge?.nome_badge === nomeBadge); 
  }

  // calcola la percentuale di completamento del badge in base al punteggio dell'utente e alla soglia del badge
  percentualeBadge(soglia: number): number {
    const punti = this.profilo()?.punteggio || 0;
    return Math.min(Math.round((punti / soglia) * 100), 100);
  }

  // calcola la posizione dell'utente nella classifica (leaderboard)
  posizione(utente: any): number {
    return this.leaderboard().findIndex(u => u.id_utente_reg === utente.id_utente_reg) + 1;
  }

  // restituisce la classe CSS corrispondente allo stato della segnalazione per la visualizzazione nel profilo
  classeStatoSegnalazione(stato: string): string {
    if (stato === 'presa_in_carico') return 'u-clr-carico';
    if (stato === 'chiusa')          return 'u-clr-chiusa';
    return 'u-clr-attesa';
  }

  // restituisce il testo leggibile corrispondente allo stato della segnalazione per la visualizzazione nel profilo
  testoStatoSegnalazione(stato: string): string {
    return (stato || '').replace(/_/g, ' '); // 'g' indica di sostituire tutte le occorrenze di "_", non solo la prima
  }

  // naviga alla pagina della chat relativa all'annuncio selezionato, passando l'id dell'annuncio come parametro di query
  vaiAllaChat(ann: any) {
    this.router.navigate(['/chat'], { queryParams: { idAnnuncio: ann.id_annuncio } });
  }

  inizialiDa(nome: string): string {
    return nome.split(' ').map((p: string) => p[0]).join('').substring(0, 2).toUpperCase();
  }
}