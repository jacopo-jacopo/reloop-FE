import {
  NotificationService
} from "./chunk-OAKHWBYB.js";
import {
  OverlayService
} from "./chunk-LAONVNUN.js";
import {
  AuthService,
  CommonModule,
  DatePipe,
  HttpClient,
  Router,
  ToastService,
  inject,
  interval,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-3SNN5JWR.js";

// src/app/core/services/chat.service.ts
var ChatService = class _ChatService {
  http = inject(HttpClient);
  API = "http://localhost:8080/api";
  /** Tutte le chat dell'utente loggato */
  getMie() {
    return this.http.get(`${this.API}/chat`);
  }
  /** Messaggi di una chat, ordinati cronologicamente */
  getMessaggi(idChat) {
    return this.http.get(`${this.API}/chat/${idChat}/messaggi`);
  }
  /** Invia un messaggio in una chat aperta */
  inviaMessaggio(idChat, contenuto) {
    return this.http.post(`${this.API}/chat/${idChat}/messaggi`, { contenuto });
  }
  /**
   * Completa uno scambio.
   * Il BE restituisce: { chat, co2_risparmiata, id_altro_utente }
   */
  completa(idChat) {
    return this.http.put(`${this.API}/chat/${idChat}/completa`, {});
  }
  /**
   * Annulla uno scambio.
   * Riporta gli annunci ad attivo e la proposta a rifiutata.
   */
  annulla(idChat) {
    return this.http.put(`${this.API}/chat/${idChat}/annulla`, {});
  }
  /** Segna come letti tutti i messaggi ricevuti nella chat. */
  leggi(idChat) {
    return this.http.put(`${this.API}/chat/${idChat}/leggi`, {});
  }
  static \u0275fac = function ChatService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatService, factory: _ChatService.\u0275fac, providedIn: "root" });
};

// src/app/pages/chat/chat.component.ts
var _c0 = ["msgsArea"];
var _forTrack0 = ($index, $item) => $item.id_chat;
var _forTrack1 = ($index, $item) => $item.id.id_messaggio;
function ChatComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Caricamento...");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.altroUtente(c_r3).foto_profilo, \u0275\u0275sanitizeUrl);
  }
}
function ChatComponent_For_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_11_0;
    const c_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.initials((tmp_11_0 = ctx_r0.altroUtente(c_r3)) == null ? null : tmp_11_0.nome_completo), " ");
  }
}
function ChatComponent_For_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "!");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function ChatComponent_For_8_Template_div_click_0_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selezionaChat(c_r3));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275template(2, ChatComponent_For_8_Conditional_2_Template, 1, 1, "img", 12)(3, ChatComponent_For_8_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 16);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ChatComponent_For_8_Conditional_12_Template, 2, 0, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    const c_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("act", ((tmp_10_0 = ctx_r0.chatAttiva()) == null ? null : tmp_10_0.id_chat) === c_r3.id_chat);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_11_0 = ctx_r0.altroUtente(c_r3)) == null ? null : tmp_11_0.foto_profilo) ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_12_0 = (tmp_12_0 = ctx_r0.altroUtente(c_r3)) == null ? null : tmp_12_0.nome_completo) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : "Chat #" + c_r3.id_chat);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.proposta_generante == null ? null : c_r3.proposta_generante.annuncio_interesse == null ? null : c_r3.proposta_generante.annuncio_interesse.titolo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 7, c_r3.timestamp_chat, "dd/MM"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.notif.hasChatNonLetta(c_r3.id_chat) ? 12 : -1);
  }
}
function ChatComponent_ForEmpty_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Nessuna chat attiva.");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_ForEmpty_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ChatComponent_ForEmpty_9_Conditional_0_Template, 2, 0, "p", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.loading() ? 0 : -1);
  }
}
function ChatComponent_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.altroUtente(ctx_r0.chatAttiva()).foto_profilo, \u0275\u0275sanitizeUrl);
  }
}
function ChatComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.initials((tmp_3_0 = ctx_r0.altroUtente(ctx_r0.chatAttiva())) == null ? null : tmp_3_0.nome_completo), " ");
  }
}
function ChatComponent_Conditional_11_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "button", 30);
    \u0275\u0275listener("click", function ChatComponent_Conditional_11_Conditional_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.annullaScambio());
    });
    \u0275\u0275text(2, "Annulla scambio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 31);
    \u0275\u0275listener("click", function ChatComponent_Conditional_11_Conditional_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.completaScambio());
    });
    \u0275\u0275text(4, "\u2713 Scambio completato");
    \u0275\u0275elementEnd()();
  }
}
function ChatComponent_Conditional_11_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 Scambio ", ctx_r0.chatAttiva().stato_chat, "");
  }
}
function ChatComponent_Conditional_11_For_22_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_94_r5 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.dataLabel(\u0275$index_94_r5));
  }
}
function ChatComponent_Conditional_11_For_22_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r0.altroUtente(ctx_r0.chatAttiva()).foto_profilo, \u0275\u0275sanitizeUrl);
  }
}
function ChatComponent_Conditional_11_For_22_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_15_0;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.initials((tmp_15_0 = ctx_r0.altroUtente(ctx_r0.chatAttiva())) == null ? null : tmp_15_0.nome_completo), " ");
  }
}
function ChatComponent_Conditional_11_For_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, ChatComponent_Conditional_11_For_22_Conditional_2_Conditional_1_Template, 1, 1, "img", 12)(2, ChatComponent_Conditional_11_For_22_Conditional_2_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_14_0 = ctx_r0.altroUtente(ctx_r0.chatAttiva())) == null ? null : tmp_14_0.foto_profilo) ? 1 : 2);
  }
}
function ChatComponent_Conditional_11_For_22_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("msg-tick-read", msg_r6.flag_lettura)("msg-tick-neutral", !msg_r6.flag_lettura);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", msg_r6.flag_lettura ? "\u2713\u2713 letto" : "\u2713 inviato", " ");
  }
}
function ChatComponent_Conditional_11_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ChatComponent_Conditional_11_For_22_Conditional_0_Template, 2, 1, "div", 28);
    \u0275\u0275elementStart(1, "div", 32);
    \u0275\u0275template(2, ChatComponent_Conditional_11_For_22_Conditional_2_Template, 3, 1, "div", 33);
    \u0275\u0275elementStart(3, "div", 34)(4, "div", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ChatComponent_Conditional_11_For_22_Conditional_8_Template, 2, 5, "div", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r6 = ctx.$implicit;
    const \u0275$index_94_r5 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.dataLabel(\u0275$index_94_r5) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("me", ctx_r0.isMio(msg_r6));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isMio(msg_r6) ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("u-text-right", ctx_r0.isMio(msg_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formattaOra(msg_r6.data_invio), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r6.contenuto);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isMio(msg_r6) ? 8 : -1);
  }
}
function ChatComponent_Conditional_11_ForEmpty_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, "Nessun messaggio ancora. Inizia la conversazione!");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_Conditional_11_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "input", 39);
    \u0275\u0275listener("input", function ChatComponent_Conditional_11_Conditional_24_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.testoMsg.set($event.target.value));
    })("keydown", function ChatComponent_Conditional_11_Conditional_24_Template_input_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onEnter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 40);
    \u0275\u0275listener("click", function ChatComponent_Conditional_11_Conditional_24_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.inviaMessaggio());
    });
    \u0275\u0275text(3, "\u27A4");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.testoMsg());
  }
}
function ChatComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275template(2, ChatComponent_Conditional_11_Conditional_2_Template, 1, 1, "img", 12)(3, ChatComponent_Conditional_11_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "div", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 22)(8, "span", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 24);
    \u0275\u0275text(11, "\u21C4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 23);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, ChatComponent_Conditional_11_Conditional_14_Template, 5, 0, "div", 25)(15, ChatComponent_Conditional_11_Conditional_15_Template, 2, 1, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 27, 0)(18, "div", 28);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, ChatComponent_Conditional_11_For_22_Template, 9, 9, null, null, _forTrack1, false, ChatComponent_Conditional_11_ForEmpty_23_Template, 2, 0, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, ChatComponent_Conditional_11_Conditional_24_Template, 4, 1, "div", 29);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.altroUtente(ctx_r0.chatAttiva())) == null ? null : tmp_2_0.foto_profilo) ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = (tmp_3_0 = ctx_r0.altroUtente(ctx_r0.chatAttiva())) == null ? null : tmp_3_0.nome_completo) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "Chat #" + ctx_r0.chatAttiva().id_chat, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" \u{1F4E6} ", (tmp_4_0 = ctx_r0.chatAttiva().proposta_generante) == null ? null : tmp_4_0.annuncio_interesse == null ? null : tmp_4_0.annuncio_interesse.titolo, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u{1F381} ", (tmp_5_0 = ctx_r0.annuncioScelto(ctx_r0.chatAttiva())) == null ? null : tmp_5_0.titolo, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.chatAttiva().stato_chat === "aperta" ? 14 : 15);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u{1F4AC} Chat aperta il ", \u0275\u0275pipeBind2(20, 8, ctx_r0.chatAttiva().timestamp_chat, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.messaggi());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.chatAttiva().stato_chat === "aperta" ? 24 : -1);
  }
}
function ChatComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 41);
    \u0275\u0275text(2, "Seleziona una chat dalla lista.");
    \u0275\u0275elementEnd()();
  }
}
var ChatComponent = class _ChatComponent {
  msgsAreaRef;
  chatService = inject(ChatService);
  toast = inject(ToastService);
  auth = inject(AuthService);
  overlayService = inject(OverlayService);
  router = inject(Router);
  notif = inject(NotificationService);
  chat = signal([]);
  chatAttiva = signal(null);
  messaggi = signal([]);
  loading = signal(true);
  testoMsg = signal("");
  _pollSub;
  get utenteCorrente() {
    return this.auth.utenteCorrente();
  }
  ngOnInit() {
    this.caricaChat();
    this.notif.visitaChat();
  }
  ngOnDestroy() {
    this._pollSub?.unsubscribe();
  }
  caricaChat() {
    this.loading.set(true);
    this.chatService.getMie().subscribe({
      next: (data) => {
        this.chat.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.toast.err("Errore", "Impossibile caricare le chat.", "\u274C");
        this.loading.set(false);
      }
    });
  }
  selezionaChat(c) {
    this.chatAttiva.set(c);
    this.messaggi.set([]);
    this._pollSub?.unsubscribe();
    this.chatService.getMessaggi(c.id_chat).subscribe({
      next: (msgs) => {
        this.messaggi.set(msgs);
        this._scrollToBottom();
      },
      error: () => {
      }
    });
    this.chatService.leggi(c.id_chat).subscribe();
    this.notif.segnaLetta(c.id_chat);
    this._pollSub = interval(3e3).pipe(switchMap(() => this.chatService.getMessaggi(c.id_chat))).subscribe((msgs) => {
      const prevLen = this.messaggi().length;
      this.messaggi.set(msgs);
      if (msgs.length > prevLen)
        this._scrollToBottom();
      if (msgs.some((m) => !m.flag_lettura && !this.isMio(m))) {
        this.chatService.leggi(c.id_chat).subscribe();
      }
    });
  }
  inviaMessaggio() {
    const testo = this.testoMsg().trim();
    const chat = this.chatAttiva();
    if (!testo || !chat)
      return;
    this.chatService.inviaMessaggio(chat.id_chat, testo).subscribe({
      next: (msg) => {
        this.messaggi.update((m) => [...m, msg]);
        this.testoMsg.set("");
        this._scrollToBottom();
      },
      error: () => this.toast.err("Errore", "Messaggio non inviato.", "\u274C")
    });
  }
  onEnter(event) {
    if (event.key === "Enter")
      this.inviaMessaggio();
  }
  completaScambio() {
    const chat = this.chatAttiva();
    if (!chat)
      return;
    this.chatService.completa(chat.id_chat).subscribe({
      next: (res) => {
        this.toast.ok("Scambio completato! \u{1F389}", "CO\u2082 calcolata!", "\u{1F331}");
        this.caricaChat();
        if (res.id_altro_utente != null)
          setTimeout(() => this.overlayService.apriRecensione(res.id_altro_utente, chat.id_chat), 1500);
      },
      error: () => this.toast.err("Errore", "Impossibile completare lo scambio.", "\u274C")
    });
  }
  annullaScambio() {
    const chat = this.chatAttiva();
    if (!chat)
      return;
    this.chatService.annulla(chat.id_chat).subscribe({
      next: () => {
        this.toast.info("Scambio annullato", "Gli annunci tornano attivi.", "\u2717");
        this.router.navigate(["/proposte"]);
      },
      error: () => this.toast.err("Errore", "Impossibile annullare.", "\u274C")
    });
  }
  isMio(msg) {
    return msg.mittente?.id_utente_reg === this.utenteCorrente?.id_utente_reg;
  }
  formattaOra(data) {
    return new Date(data).toLocaleTimeString("it", { hour: "2-digit", minute: "2-digit" });
  }
  dataLabel(index) {
    const msgs = this.messaggi();
    const curr = msgs[index]?.data_invio;
    if (!curr)
      return null;
    const currDay = curr.substring(0, 10);
    if (index === 0)
      return this._formatDay(currDay);
    const prevDay = msgs[index - 1]?.data_invio?.substring(0, 10);
    return currDay !== prevDay ? this._formatDay(currDay) : null;
  }
  _formatDay(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    const today = /* @__PURE__ */ new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    if (date.toDateString() === today.toDateString())
      return "Oggi";
    if (date.toDateString() === yesterday.toDateString())
      return "Ieri";
    return date.toLocaleDateString("it", { day: "2-digit", month: "long", year: "numeric" });
  }
  _scrollToBottom() {
    setTimeout(() => {
      const el = this.msgsAreaRef?.nativeElement;
      if (el)
        el.scrollTop = el.scrollHeight;
    }, 50);
  }
  altroUtente(chat) {
    if (!chat)
      return null;
    const id = this.utenteCorrente?.id_utente_reg;
    const pub = chat.proposta_generante?.annuncio_interesse?.pubblicante;
    const pro = chat.proposta_generante?.proponente;
    return id === pub?.id_utente_reg ? pro : pub;
  }
  annuncioScelto(chat) {
    const offerti = chat?.proposta_generante?.annunci_offerti ?? [];
    return (offerti.find((ao) => ao.flag_selezionato) ?? offerti[0])?.annuncio_offerto ?? null;
  }
  initials(name) {
    return name?.substring(0, 2)?.toUpperCase() ?? "?";
  }
  static \u0275fac = function ChatComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatComponent, selectors: [["app-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.msgsAreaRef = _t.first);
    }
  }, decls: 13, vars: 3, consts: [["msgsArea", ""], [1, "chat-layout"], [1, "chat-sb"], [1, "chat-sb-hdr"], [1, "chat-sb-t"], [1, "conv-list"], [1, "u-text-muted-sm", 2, "padding", "16px"], [1, "conv", 3, "act"], [1, "chat-main"], [2, "flex", "1", "display", "flex", "align-items", "center", "justify-content", "center"], [1, "conv", 3, "click"], [1, "conv-av", "av-sage"], [1, "av-img", 3, "src"], [1, "u-flex1-mw0"], [1, "conv-name"], [1, "conv-prev"], [1, "conv-time"], [1, "conv-badge"], [1, "chat-top"], [1, "chat-top-av", "av-sage"], [1, "chat-top-info"], [1, "chat-top-n"], [1, "chat-top-swap"], [1, "chat-top-swap-item"], [1, "chat-top-arrow"], [1, "chat-top-acts"], [1, "chat-conclusa-badge"], [1, "msgs-area"], [1, "sys-msg"], [1, "chat-input-bar"], [1, "btn-ghost", 3, "click"], [1, "btn-complete", 3, "click"], [1, "msg"], [1, "conv-av", "conv-av-sm", "av-sage"], [1, "msg-body"], [1, "msg-t"], [1, "bubble"], [1, "msg-tick", 3, "msg-tick-read", "msg-tick-neutral"], [1, "msg-tick"], ["placeholder", "Scrivi un messaggio...", 1, "chat-inp", 3, "input", "keydown", "value"], [1, "btn-send", 3, "click"], [1, "u-text-muted-sm"]], template: function ChatComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
      \u0275\u0275text(4, "\u{1F4AC} Chat attive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275template(6, ChatComponent_Conditional_6_Template, 2, 0, "p", 6);
      \u0275\u0275repeaterCreate(7, ChatComponent_For_8_Template, 13, 10, "div", 7, _forTrack0, false, ChatComponent_ForEmpty_9_Template, 1, 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 8);
      \u0275\u0275template(11, ChatComponent_Conditional_11_Template, 25, 11)(12, ChatComponent_Conditional_12_Template, 3, 0, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.chat());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.chatAttiva() ? 11 : 12);
    }
  }, dependencies: [CommonModule, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatComponent, { className: "ChatComponent", filePath: "app/pages/chat/chat.component.ts", lineNumber: 18 });
})();
export {
  ChatComponent
};
//# sourceMappingURL=chunk-CABQ5LZM.js.map
