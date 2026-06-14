import { Component, inject, signal, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../core/services/chat.service';
import { ToastService } from '../../shared/toast/toast.service';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { OverlayService } from '../../core/services/overlay.service';
import { interval, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
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

  private _pollSub?: Subscription;

  get utenteCorrente() { return this.auth.utenteCorrente() as any; }

  ngOnInit()    { this.caricaChat(); this.notif.visitaChat(); }
  ngOnDestroy() { this._pollSub?.unsubscribe(); }

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

  /** Se l'URL contiene ?idAnnuncio=..., apre automaticamente la chat relativa a quell'annuncio. */
  private _selezionaChatDaQueryParam(chats: any[]) {
    const idAnnuncio = Number(this.route.snapshot.queryParamMap.get('idAnnuncio'));
    if (!idAnnuncio) return;

    const trovata = chats.find(c => {
      const interesse = c.proposta_generante?.annuncio_interesse;
      const offerti: any[] = c.proposta_generante?.annunci_offerti ?? [];
      return interesse?.id_annuncio === idAnnuncio
        || offerti.some(ao => ao.annuncio_offerto?.id_annuncio === idAnnuncio);
    });

    if (trovata) this.selezionaChat(trovata);
  }

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

    this._pollSub = interval(3000).pipe(
      switchMap(() => this.chatService.getMessaggi(c.id_chat))
    ).subscribe(msgs => {
      const prevLen = this.messaggi().length;
      this.messaggi.set(msgs);
      if (msgs.length > prevLen) this._scrollToBottom();
      if (msgs.some((m: any) => !m.flag_lettura && !this.isMio(m))) {
        this.chatService.leggi(c.id_chat).subscribe();
      }
    });
  }

  inviaMessaggio() {
    const testo = this.testoMsg().trim();
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

  onEnter(event: KeyboardEvent) { if (event.key === 'Enter') this.inviaMessaggio(); }

  apriConfermaCompleta()  { this.confermaCompletaAperta.set(true); }
  chiudiConfermaCompleta() { this.confermaCompletaAperta.set(false); }

  confermaCompletaScambio() {
    const chat = this.chatAttiva();
    this.confermaCompletaAperta.set(false);
    if (!chat) return;
    this.chatService.completa(chat.id_chat).subscribe({
      next: (res: any) => {
        if (res.completato) {
          this.toast.ok('Scambio completato! 🎉', 'CO₂ calcolata!', '🌱');
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

  apriConfermaAnnulla()  { this.confermaAnnullaAperta.set(true); }
  chiudiConfermaAnnulla() { this.confermaAnnullaAperta.set(false); }

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
    const currDay = curr.substring(0, 10);
    if (index === 0) return this._formatDay(currDay);
    const prevDay = msgs[index - 1]?.data_invio?.substring(0, 10);
    return currDay !== prevDay ? this._formatDay(currDay) : null;
  }

  private _formatDay(iso: string): string {
    const [y, m, d] = iso.split('-').map(Number);
    const date      = new Date(y, m - 1, d);
    const today     = new Date();
    const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
    if (date.toDateString() === today.toDateString())     return 'Oggi';
    if (date.toDateString() === yesterday.toDateString()) return 'Ieri';
    return date.toLocaleDateString('it', { day: '2-digit', month: 'long', year: 'numeric' });
  }

  private _scrollToBottom() {
    // Lascia che Angular aggiorni il DOM, poi scrolla in fondo
    setTimeout(() => {
      const el = this.msgsAreaRef?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
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

  /** Annuncio messo in gioco dall'utente corrente in questa chat. */
  annuncioMio(chat: any): any {
    if (!chat) return null;
    const id  = this.utenteCorrente?.id_utente_reg;
    const pub = chat.proposta_generante?.annuncio_interesse?.pubblicante;
    return id === pub?.id_utente_reg
      ? chat.proposta_generante?.annuncio_interesse
      : this.annuncioScelto(chat);
  }

  /** Annuncio messo in gioco dall'altro utente in questa chat. */
  annuncioAltro(chat: any): any {
    if (!chat) return null;
    const id  = this.utenteCorrente?.id_utente_reg;
    const pub = chat.proposta_generante?.annuncio_interesse?.pubblicante;
    return id === pub?.id_utente_reg
      ? this.annuncioScelto(chat)
      : chat.proposta_generante?.annuncio_interesse;
  }

  /** Riconosce il messaggio di sistema generato all'annullamento dello scambio. */
  isMsgAnnulla(msg: any): boolean {
    return typeof msg?.contenuto === 'string' && msg.contenuto.endsWith('ha annullato lo scambio');
  }

  /** Riconosce il messaggio di sistema generato quando un admin oscura un annuncio coinvolto nella chat. */
  isMsgOscuramento(msg: any): boolean {
    return typeof msg?.contenuto === 'string'
      && msg.contenuto.includes('è stato rimosso da un amministratore e non è più disponibile.');
  }

  /** Riconosce il messaggio di sistema generato dalla conferma di completamento. */
  isMsgConferma(msg: any): boolean {
    return typeof msg?.contenuto === 'string' && msg.contenuto.endsWith('ha confermato che lo scambio è stato completato');
  }

  /** True se l'utente corrente ha già confermato il completamento di questa chat. */
  hoGiaConfermato(): boolean {
    const id = this.utenteCorrente?.id_utente_reg;
    return this.messaggi().some(m => this.isMsgConferma(m) && m.mittente?.id_utente_reg === id);
  }

  /** Riconosce il messaggio di sistema generato dall'invio di una recensione. */
  isMsgRecensione(msg: any): boolean {
    return typeof msg?.contenuto === 'string' && msg.contenuto.endsWith('ha lasciato una recensione');
  }

  /** True se l'utente corrente ha già lasciato una recensione in questa chat. */
  hoGiaRecensito(): boolean {
    const id = this.utenteCorrente?.id_utente_reg;
    return this.messaggi().some(m => this.isMsgRecensione(m) && m.mittente?.id_utente_reg === id);
  }

  initials(name: string | undefined): string {
    return name?.substring(0, 2)?.toUpperCase() ?? '?';
  }
}
