import { Component, inject, signal, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../core/services/chat.service';
import { ToastService } from '../../shared/toast/toast.service';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { OverlayService } from '../../core/services/overlay.service';
import { interval, Subscription, switchMap } from 'rxjs';

// Component per la pagina della chat, mostra le conversazioni dell'utente e i messaggi scambiati

// inizia il decoratore, @Component definisce un componente Angular, con selettore 'app-chat'
@Component({
  selector: 'app-chat',
  standalone: true, // stabilisce che il componente è standalone, cioè non fa parte di un modulo Angular e usa le dipendenze dichiarate in imports
  imports: [CommonModule], // importa il modulo CommonModule, che fornisce direttive comuni come @if e @for
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  
  // campo che riferisce all'area dei messaggi, per scroll automatico in fondo
  @ViewChild('msgsArea') private msgsAreaRef?: ElementRef<HTMLDivElement>;  

  private chatService    = inject(ChatService);
  private toast          = inject(ToastService);
  private auth           = inject(AuthService);
  private overlayService = inject(OverlayService);
  private route          = inject(ActivatedRoute);
  notif                  = inject(NotificationService);

  chat       = signal<any[]>([]);
  chatAttiva = signal<any | null>(null);
  messaggi   = signal<any[]>([]);
  loading    = signal(true);
  testoMsg   = signal('');
  confermaAnnullaAperta = signal(false);
  confermaCompletaAperta = signal(false);

  // riferimento a una subscription di una chiamata http periodica per recuperare i messaggi in una chat,
  // bisogna mantenere il riferimento per poter annullare la subscription quando si cambia chat o quando il componente viene distrutto
  // (altrimenti il polling continua all'infinito) 
  private _pollSub?: Subscription;

  get utenteCorrente() { return this.auth.utenteCorrente() as any; }

  // metodi attivati al caricamento della pagina e alla distruzione del componente
  ngOnInit()    { this.caricaChat(); this.notif.visitaChat(); }
  ngOnDestroy() { this._pollSub?.unsubscribe(); }

  // carica le chat dell'utente corrente dal backend (se l'URL contiene ?idAnnuncio=..., apre automaticamente la chat relativa a quell'annuncio)
  caricaChat() {
    this.loading.set(true);
    this.chatService.getMie().subscribe({
      next: (data) => {
        this.chat.set(data);
        this.loading.set(false);
        this._selezionaChatDaQueryParam(data);
      },
      error: () => { this.toast.err('Errore', 'Impossibile caricare le chat.', '❌'); this.loading.set(false); }
    });
  }

  // se l'URL contiene ?idAnnuncio=..., apre automaticamente la chat relativa a quell'annuncio
  private _selezionaChatDaQueryParam(chats: any[]) {
    const idAnnuncio = Number(this.route.snapshot.queryParamMap.get('idAnnuncio'));
    if (!idAnnuncio) return;

    const trovata = chats.find(c => {
      const interesse = c.proposta_generante?.annuncio_interesse;
      const offerti: any[] = c.proposta_generante?.annunci_offerti ?? [];
      return interesse?.id_annuncio === idAnnuncio || offerti.some(ao => ao.annuncio_offerto?.id_annuncio === idAnnuncio);
    });

    if (trovata) this.selezionaChat(trovata);
  }

  // seleziona una chat, carica i messaggi e avvia il polling per aggiornare i messaggi ogni 3 secondi
  selezionaChat(c: any) {
    this.chatAttiva.set(c);
    this.messaggi.set([]);
    this._pollSub?.unsubscribe();

    this.chatService.getMessaggi(c.id_chat).subscribe({
      next: (msgs) => { this.messaggi.set(msgs); this._scrollToBottom(); },
      error: () => {}
    });
    this.chatService.leggi(c.id_chat).subscribe();
    this.notif.segnaLetta(c.id_chat);

    this._pollSub = interval(3000).pipe( // interval crea un Observable che emette un valore ogni 3000ms ,
                                         // pipe applica un operatore di trasformazione all'Observable, in questo caso switchMap
      switchMap(() => this.chatService.getMessaggi(c.id_chat)) // switchMap ancella la chiamata HTTP precedente (se ancora in corso) e ne avvia 
                                                               // una nuova per caricare i messaggi; è importante non usare mergeMap per non 
                                                               // accumulare chiamate sovrapposte se la risposta del server tarda più di 3 secondi
    ).subscribe(msgs => {
      const prevLen = this.messaggi().length;
      this.messaggi.set(msgs);
      if (msgs.length > prevLen) this._scrollToBottom();
      if (msgs.some((m: any) => !m.flag_lettura && !this.isMio(m))) {
        this.chatService.leggi(c.id_chat).subscribe();
      }
    });
  }

  // invia un messaggio nella chat attiva, se il testo non è vuoto e se c'è una chat selezionata
  inviaMessaggio() {
    const testo = this.testoMsg().trim(); // trim rimuove gli spazi bianchi all'inizio e alla fine della stringa
    const chat  = this.chatAttiva();
    if (!testo || !chat) return;
    this.chatService.inviaMessaggio(chat.id_chat, testo).subscribe({
      next: (msg) => {
        this.messaggi.update(m => [...m, msg]);
        this.testoMsg.set('');
        this._scrollToBottom();
      },
      error: () => this.toast.err('Errore', 'Messaggio non inviato.', '❌')
    });
  }

  // intercetta l'evento keypress nella textarea del messaggio, se il tasto premuto è Enter invia il messaggio
  onEnter(event: KeyboardEvent) { if (event.key === 'Enter') this.inviaMessaggio(); }

  // apre e chiude i modal di conferma completamento e annullamento dello scambio
  apriConfermaCompleta()  { this.confermaCompletaAperta.set(true); }
  chiudiConfermaCompleta() { this.confermaCompletaAperta.set(false); }

  // conferma il completamento dello scambio:
  // se l'altro utente ha già confermato lo scambio viene chiusa la chat e viene aperto il modal per lasciare una recensione
  confermaCompletaScambio() {
    const chat = this.chatAttiva();
    this.confermaCompletaAperta.set(false);
    if (!chat) return;
    this.chatService.completa(chat.id_chat).subscribe({
      next: (res: any) => {
        if (res.completato) {
          this.toast.ok('Scambio completato! 🎉', 'CO₂ calcolata :)', '🌱');
          this.chatAttiva.update(c => c ? { ...c, stato_chat: 'completata' } : c);
          if (res.id_altro_utente != null)
            setTimeout(() => this.overlayService.apriRecensione(res.id_altro_utente, chat.id_chat), 1500);
        } else {
          this.toast.info('Conferma registrata', "In attesa che l'altro utente confermi.", '🤝');
        }
        this.caricaChat();
        this.selezionaChat(this.chatAttiva());
      },
      error: () => this.toast.err('Errore', 'Impossibile completare lo scambio.', '❌')
    });
  }

  // apre e chiude il modal di conferma annullamento dello scambio
  apriConfermaAnnulla()  { this.confermaAnnullaAperta.set(true); }
  chiudiConfermaAnnulla() { this.confermaAnnullaAperta.set(false); }

  // conferma l'annullamento dello scambio, chiude la chat e mostra un messaggio di notifica
  confermaAnnullaScambio() {
    const chat = this.chatAttiva();
    this.confermaAnnullaAperta.set(false);
    if (!chat) return;
    this.chatService.annulla(chat.id_chat).subscribe({
      next: () => {
        this.toast.info('Scambio annullato', 'Gli annunci tornano attivi.', '✗');
        this.chatAttiva.update(c => c ? { ...c, stato_chat: 'annullata' } : c);
        this.caricaChat();
        this.selezionaChat(this.chatAttiva());
      },
      error: () => this.toast.err('Errore', 'Impossibile annullare.', '❌')
    });
  }

  isMio(msg: any): boolean {
    return msg.mittente?.id_utente_reg === this.utenteCorrente?.id_utente_reg;
  }

  formattaOra(data: string): string {
    return new Date(data).toLocaleTimeString('it', { hour: '2-digit', minute: '2-digit' });
  }

  dataLabel(index: number): string | null {
    const msgs = this.messaggi();
    const curr = msgs[index]?.data_invio;
    if (!curr) return null;
    const currDay = curr.substring(0, 10); // dal formato: YYYY-MM-DDTHH:mm:ss 
    if (index === 0) return this._formatDay(currDay);
    const prevDay = msgs[index - 1]?.data_invio?.substring(0, 10);
    return currDay !== prevDay ? this._formatDay(currDay) : null;
  }

  // formatta una data ISO in una stringa leggibile
  private _formatDay(iso: string): string {
    const [y, m, d] = iso.split('-').map(Number);
    const date      = new Date(y, m - 1, d); // -1 perché i mesi in JavaScript sono 0-based
    const today     = new Date();
    const yesterday = new Date(today); 
    yesterday.setDate(today.getDate() - 1);
    if (date.toDateString() === today.toDateString())     return 'Oggi';
    if (date.toDateString() === yesterday.toDateString()) return 'Ieri';
    return date.toLocaleDateString('it', { day: '2-digit', month: 'long', year: 'numeric' }); // long per avere il nome del mese completo,
                                                                                              // numeric per avere l'anno a 4 cifre
  }

  private _scrollToBottom() {
    // attende 50 ms perché angular aggiorni il DOM, poi scrolla in fondo
    setTimeout(() => {
      const el = this.msgsAreaRef?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight; // imposta la posizione dello scroll uguale all'altezza totale del contenuto, cioè va in fondo
    }, 50);
  }

  apriRecensione() {
    const chat  = this.chatAttiva();
    const altro = this.altroUtente(chat);
    if (!chat || !altro) return;
    this.overlayService.apriRecensione(altro.id_utente_reg, chat.id_chat);
  }

  altroUtente(chat: any): any {
    if (!chat) return null;
    const id  = this.utenteCorrente?.id_utente_reg;
    const pub = chat.proposta_generante?.annuncio_interesse?.pubblicante;
    const pro = chat.proposta_generante?.proponente;
    return id === pub?.id_utente_reg ? pro : pub;
  }

  annuncioScelto(chat: any): any {
    const offerti: any[] = chat?.proposta_generante?.annunci_offerti ?? [];
    return (offerti.find(ao => ao.flag_selezionato) ?? offerti[0])?.annuncio_offerto ?? null;
  }

  annuncioMio(chat: any): any {
    if (!chat) return null;
    const id  = this.utenteCorrente?.id_utente_reg;
    const pub = chat.proposta_generante?.annuncio_interesse?.pubblicante;
    return id === pub?.id_utente_reg ? chat.proposta_generante?.annuncio_interesse : this.annuncioScelto(chat);
  }

  annuncioAltro(chat: any): any {
    if (!chat) return null;
    const id  = this.utenteCorrente?.id_utente_reg;
    const pub = chat.proposta_generante?.annuncio_interesse?.pubblicante;
    return id === pub?.id_utente_reg ? this.annuncioScelto(chat) : chat.proposta_generante?.annuncio_interesse;
  }

  isMsgAnnulla(msg: any): boolean {
    return typeof msg?.contenuto === 'string' && msg.contenuto.endsWith('ha annullato lo scambio');
  }

  isMsgOscuramento(msg: any): boolean {
    return typeof msg?.contenuto === 'string'
      && msg.contenuto.includes('è stato rimosso da un amministratore e non è più disponibile.');
  }

  isMsgConferma(msg: any): boolean {
    return typeof msg?.contenuto === 'string' && msg.contenuto.endsWith('ha confermato che lo scambio è stato completato');
  }

  hoGiaConfermato(): boolean {
    const id = this.utenteCorrente?.id_utente_reg;
    return this.messaggi().some(m => this.isMsgConferma(m) && m.mittente?.id_utente_reg === id);
  }

  isMsgRecensione(msg: any): boolean {
    return typeof msg?.contenuto === 'string' && msg.contenuto.endsWith('ha lasciato una recensione');
  }

  hoGiaRecensito(): boolean {
    const id = this.utenteCorrente?.id_utente_reg;
    return this.messaggi().some(m => this.isMsgRecensione(m) && m.mittente?.id_utente_reg === id);
  }

  initials(name: string | undefined): string {
    return name?.split(' ')?.map((p: string) => p[0])?.join('')?.substring(0, 2)?.toUpperCase() ?? '?';
  }
}
