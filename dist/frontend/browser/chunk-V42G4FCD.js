import {
  NotificationService
} from "./chunk-OAKHWBYB.js";
import {
  OverlayService
} from "./chunk-EEAG4X3M.js";
import {
  ActivatedRoute,
  AuthService,
  CommonModule,
  DatePipe,
  HttpClient,
  ToastService,
  __spreadProps,
  __spreadValues,
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
    \u0275\u0275element(0, "img", 13);
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
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, "!");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275listener("click", function ChatComponent_For_8_Template_div_click_0_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selezionaChat(c_r3));
    });
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275template(2, ChatComponent_For_8_Conditional_2_Template, 1, 1, "img", 13)(3, ChatComponent_For_8_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 17);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ChatComponent_For_8_Conditional_12_Template, 2, 0, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    const c_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("act", ((tmp_10_0 = ctx_r0.chatAttiva()) == null ? null : tmp_10_0.id_chat) === c_r3.id_chat)("annullata", c_r3.stato_chat === "annullata")("completata", c_r3.stato_chat === "completata");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_13_0 = ctx_r0.altroUtente(c_r3)) == null ? null : tmp_13_0.foto_profilo) ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_14_0 = (tmp_14_0 = ctx_r0.altroUtente(c_r3)) == null ? null : tmp_14_0.nome_completo) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : "Chat #" + c_r3.id_chat);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_15_0 = ctx_r0.annuncioAltro(c_r3)) == null ? null : tmp_15_0.titolo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 11, c_r3.timestamp_chat, "dd/MM"));
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
    \u0275\u0275element(0, "img", 13);
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
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 32);
    \u0275\u0275listener("click", function ChatComponent_Conditional_11_Conditional_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.apriConfermaAnnulla());
    });
    \u0275\u0275text(2, "Annulla scambio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 33);
    \u0275\u0275listener("click", function ChatComponent_Conditional_11_Conditional_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.apriConfermaCompleta());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.hoGiaConfermato());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.hoGiaConfermato() ? "In attesa dell'altro utente..." : "Scambio completato", " ");
  }
}
function ChatComponent_Conditional_11_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "\u2713 Scambio completato");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_Conditional_11_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "\u2717 Scambio annullato");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_Conditional_11_For_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_98_r5 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.dataLabel(\u0275$index_98_r5));
  }
}
function ChatComponent_Conditional_11_For_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2717 ", msg_r6.contenuto, "");
  }
}
function ChatComponent_Conditional_11_For_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", msg_r6.contenuto, "");
  }
}
function ChatComponent_Conditional_11_For_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2B50 ", msg_r6.contenuto, "");
  }
}
function ChatComponent_Conditional_11_For_23_Conditional_4_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275property("src", ctx_r0.altroUtente(ctx_r0.chatAttiva()).foto_profilo, \u0275\u0275sanitizeUrl);
  }
}
function ChatComponent_Conditional_11_For_23_Conditional_4_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_16_0;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.initials((tmp_16_0 = ctx_r0.altroUtente(ctx_r0.chatAttiva())) == null ? null : tmp_16_0.nome_completo), " ");
  }
}
function ChatComponent_Conditional_11_For_23_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275template(1, ChatComponent_Conditional_11_For_23_Conditional_4_Conditional_1_Conditional_1_Template, 1, 1, "img", 13)(2, ChatComponent_Conditional_11_For_23_Conditional_4_Conditional_1_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_15_0 = ctx_r0.altroUtente(ctx_r0.chatAttiva())) == null ? null : tmp_15_0.foto_profilo) ? 1 : 2);
  }
}
function ChatComponent_Conditional_11_For_23_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classProp("msg-tick-read", msg_r6.flag_lettura)("msg-tick-neutral", !msg_r6.flag_lettura);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", msg_r6.flag_lettura ? "\u2713\u2713 letto" : "\u2713 inviato", " ");
  }
}
function ChatComponent_Conditional_11_For_23_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, ChatComponent_Conditional_11_For_23_Conditional_4_Conditional_1_Template, 3, 1, "div", 39);
    \u0275\u0275elementStart(2, "div", 40)(3, "div", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ChatComponent_Conditional_11_For_23_Conditional_4_Conditional_7_Template, 2, 5, "div", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("me", ctx_r0.isMio(msg_r6));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isMio(msg_r6) ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("u-text-right", ctx_r0.isMio(msg_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formattaOra(msg_r6.data_invio), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r6.contenuto);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isMio(msg_r6) ? 7 : -1);
  }
}
function ChatComponent_Conditional_11_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ChatComponent_Conditional_11_For_23_Conditional_0_Template, 2, 1, "div", 30)(1, ChatComponent_Conditional_11_For_23_Conditional_1_Template, 2, 1, "div", 34)(2, ChatComponent_Conditional_11_For_23_Conditional_2_Template, 2, 1, "div", 35)(3, ChatComponent_Conditional_11_For_23_Conditional_3_Template, 2, 1, "div", 36)(4, ChatComponent_Conditional_11_For_23_Conditional_4_Template, 8, 8, "div", 37);
  }
  if (rf & 2) {
    const msg_r6 = ctx.$implicit;
    const \u0275$index_98_r5 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.dataLabel(\u0275$index_98_r5) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isMsgAnnulla(msg_r6) ? 1 : ctx_r0.isMsgConferma(msg_r6) ? 2 : ctx_r0.isMsgRecensione(msg_r6) ? 3 : 4);
  }
}
function ChatComponent_Conditional_11_ForEmpty_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, "Nessun messaggio ancora. Inizia la conversazione!");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_Conditional_11_Conditional_25_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1, "\u2713 Hai lasciato una recensione per questo scambio");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_Conditional_11_Conditional_25_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function ChatComponent_Conditional_11_Conditional_25_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.apriRecensione());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Lascia una recensione a ", (tmp_4_0 = ctx_r0.altroUtente(ctx_r0.chatAttiva())) == null ? null : tmp_4_0.nome_completo, " ");
  }
}
function ChatComponent_Conditional_11_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ChatComponent_Conditional_11_Conditional_25_Conditional_0_Template, 2, 0, "div", 45)(1, ChatComponent_Conditional_11_Conditional_25_Conditional_1_Template, 2, 1, "button", 46);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.hoGiaRecensito() ? 0 : 1);
  }
}
function ChatComponent_Conditional_11_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "input", 48);
    \u0275\u0275listener("input", function ChatComponent_Conditional_11_Conditional_26_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.testoMsg.set($event.target.value));
    })("keydown", function ChatComponent_Conditional_11_Conditional_26_Template_input_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onEnter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 49);
    \u0275\u0275listener("click", function ChatComponent_Conditional_11_Conditional_26_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
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
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275template(2, ChatComponent_Conditional_11_Conditional_2_Template, 1, 1, "img", 13)(3, ChatComponent_Conditional_11_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21)(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 23)(8, "span", 24);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 25);
    \u0275\u0275text(11, "\u21C4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 26);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, ChatComponent_Conditional_11_Conditional_14_Template, 5, 2, "div", 27)(15, ChatComponent_Conditional_11_Conditional_15_Template, 2, 0, "span", 28)(16, ChatComponent_Conditional_11_Conditional_16_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 29, 0)(19, "div", 30);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(22, ChatComponent_Conditional_11_For_23_Template, 5, 2, null, null, _forTrack1, false, ChatComponent_Conditional_11_ForEmpty_24_Template, 2, 0, "div", 30);
    \u0275\u0275template(25, ChatComponent_Conditional_11_Conditional_25_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, ChatComponent_Conditional_11_Conditional_26_Template, 4, 1, "div", 31);
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
    \u0275\u0275textInterpolate1(" \u{1F381} Tu offri: ", (tmp_4_0 = ctx_r0.annuncioMio(ctx_r0.chatAttiva())) == null ? null : tmp_4_0.titolo, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u{1F4E6} Ricevi: ", (tmp_5_0 = ctx_r0.annuncioAltro(ctx_r0.chatAttiva())) == null ? null : tmp_5_0.titolo, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.chatAttiva().stato_chat === "aperta" ? 14 : ctx_r0.chatAttiva().stato_chat === "completata" ? 15 : 16);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" \u{1F4AC} Chat aperta il ", \u0275\u0275pipeBind2(21, 9, ctx_r0.chatAttiva().timestamp_chat, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.messaggi());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.chatAttiva().stato_chat === "completata" ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.chatAttiva().stato_chat === "aperta" ? 26 : -1);
  }
}
function ChatComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 50);
    \u0275\u0275text(2, "Seleziona una chat dalla lista.");
    \u0275\u0275elementEnd()();
  }
}
function ChatComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function ChatComponent_Conditional_13_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event.target === $event.currentTarget && ctx_r0.chiudiConfermaAnnulla());
    });
    \u0275\u0275elementStart(1, "div", 52)(2, "div", 53);
    \u0275\u0275text(3, "\u2717 Annulla scambio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 54);
    \u0275\u0275text(5, " Sei sicuro di voler annullare questo scambio? Gli annunci coinvolti torneranno attivi e la chat verr\xE0 contrassegnata come chiusa. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 55)(7, "button", 56);
    \u0275\u0275listener("click", function ChatComponent_Conditional_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.chiudiConfermaAnnulla());
    });
    \u0275\u0275text(8, "No, torna indietro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 57);
    \u0275\u0275listener("click", function ChatComponent_Conditional_13_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confermaAnnullaScambio());
    });
    \u0275\u0275text(10, "S\xEC, annulla scambio");
    \u0275\u0275elementEnd()()()();
  }
}
function ChatComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function ChatComponent_Conditional_14_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event.target === $event.currentTarget && ctx_r0.chiudiConfermaCompleta());
    });
    \u0275\u0275elementStart(1, "div", 52)(2, "div", 53);
    \u0275\u0275text(3, "\u2713 Completa scambio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 54);
    \u0275\u0275text(5, " Confermi che lo scambio \xE8 andato a buon fine? Lo scambio si concluder\xE0 solo quando anche l'altro utente avr\xE0 confermato. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 55)(7, "button", 56);
    \u0275\u0275listener("click", function ChatComponent_Conditional_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.chiudiConfermaCompleta());
    });
    \u0275\u0275text(8, "No, torna indietro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 57);
    \u0275\u0275listener("click", function ChatComponent_Conditional_14_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confermaCompletaScambio());
    });
    \u0275\u0275text(10, "S\xEC, confermo");
    \u0275\u0275elementEnd()()()();
  }
}
var ChatComponent = class _ChatComponent {
  msgsAreaRef;
  chatService = inject(ChatService);
  toast = inject(ToastService);
  auth = inject(AuthService);
  overlayService = inject(OverlayService);
  route = inject(ActivatedRoute);
  notif = inject(NotificationService);
  chat = signal([]);
  chatAttiva = signal(null);
  messaggi = signal([]);
  loading = signal(true);
  testoMsg = signal("");
  confermaAnnullaAperta = signal(false);
  confermaCompletaAperta = signal(false);
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
        this._selezionaChatDaQueryParam(data);
      },
      error: () => {
        this.toast.err("Errore", "Impossibile caricare le chat.", "\u274C");
        this.loading.set(false);
      }
    });
  }
  /** Se l'URL contiene ?idAnnuncio=..., apre automaticamente la chat relativa a quell'annuncio. */
  _selezionaChatDaQueryParam(chats) {
    const idAnnuncio = Number(this.route.snapshot.queryParamMap.get("idAnnuncio"));
    if (!idAnnuncio)
      return;
    const trovata = chats.find((c) => {
      const interesse = c.proposta_generante?.annuncio_interesse;
      const offerti = c.proposta_generante?.annunci_offerti ?? [];
      return interesse?.id_annuncio === idAnnuncio || offerti.some((ao) => ao.annuncio_offerto?.id_annuncio === idAnnuncio);
    });
    if (trovata)
      this.selezionaChat(trovata);
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
  apriConfermaCompleta() {
    this.confermaCompletaAperta.set(true);
  }
  chiudiConfermaCompleta() {
    this.confermaCompletaAperta.set(false);
  }
  confermaCompletaScambio() {
    const chat = this.chatAttiva();
    this.confermaCompletaAperta.set(false);
    if (!chat)
      return;
    this.chatService.completa(chat.id_chat).subscribe({
      next: (res) => {
        if (res.completato) {
          this.toast.ok("Scambio completato! \u{1F389}", "CO\u2082 calcolata!", "\u{1F331}");
          this.chatAttiva.update((c) => c ? __spreadProps(__spreadValues({}, c), { stato_chat: "completata" }) : c);
          if (res.id_altro_utente != null)
            setTimeout(() => this.overlayService.apriRecensione(res.id_altro_utente, chat.id_chat), 1500);
        } else {
          this.toast.info("Conferma registrata", "In attesa che l'altro utente confermi.", "\u{1F91D}");
        }
        this.caricaChat();
        this.selezionaChat(this.chatAttiva());
      },
      error: () => this.toast.err("Errore", "Impossibile completare lo scambio.", "\u274C")
    });
  }
  apriConfermaAnnulla() {
    this.confermaAnnullaAperta.set(true);
  }
  chiudiConfermaAnnulla() {
    this.confermaAnnullaAperta.set(false);
  }
  confermaAnnullaScambio() {
    const chat = this.chatAttiva();
    this.confermaAnnullaAperta.set(false);
    if (!chat)
      return;
    this.chatService.annulla(chat.id_chat).subscribe({
      next: () => {
        this.toast.info("Scambio annullato", "Gli annunci tornano attivi.", "\u2717");
        this.chatAttiva.update((c) => c ? __spreadProps(__spreadValues({}, c), { stato_chat: "annullata" }) : c);
        this.caricaChat();
        this.selezionaChat(this.chatAttiva());
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
  apriRecensione() {
    const chat = this.chatAttiva();
    const altro = this.altroUtente(chat);
    if (!chat || !altro)
      return;
    this.overlayService.apriRecensione(altro.id_utente_reg, chat.id_chat);
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
  /** Annuncio messo in gioco dall'utente corrente in questa chat. */
  annuncioMio(chat) {
    if (!chat)
      return null;
    const id = this.utenteCorrente?.id_utente_reg;
    const pub = chat.proposta_generante?.annuncio_interesse?.pubblicante;
    return id === pub?.id_utente_reg ? chat.proposta_generante?.annuncio_interesse : this.annuncioScelto(chat);
  }
  /** Annuncio messo in gioco dall'altro utente in questa chat. */
  annuncioAltro(chat) {
    if (!chat)
      return null;
    const id = this.utenteCorrente?.id_utente_reg;
    const pub = chat.proposta_generante?.annuncio_interesse?.pubblicante;
    return id === pub?.id_utente_reg ? this.annuncioScelto(chat) : chat.proposta_generante?.annuncio_interesse;
  }
  /** Riconosce il messaggio di sistema generato all'annullamento dello scambio. */
  isMsgAnnulla(msg) {
    return typeof msg?.contenuto === "string" && msg.contenuto.endsWith("ha annullato lo scambio");
  }
  /** Riconosce il messaggio di sistema generato dalla conferma di completamento. */
  isMsgConferma(msg) {
    return typeof msg?.contenuto === "string" && msg.contenuto.endsWith("ha confermato che lo scambio \xE8 stato completato");
  }
  /** True se l'utente corrente ha già confermato il completamento di questa chat. */
  hoGiaConfermato() {
    const id = this.utenteCorrente?.id_utente_reg;
    return this.messaggi().some((m) => this.isMsgConferma(m) && m.mittente?.id_utente_reg === id);
  }
  /** Riconosce il messaggio di sistema generato dall'invio di una recensione. */
  isMsgRecensione(msg) {
    return typeof msg?.contenuto === "string" && msg.contenuto.endsWith("ha lasciato una recensione");
  }
  /** True se l'utente corrente ha già lasciato una recensione in questa chat. */
  hoGiaRecensito() {
    const id = this.utenteCorrente?.id_utente_reg;
    return this.messaggi().some((m) => this.isMsgRecensione(m) && m.mittente?.id_utente_reg === id);
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
  }, decls: 15, vars: 5, consts: [["msgsArea", ""], [1, "chat-layout"], [1, "chat-sb"], [1, "chat-sb-hdr"], [1, "chat-sb-t"], [1, "conv-list"], [1, "u-text-muted-sm", 2, "padding", "16px"], [1, "conv", 3, "act", "annullata", "completata"], [1, "chat-main"], [2, "flex", "1", "display", "flex", "align-items", "center", "justify-content", "center"], [1, "modal-bg", "open", 2, "z-index", "900"], [1, "conv", 3, "click"], [1, "conv-av", "av-sage"], [1, "av-img", 3, "src"], [1, "u-flex1-mw0"], [1, "conv-name"], [1, "conv-prev"], [1, "conv-time"], [1, "conv-badge"], [1, "chat-top"], [1, "chat-top-av", "av-sage"], [1, "chat-top-info"], [1, "chat-top-n"], [1, "chat-top-swap"], ["title", "Quello che offri tu", 1, "chat-top-swap-item"], [1, "chat-top-arrow"], ["title", "Quello che offre l'altro utente", 1, "chat-top-swap-item"], [1, "chat-top-acts"], [1, "chat-conclusa-badge"], [1, "msgs-area"], [1, "sys-msg"], [1, "chat-input-bar"], [1, "btn-ghost", 3, "click"], [1, "btn-complete", 3, "click", "disabled"], [1, "sys-msg", "sys-msg-annulla"], [1, "sys-msg", "sys-msg-conferma"], [1, "sys-msg", "sys-msg-recensione"], [1, "msg", 3, "me"], [1, "msg"], [1, "conv-av", "conv-av-sm", "av-sage"], [1, "msg-body"], [1, "msg-t"], [1, "bubble"], [1, "msg-tick", 3, "msg-tick-read", "msg-tick-neutral"], [1, "msg-tick"], [1, "sys-msg", "sys-msg-recensione-fatta"], [1, "btn-recensione-msg"], [1, "btn-recensione-msg", 3, "click"], ["placeholder", "Scrivi un messaggio...", 1, "chat-inp", 3, "input", "keydown", "value"], [1, "btn-send", 3, "click"], [1, "u-text-muted-sm"], [1, "modal-bg", "open", 2, "z-index", "900", 3, "click"], [1, "modal", "u-mw520"], [1, "modal-h"], [1, "modal-p"], [1, "modal-acts"], [1, "btn-cancel2", 3, "click"], [1, "btn-confirm", 3, "click"]], template: function ChatComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
      \u0275\u0275text(4, "\u{1F4AC} Chat attive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275template(6, ChatComponent_Conditional_6_Template, 2, 0, "p", 6);
      \u0275\u0275repeaterCreate(7, ChatComponent_For_8_Template, 13, 14, "div", 7, _forTrack0, false, ChatComponent_ForEmpty_9_Template, 1, 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 8);
      \u0275\u0275template(11, ChatComponent_Conditional_11_Template, 27, 12)(12, ChatComponent_Conditional_12_Template, 3, 0, "div", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, ChatComponent_Conditional_13_Template, 11, 0, "div", 10)(14, ChatComponent_Conditional_14_Template, 11, 0, "div", 10);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.chat());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.chatAttiva() ? 11 : 12);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.confermaAnnullaAperta() ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.confermaCompletaAperta() ? 14 : -1);
    }
  }, dependencies: [CommonModule, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatComponent, { className: "ChatComponent", filePath: "app/pages/chat/chat.component.ts", lineNumber: 18 });
})();
export {
  ChatComponent
};
//# sourceMappingURL=chunk-V42G4FCD.js.map
