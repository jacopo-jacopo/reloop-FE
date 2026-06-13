import {
  UtenteService
} from "./chunk-MS2JQD6X.js";
import {
  SegnalazioneService
} from "./chunk-EOAE7ACB.js";
import {
  OverlayService
} from "./chunk-LAONVNUN.js";
import {
  AnnuncioService
} from "./chunk-VUMWJ5MW.js";
import {
  AuthService,
  CommonModule,
  NgClass,
  Router,
  RouterLink,
  RouterModule,
  ToastService,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-3SNN5JWR.js";

// src/app/pages/profilo/profilo.component.ts
var _c0 = (a0, a1) => [a0, a1];
var _c1 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.id_segnalazione;
var _forTrack1 = ($index, $item) => $item.nome_badge;
var _forTrack2 = ($index, $item) => $item.id_utente_reg;
var _forTrack3 = ($index, $item) => $item.recensore.id_utente_reg;
var _forTrack4 = ($index, $item) => $item.id_annuncio;
function ProfiloComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Caricamento...");
    \u0275\u0275elementEnd();
  }
}
function ProfiloComponent_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 27);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.fotoProfilo(), \u0275\u0275sanitizeUrl);
  }
}
function ProfiloComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.iniziali, " ");
  }
}
function ProfiloComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, ProfiloComponent_Conditional_4_Conditional_1_Template, 1, 1, "img", 27)(2, ProfiloComponent_Conditional_4_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 30)(8, "div", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 32);
    \u0275\u0275text(11, "punti eco-reputazione");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 33)(13, "div", 34)(14, "div", 35);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 36);
    \u0275\u0275text(17, "scambi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 34)(19, "div", 35);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 36);
    \u0275\u0275text(22, "badge");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 34)(24, "div", 35);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 36);
    \u0275\u0275text(27, "CO\u2082 totale");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 34)(29, "div", 35);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 36);
    \u0275\u0275text(32, "classifica");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "button", 37);
    \u0275\u0275listener("click", function ProfiloComponent_Conditional_4_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.apriModificaProfilo());
    });
    \u0275\u0275text(34, " \u270F\uFE0F Modifica profilo ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fotoProfilo() ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.profilo().nome_completo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" \u{1F4CD} ", (tmp_3_0 = ctx_r1.profilo().quartiere) == null ? null : tmp_3_0.nome_quartiere, ", ", (tmp_3_0 = ctx_r1.profilo().quartiere) == null ? null : tmp_3_0.citta, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.profilo().punteggio);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.annunciChiusi.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.badge().length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.profilo().co2_totale, " kg");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.posizione(ctx_r1.profilo()), "\xB0");
  }
}
function ProfiloComponent_Conditional_8_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function ProfiloComponent_Conditional_8_For_3_Template_div_click_0_listener() {
      const ann_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.apriModalAnnuncio(ann_r4));
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 43);
    \u0275\u0275text(7, "\u25CF Attivo \xB7 clicca per gestirlo");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ann_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ann_r4.emoji || "\u{1F4E6}");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ann_r4.titolo);
  }
}
function ProfiloComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, "\u25CF Attivi");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, ProfiloComponent_Conditional_8_For_3_Template, 8, 2, "div", 39, _forTrack4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.annunciAttivi);
  }
}
function ProfiloComponent_Conditional_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function ProfiloComponent_Conditional_9_For_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vaiAllaChat());
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 45);
    \u0275\u0275text(7, "\u23F3 In trattativa \u2192 vai alla chat");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ann_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ann_r6.emoji || "\u{1F4E6}");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ann_r6.titolo);
  }
}
function ProfiloComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1, "\u23F3 In trattativa");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, ProfiloComponent_Conditional_9_For_3_Template, 8, 2, "div", 39, _forTrack4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.annunciSospesi);
  }
}
function ProfiloComponent_Conditional_10_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 47);
    \u0275\u0275text(7, "\u2713 Chiuso");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ann_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ann_r7.emoji || "\u{1F4E6}");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ann_r7.titolo);
  }
}
function ProfiloComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1, "\u2713 Chiusi");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, ProfiloComponent_Conditional_10_For_3_Template, 8, 2, "div", 46, _forTrack4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.annunciChiusi);
  }
}
function ProfiloComponent_Conditional_11_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 41);
    \u0275\u0275text(2, "\u{1F6AB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 48);
    \u0275\u0275text(7, " \u26A0\uFE0F Rimosso dall'amministratore ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ann_r8 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ann_r8.titolo);
  }
}
function ProfiloComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1, "\u{1F6AB} Rimossi");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, ProfiloComponent_Conditional_11_For_3_Template, 8, 1, "div", 46, _forTrack4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.annunciOscurati);
  }
}
function ProfiloComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, " Nessun annuncio ancora. ");
    \u0275\u0275elementStart(2, "a", 49);
    \u0275\u0275text(3, "Pubblica il tuo primo!");
    \u0275\u0275elementEnd()();
  }
}
function ProfiloComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 41);
    \u0275\u0275text(2, "\u{1F6A9}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50)(4, "div", 51);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 52);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 53);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", s_r9.annuncio_segnalato == null ? null : s_r9.annuncio_segnalato.titolo, " (#", s_r9.id_segnalazione, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('"', s_r9.motivazione, '"');
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.classeStatoSegnalazione(s_r9.stato_segnalazione));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u25CF ", s_r9.stato_segnalazione, " ");
  }
}
function ProfiloComponent_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1, "Nessuna segnalazione inviata.");
    \u0275\u0275elementEnd();
  }
}
function ProfiloComponent_For_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1, "\u2713 Sbloccato");
    \u0275\u0275elementEnd();
  }
}
function ProfiloComponent_For_29_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 62)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const b_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r1.percentualeBadge(b_r10.soglia_punti) + "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ((tmp_12_0 = ctx_r1.profilo()) == null ? null : tmp_12_0.punteggio) || 0, "/", b_r10.soglia_punti, " pt");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.percentualeBadge(b_r10.soglia_punti), "%");
  }
}
function ProfiloComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, ProfiloComponent_For_29_Conditional_1_Template, 2, 0, "div", 54);
    \u0275\u0275elementStart(2, "div", 55)(3, "div", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 57);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 58);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 59);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ProfiloComponent_For_29_Conditional_12_Template, 7, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c0, b_r10.colore, ctx_r1.isSbloccato(b_r10.nome_badge) ? "unlocked" : "locked"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSbloccato(b_r10.nome_badge) ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r10.emoji);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r10.nome_badge);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", b_r10.soglia_punti, " punti");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r10.descrizione_badge);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isSbloccato(b_r10.nome_badge) ? 12 : -1);
  }
}
function ProfiloComponent_ForEmpty_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, " Nessun badge disponibile. ");
    \u0275\u0275elementEnd();
  }
}
function ProfiloComponent_For_37_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F947} ");
  }
}
function ProfiloComponent_For_37_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F948} ");
  }
}
function ProfiloComponent_For_37_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F949} ");
  }
}
function ProfiloComponent_For_37_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_243_r11 = \u0275\u0275nextContext().$index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_243_r11 + 1);
  }
}
function ProfiloComponent_For_37_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1, "TU");
    \u0275\u0275elementEnd();
  }
}
function ProfiloComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65);
    \u0275\u0275template(2, ProfiloComponent_For_37_Conditional_2_Template, 1, 0)(3, ProfiloComponent_For_37_Conditional_3_Template, 1, 0)(4, ProfiloComponent_For_37_Conditional_4_Template, 1, 0)(5, ProfiloComponent_For_37_Conditional_5_Template, 2, 1, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 67);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 68)(9, "div", 69);
    \u0275\u0275text(10);
    \u0275\u0275template(11, ProfiloComponent_For_37_Conditional_11_Template, 2, 0, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 71);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 72);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_15_0;
    const u_r12 = ctx.$implicit;
    const \u0275$index_243_r11 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("you", u_r12.id_utente_reg === ((tmp_11_0 = ctx_r1.profilo()) == null ? null : tmp_11_0.id_utente_reg));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275$index_243_r11 === 0 ? 2 : \u0275$index_243_r11 === 1 ? 3 : \u0275$index_243_r11 === 2 ? 4 : 5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", u_r12.nome_completo.substring(0, 2).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", u_r12.nome_completo, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r12.id_utente_reg === ((tmp_15_0 = ctx_r1.profilo()) == null ? null : tmp_15_0.id_utente_reg) ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", u_r12.co2_totale, " kg CO\u2082");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r12.punteggio);
  }
}
function ProfiloComponent_ForEmpty_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Classifica non disponibile.");
    \u0275\u0275elementEnd();
  }
}
function ProfiloComponent_For_43_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    const r_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", s_r13 <= r_r14.voto ? "\u2605" : "\u2606", " ");
  }
}
function ProfiloComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 73)(2, "div", 74);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 75);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 76);
    \u0275\u0275repeaterCreate(7, ProfiloComponent_For_43_For_8_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 77);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r14 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", r_r14.recensore.nome_completo.substring(0, 2).toUpperCase(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r14.recensore.nome_completo);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(3, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r14.descrizione_recensione);
  }
}
function ProfiloComponent_ForEmpty_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Nessuna recensione ancora.");
    \u0275\u0275elementEnd();
  }
}
function ProfiloComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275listener("click", function ProfiloComponent_Conditional_45_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.chiudiModalAnnuncio());
    });
    \u0275\u0275elementStart(1, "div", 79);
    \u0275\u0275listener("click", function ProfiloComponent_Conditional_45_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 80);
    \u0275\u0275text(3, "\u{1F4E6} Gestisci annuncio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 81)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 82)(10, "button", 83);
    \u0275\u0275listener("click", function ProfiloComponent_Conditional_45_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.chiudiAnnuncio());
    });
    \u0275\u0275text(11, " \u{1F512} Chiudi annuncio ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 84);
    \u0275\u0275listener("click", function ProfiloComponent_Conditional_45_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.chiudiModalAnnuncio());
    });
    \u0275\u0275text(13, " Annulla ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.annuncioSelezionato()) == null ? null : tmp_1_0.titolo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Categoria: ", (tmp_2_0 = ctx_r1.annuncioSelezionato()) == null ? null : tmp_2_0.categoria, " \xB7 \u20AC", (tmp_2_0 = ctx_r1.annuncioSelezionato()) == null ? null : tmp_2_0.prezzo_stimato, " \xB7 Condizioni: ", (tmp_2_0 = ctx_r1.annuncioSelezionato()) == null ? null : tmp_2_0.condizioni, " ");
  }
}
var ProfiloComponent = class _ProfiloComponent {
  utenteService = inject(UtenteService);
  annuncioService = inject(AnnuncioService);
  segnalazioneService = inject(SegnalazioneService);
  toast = inject(ToastService);
  auth = inject(AuthService);
  overlayService = inject(OverlayService);
  router = inject(Router);
  // Chiave localStorage per tracciare gli annunci oscurati già notificati
  OSCURATI_KEY = "reloop_oscurati_notificati";
  profilo = signal(null);
  annunci = signal([]);
  badge = signal([]);
  tuttiBadge = signal([]);
  segnalazioni = signal([]);
  leaderboard = signal([]);
  recensioni = signal([]);
  fotoProfilo = signal(null);
  loading = signal(true);
  annuncioSelezionato = signal(null);
  modalAnnuncioAperto = signal(false);
  get annunciAttivi() {
    return this.annunci().filter((a) => a.stato_annuncio === "attivo");
  }
  get annunciSospesi() {
    return this.annunci().filter((a) => a.stato_annuncio === "sospeso");
  }
  get annunciChiusi() {
    return this.annunci().filter((a) => a.stato_annuncio === "chiuso");
  }
  get annunciOscurati() {
    return this.annunci().filter((a) => a.stato_annuncio === "oscurato");
  }
  get iniziali() {
    const nome = this.profilo()?.nome_completo || "";
    return nome.split(" ").map((p) => p[0]).join("").substring(0, 2).toUpperCase();
  }
  ngOnInit() {
    this.caricaTutto();
  }
  caricaTutto() {
    this.loading.set(true);
    const utente = this.auth.utenteCorrente();
    this.fotoProfilo.set(utente?.foto_profilo || null);
    this.utenteService.getProfilo().subscribe({
      next: (p) => this.profilo.set(p),
      error: () => this.toast.err("Errore", "Impossibile caricare il profilo.", "\u274C")
    });
    this.annuncioService.getMieiAnnunci().subscribe({
      next: (a) => {
        this.annunci.set(a);
        this._notificaAnnunciOscurati(a);
      },
      error: () => {
      }
    });
    this.utenteService.getBadgeOttenuti().subscribe({
      next: (b) => this.badge.set(b),
      error: () => {
      }
    });
    this.utenteService.getTuttiBadge().subscribe({
      next: (b) => this.tuttiBadge.set(b),
      error: () => {
      }
    });
    this.segnalazioneService.getMie().subscribe({
      next: (s) => this.segnalazioni.set(s),
      error: () => {
      }
    });
    this.utenteService.getLeaderboard().subscribe({
      next: (l) => this.leaderboard.set(l),
      error: () => {
      }
    });
    if (utente?.id_utente_reg) {
      this.utenteService.getRecensioni(utente.id_utente_reg).subscribe({
        next: (r) => {
          this.recensioni.set(r);
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      });
    } else {
      this.loading.set(false);
    }
  }
  /**
   * Controlla se ci sono annunci oscurati dall'admin non ancora notificati.
   * Gli ID già notificati vengono salvati in localStorage per non ripetere il toast.
   */
  _notificaAnnunciOscurati(annunci) {
    const gi\u00E0Notificati = JSON.parse(localStorage.getItem(this.OSCURATI_KEY) || "[]");
    const nuoviOscurati = annunci.filter((a) => a.stato_annuncio === "oscurato" && !gi\u00E0Notificati.includes(a.id_annuncio));
    nuoviOscurati.forEach((ann) => {
      this.toast.err("Annuncio rimosso", `Il tuo annuncio "${ann.titolo}" \xE8 stato rimosso da un amministratore.`, "\u{1F6AB}");
    });
    if (nuoviOscurati.length > 0) {
      const aggiornati = [
        ...gi\u00E0Notificati,
        ...nuoviOscurati.map((a) => a.id_annuncio)
      ];
      localStorage.setItem(this.OSCURATI_KEY, JSON.stringify(aggiornati));
    }
  }
  apriModificaProfilo() {
    this.overlayService.apriModificaProfilo();
  }
  apriModalAnnuncio(ann) {
    this.annuncioSelezionato.set(ann);
    this.modalAnnuncioAperto.set(true);
  }
  chiudiModalAnnuncio() {
    this.modalAnnuncioAperto.set(false);
    this.annuncioSelezionato.set(null);
  }
  chiudiAnnuncio() {
    const ann = this.annuncioSelezionato();
    if (!ann)
      return;
    this.annuncioService.chiudi(ann.id_annuncio).subscribe({
      next: () => {
        this.toast.ok("Annuncio chiuso", `"${ann.titolo}" \xE8 stato chiuso.`, "\u2705");
        this.chiudiModalAnnuncio();
        this.caricaTutto();
      },
      error: () => this.toast.err("Errore", "Impossibile chiudere l'annuncio.", "\u274C")
    });
  }
  isSbloccato(nomeBadge) {
    return this.badge().some((b) => b.badge?.nome_badge === nomeBadge);
  }
  percentualeBadge(soglia) {
    const punti = this.profilo()?.punteggio || 0;
    return Math.min(Math.round(punti / soglia * 100), 100);
  }
  posizione(utente) {
    return this.leaderboard().findIndex((u) => u.id_utente_reg === utente.id_utente_reg) + 1;
  }
  classeStatoSegnalazione(stato) {
    if (stato === "presa_in_carico")
      return "u-clr-carico";
    if (stato === "chiusa")
      return "u-clr-chiusa";
    return "u-clr-attesa";
  }
  vaiAllaChat() {
    this.router.navigate(["/chat"]);
  }
  static \u0275fac = function ProfiloComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfiloComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfiloComponent, selectors: [["app-profilo"]], decls: 46, vars: 13, consts: [[1, "prof-layout"], [1, "prof-sidebar"], [1, "prof-card", "u-text-center"], [1, "u-text-muted-sm"], [1, "prof-ann-card"], [1, "prof-ann-t"], [1, "u-text-muted-sm", 2, "margin-top", "8px"], [1, "prof-ann-t", 2, "margin-top", "18px"], [1, "u-text-note2-mb14"], [1, "active-ann", "segnala-item"], [1, "u-text-xs-muted"], [1, "badge-sec"], [1, "badge-sec-hdr"], [1, "badge-sec-t"], [1, "badge-cnt"], [1, "badges-grid"], [1, "badge-card", 3, "ngClass"], [1, "u-text-muted-sm", 2, "grid-column", "1/-1"], [1, "lb-sec"], [1, "lb-t"], [1, "lb-sub"], [1, "lb-row", 3, "you"], [1, "reviews-sec"], [1, "reviews-t"], [1, "rev-item"], [1, "modal-bg", "open"], [1, "prof-av"], [2, "width", "100%", "height", "100%", "object-fit", "cover", "border-radius", "50%", 3, "src"], [1, "prof-name"], [1, "prof-loc"], [1, "prof-score-box"], [1, "prof-score-n"], [1, "prof-score-l"], [1, "prof-stats"], [1, "pstat"], [1, "pstat-n"], [1, "pstat-l"], [1, "btn-outline", 2, "width", "100%", "margin-top", "14px", "font-size", ".82rem", 3, "click"], [1, "u-section-label"], [1, "active-ann", "clickable"], [1, "active-ann", "clickable", 3, "click"], [1, "active-ann-ico"], [1, "active-ann-name"], [1, "active-ann-s"], [1, "u-section-label-mt"], [1, "active-ann-s", "u-clr-amber"], [1, "active-ann", "u-opacity55"], [1, "active-ann-s", "u-clr-txt3"], [1, "active-ann-s", 2, "color", "var(--terra)"], ["routerLink", "/pubblica", 2, "color", "var(--lime)"], [1, "u-flex1", "segnala-body"], [1, "active-ann-name", "segnala-title"], [1, "u-text-xs-muted", "segnala-nota"], [1, "active-ann-s", "segnala-stato"], [1, "badge-stamp"], [1, "badge-top"], [1, "badge-emo"], [1, "badge-name"], [1, "badge-cat"], [1, "badge-desc"], [1, "badge-bar-t"], [1, "badge-bar-f"], [1, "badge-pct"], [1, "u-clr-sage"], [1, "lb-row"], [1, "lb-med"], [1, "lb-rank", "u-opacity40"], [1, "lb-av", "av-lime"], [1, "lb-user"], [1, "lb-uname"], [1, "lb-you-tag"], [1, "lb-uinfo"], [1, "lb-score"], [1, "rev-hdr"], [1, "rev-av", "av-sage"], [1, "rev-name"], [1, "rev-stars"], [1, "rev-txt"], [1, "modal-bg", "open", 3, "click"], [1, "modal", 3, "click"], [1, "modal-h"], [1, "modal-p"], [1, "modal-acts", 2, "flex-direction", "column", "gap", "8px"], [1, "btn-confirm", 2, "background", "var(--terra)", "color", "#fff", 3, "click"], [1, "btn-cancel2", 3, "click"]], template: function ProfiloComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275template(3, ProfiloComponent_Conditional_3_Template, 2, 0, "p", 3)(4, ProfiloComponent_Conditional_4_Template, 35, 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
      \u0275\u0275text(7, "I tuoi annunci");
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, ProfiloComponent_Conditional_8_Template, 4, 0)(9, ProfiloComponent_Conditional_9_Template, 4, 0)(10, ProfiloComponent_Conditional_10_Template, 4, 0)(11, ProfiloComponent_Conditional_11_Template, 4, 0)(12, ProfiloComponent_Conditional_12_Template, 4, 0, "p", 6);
      \u0275\u0275elementStart(13, "div", 7);
      \u0275\u0275text(14, "\u{1F6A9} Monitoraggio Segnalazioni");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 8);
      \u0275\u0275text(16, " Traccia lo stato delle segnalazioni inviate ai moderatori. ");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(17, ProfiloComponent_For_18_Template, 10, 6, "div", 9, _forTrack0, false, ProfiloComponent_ForEmpty_19_Template, 2, 0, "p", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div")(21, "div", 11)(22, "div", 12)(23, "div", 13);
      \u0275\u0275text(24, "\u{1F3C5} I tuoi Badge");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 14);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 15);
      \u0275\u0275repeaterCreate(28, ProfiloComponent_For_29_Template, 13, 10, "div", 16, _forTrack1, false, ProfiloComponent_ForEmpty_30_Template, 2, 0, "p", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 18)(32, "div", 19);
      \u0275\u0275text(33, "\u{1F3C6} Classifica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 20);
      \u0275\u0275text(35, "I migliori scambiatori");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(36, ProfiloComponent_For_37_Template, 16, 8, "div", 21, _forTrack2, false, ProfiloComponent_ForEmpty_38_Template, 2, 0, "p", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 22)(40, "div", 23);
      \u0275\u0275text(41, "\u2B50 Recensioni ricevute");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(42, ProfiloComponent_For_43_Template, 11, 4, "div", 24, _forTrack3, false, ProfiloComponent_ForEmpty_44_Template, 2, 0, "p", 3);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(45, ProfiloComponent_Conditional_45_Template, 14, 4, "div", 25);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 3 : ctx.profilo() ? 4 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.annunciAttivi.length > 0 ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.annunciSospesi.length > 0 ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.annunciChiusi.length > 0 ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.annunciOscurati.length > 0 ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.annunciAttivi.length === 0 && ctx.annunciSospesi.length === 0 && ctx.annunciChiusi.length === 0 && ctx.annunciOscurati.length === 0 ? 12 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.segnalazioni());
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate2(" ", ctx.badge().length, " sbloccati su ", ctx.tuttiBadge().length, " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tuttiBadge());
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.leaderboard());
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.recensioni());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.modalAnnuncioAperto() ? 45 : -1);
    }
  }, dependencies: [CommonModule, NgClass, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfiloComponent, { className: "ProfiloComponent", filePath: "app/pages/profilo/profilo.component.ts", lineNumber: 19 });
})();
export {
  ProfiloComponent
};
//# sourceMappingURL=chunk-AOABKQGG.js.map
