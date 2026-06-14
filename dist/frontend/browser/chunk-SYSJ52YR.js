import {
  PropostaService
} from "./chunk-TMEL3XZI.js";
import {
  NotificationService
} from "./chunk-PVRZVAKQ.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  Router,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3V7QK2LV.js";

// src/app/pages/proposte/proposte.component.ts
var _forTrack0 = ($index, $item) => $item.id_proposta;
var _forTrack1 = ($index, $item) => $item.annuncio_offerto == null ? null : $item.annuncio_offerto.id_annuncio;
function ProposteComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 7);
    \u0275\u0275text(2, "Caricamento proposte...");
    \u0275\u0275elementEnd()();
  }
}
function ProposteComponent_Conditional_12_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const p_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", p_r1.proponente.foto_profilo, \u0275\u0275sanitizeUrl);
  }
}
function ProposteComponent_Conditional_12_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const p_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.initials(p_r1.proponente == null ? null : p_r1.proponente.nome_completo), " ");
  }
}
function ProposteComponent_Conditional_12_For_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("~\u20AC", p_r1.annuncio_interesse.prezzo_stimato, "");
  }
}
function ProposteComponent_Conditional_12_For_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, " Scegli uno ");
    \u0275\u0275elementStart(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r1.annunci_offerti == null ? null : p_r1.annunci_offerti.length, " opzioni");
  }
}
function ProposteComponent_Conditional_12_For_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Offre in cambio");
    \u0275\u0275elementEnd();
  }
}
function ProposteComponent_Conditional_12_For_1_For_32_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ao_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("~\u20AC", ao_r4.annuncio_offerto.prezzo_stimato, "");
  }
}
function ProposteComponent_Conditional_12_For_1_For_32_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
function ProposteComponent_Conditional_12_For_1_For_32_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, ProposteComponent_Conditional_12_For_1_For_32_Conditional_9_Conditional_1_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ao_r4 = \u0275\u0275nextContext().$implicit;
    const p_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("swap-item-radio-sel", ctx_r1.isSelezionato(p_r1.id_proposta, ao_r4.annuncio_offerto == null ? null : ao_r4.annuncio_offerto.id_annuncio));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSelezionato(p_r1.id_proposta, ao_r4.annuncio_offerto == null ? null : ao_r4.annuncio_offerto.id_annuncio) ? 1 : -1);
  }
}
function ProposteComponent_Conditional_12_For_1_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function ProposteComponent_Conditional_12_For_1_For_32_Template_div_click_0_listener() {
      let tmp_22_0;
      const ao_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const p_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(((tmp_22_0 = p_r1.annunci_offerti == null ? null : p_r1.annunci_offerti.length) !== null && tmp_22_0 !== void 0 ? tmp_22_0 : 0) > 1 && p_r1.stato_proposta === "in_attesa" && ctx_r1.seleziona(p_r1.id_proposta, ao_r4.annuncio_offerto == null ? null : ao_r4.annuncio_offerto.id_annuncio));
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275text(2, "\u{1F381}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 21);
    \u0275\u0275text(7, "annuncio offerto");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ProposteComponent_Conditional_12_For_1_For_32_Conditional_8_Template, 2, 1, "div", 22)(9, ProposteComponent_Conditional_12_For_1_For_32_Conditional_9_Template, 2, 3, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_21_0;
    let tmp_25_0;
    const ao_r4 = ctx.$implicit;
    const p_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("swap-item-pick", ((tmp_21_0 = p_r1.annunci_offerti == null ? null : p_r1.annunci_offerti.length) !== null && tmp_21_0 !== void 0 ? tmp_21_0 : 0) > 1 && p_r1.stato_proposta === "in_attesa")("swap-item-sel", ctx_r1.isSelezionato(p_r1.id_proposta, ao_r4.annuncio_offerto == null ? null : ao_r4.annuncio_offerto.id_annuncio));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ao_r4.annuncio_offerto == null ? null : ao_r4.annuncio_offerto.titolo);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ao_r4.annuncio_offerto == null ? null : ao_r4.annuncio_offerto.prezzo_stimato) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_25_0 = p_r1.annunci_offerti == null ? null : p_r1.annunci_offerti.length) !== null && tmp_25_0 !== void 0 ? tmp_25_0 : 0) > 1 && p_r1.stato_proposta === "in_attesa" ? 9 : -1);
  }
}
function ProposteComponent_Conditional_12_For_1_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, "Seleziona l'oggetto che vuoi ricevere");
    \u0275\u0275elementEnd();
  }
}
function ProposteComponent_Conditional_12_For_1_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 31);
    \u0275\u0275listener("click", function ProposteComponent_Conditional_12_For_1_Conditional_34_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const p_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.accetta(p_r1));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 32);
    \u0275\u0275listener("click", function ProposteComponent_Conditional_12_For_1_Conditional_34_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const p_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rifiuta(p_r1));
    });
    \u0275\u0275text(4, "Rifiuta");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canAccetta(p_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.accettando() === p_r1.id_proposta ? "Accettazione in corso..." : "Accetta proposta", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.accettando() !== null);
  }
}
function ProposteComponent_Conditional_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 10)(2, "div", 11);
    \u0275\u0275template(3, ProposteComponent_Conditional_12_For_1_Conditional_3_Template, 1, 1, "img", 12)(4, ProposteComponent_Conditional_12_For_1_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 14)(14, "div", 15)(15, "div", 16);
    \u0275\u0275text(16, "Il tuo annuncio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 17)(18, "div", 18);
    \u0275\u0275text(19, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 19)(21, "div", 20);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 21);
    \u0275\u0275text(24, "richiesto");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, ProposteComponent_Conditional_12_For_1_Conditional_25_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 23);
    \u0275\u0275text(27, "\u21C4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 15);
    \u0275\u0275template(29, ProposteComponent_Conditional_12_For_1_Conditional_29_Template, 4, 1, "div", 16)(30, ProposteComponent_Conditional_12_For_1_Conditional_30_Template, 2, 0, "div", 16);
    \u0275\u0275repeaterCreate(31, ProposteComponent_Conditional_12_For_1_For_32_Template, 10, 7, "div", 24, _forTrack1);
    \u0275\u0275template(33, ProposteComponent_Conditional_12_For_1_Conditional_33_Template, 2, 0, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, ProposteComponent_Conditional_12_For_1_Conditional_34_Template, 5, 3, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_18_0;
    let tmp_20_0;
    const p_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((p_r1.proponente == null ? null : p_r1.proponente.foto_profilo) ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r1.proponente == null ? null : p_r1.proponente.nome_completo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ricevuta il ", \u0275\u0275pipeBind2(10, 11, p_r1.timestamp_proposta, "dd/MM/yyyy HH:mm"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.badgeClass(p_r1.stato_proposta));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.labelStato(p_r1.stato_proposta));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(p_r1.annuncio_interesse == null ? null : p_r1.annuncio_interesse.titolo);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((p_r1.annuncio_interesse == null ? null : p_r1.annuncio_interesse.prezzo_stimato) ? 25 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(((tmp_18_0 = p_r1.annunci_offerti == null ? null : p_r1.annunci_offerti.length) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : 0) > 1 ? 29 : 30);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(p_r1.annunci_offerti);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_20_0 = p_r1.annunci_offerti == null ? null : p_r1.annunci_offerti.length) !== null && tmp_20_0 !== void 0 ? tmp_20_0 : 0) > 1 && p_r1.stato_proposta === "in_attesa" && !ctx_r1.canAccetta(p_r1) ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r1.stato_proposta === "in_attesa" ? 34 : -1);
  }
}
function ProposteComponent_Conditional_12_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, " Nessuna proposta ricevuta. ");
    \u0275\u0275elementEnd();
  }
}
function ProposteComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProposteComponent_Conditional_12_For_1_Template, 35, 14, "div", 8, _forTrack0, false, ProposteComponent_Conditional_12_ForEmpty_2_Template, 2, 0, "p", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.ricevute());
  }
}
function ProposteComponent_Conditional_13_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", p_r6.annuncio_interesse.pubblicante.foto_profilo, \u0275\u0275sanitizeUrl);
  }
}
function ProposteComponent_Conditional_13_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.initials(p_r6.annuncio_interesse == null ? null : p_r6.annuncio_interesse.pubblicante == null ? null : p_r6.annuncio_interesse.pubblicante.nome_completo), " ");
  }
}
function ProposteComponent_Conditional_13_For_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("~\u20AC", p_r6.annuncio_interesse.prezzo_stimato, "");
  }
}
function ProposteComponent_Conditional_13_For_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, " Offri a scelta ");
    \u0275\u0275elementStart(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r6.annunci_offerti == null ? null : p_r6.annunci_offerti.length, " opzioni");
  }
}
function ProposteComponent_Conditional_13_For_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Offri in cambio");
    \u0275\u0275elementEnd();
  }
}
function ProposteComponent_Conditional_13_For_1_For_32_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ao_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("~\u20AC", ao_r7.annuncio_offerto.prezzo_stimato, "");
  }
}
function ProposteComponent_Conditional_13_For_1_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275text(2, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 21);
    \u0275\u0275text(7, "tuo annuncio");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ProposteComponent_Conditional_13_For_1_For_32_Conditional_8_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ao_r7 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ao_r7.annuncio_offerto == null ? null : ao_r7.annuncio_offerto.titolo);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ao_r7.annuncio_offerto == null ? null : ao_r7.annuncio_offerto.prezzo_stimato) ? 8 : -1);
  }
}
function ProposteComponent_Conditional_13_For_1_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, " Il destinatario sceglier\xE0 uno dei tuoi oggetti ");
    \u0275\u0275elementEnd();
  }
}
function ProposteComponent_Conditional_13_For_1_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1, "In attesa di risposta.");
    \u0275\u0275elementEnd();
  }
}
function ProposteComponent_Conditional_13_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 10)(2, "div", 33);
    \u0275\u0275template(3, ProposteComponent_Conditional_13_For_1_Conditional_3_Template, 1, 1, "img", 12)(4, ProposteComponent_Conditional_13_For_1_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 14)(14, "div", 15)(15, "div", 16);
    \u0275\u0275text(16, "Annuncio richiesto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 17)(18, "div", 18);
    \u0275\u0275text(19, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 19)(21, "div", 20);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 21);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, ProposteComponent_Conditional_13_For_1_Conditional_25_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 23);
    \u0275\u0275text(27, "\u21C4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 15);
    \u0275\u0275template(29, ProposteComponent_Conditional_13_For_1_Conditional_29_Template, 4, 1, "div", 16)(30, ProposteComponent_Conditional_13_For_1_Conditional_30_Template, 2, 0, "div", 16);
    \u0275\u0275repeaterCreate(31, ProposteComponent_Conditional_13_For_1_For_32_Template, 9, 2, "div", 17, _forTrack1);
    \u0275\u0275template(33, ProposteComponent_Conditional_13_For_1_Conditional_33_Template, 2, 0, "div", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, ProposteComponent_Conditional_13_For_1_Conditional_34_Template, 2, 0, "p", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_19_0;
    let tmp_21_0;
    const p_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((p_r6.annuncio_interesse == null ? null : p_r6.annuncio_interesse.pubblicante == null ? null : p_r6.annuncio_interesse.pubblicante.foto_profilo) ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("A ", p_r6.annuncio_interesse == null ? null : p_r6.annuncio_interesse.pubblicante == null ? null : p_r6.annuncio_interesse.pubblicante.nome_completo, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("inviata il ", \u0275\u0275pipeBind2(10, 12, p_r6.timestamp_proposta, "dd/MM/yyyy HH:mm"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.badgeClass(p_r6.stato_proposta));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.labelStato(p_r6.stato_proposta));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(p_r6.annuncio_interesse == null ? null : p_r6.annuncio_interesse.titolo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("di ", p_r6.annuncio_interesse == null ? null : p_r6.annuncio_interesse.pubblicante == null ? null : p_r6.annuncio_interesse.pubblicante.nome_completo, "");
    \u0275\u0275advance();
    \u0275\u0275conditional((p_r6.annuncio_interesse == null ? null : p_r6.annuncio_interesse.prezzo_stimato) ? 25 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(((tmp_19_0 = p_r6.annunci_offerti == null ? null : p_r6.annunci_offerti.length) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : 0) > 1 ? 29 : 30);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(p_r6.annunci_offerti);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_21_0 = p_r6.annunci_offerti == null ? null : p_r6.annunci_offerti.length) !== null && tmp_21_0 !== void 0 ? tmp_21_0 : 0) > 1 ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r6.stato_proposta === "in_attesa" ? 34 : -1);
  }
}
function ProposteComponent_Conditional_13_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, " Nessuna proposta inviata. ");
    \u0275\u0275elementEnd();
  }
}
function ProposteComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProposteComponent_Conditional_13_For_1_Template, 35, 15, "div", 8, _forTrack0, false, ProposteComponent_Conditional_13_ForEmpty_2_Template, 2, 0, "p", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.inviate());
  }
}
var ProposteComponent = class _ProposteComponent {
  propostaService = inject(PropostaService);
  notif = inject(NotificationService);
  toast = inject(ToastService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  tabAttiva = signal("ric");
  ricevute = signal([]);
  inviate = signal([]);
  loading = signal(true);
  // map id_proposta → id_annuncio del'oggetto scelto tra i multi-offerti
  scelte = signal(/* @__PURE__ */ new Map());
  // id_proposta della proposta in fase di accettazione (per disabilitare i bottoni)
  accettando = signal(null);
  ngOnInit() {
    const tab = this.route.snapshot.queryParamMap.get("tab");
    if (tab === "inv")
      this.tabAttiva.set("inv");
    this.notif.visitaProposte();
    this.caricaTutto();
  }
  caricaTutto() {
    this.loading.set(true);
    this.scelte.set(/* @__PURE__ */ new Map());
    this.propostaService.getRicevute().subscribe({
      next: (data) => this.ricevute.set(data),
      error: () => this.toast.err("Errore", "Impossibile caricare le proposte ricevute.", "\u274C")
    });
    this.propostaService.getInviate().subscribe({
      next: (data) => {
        this.inviate.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.toast.err("Errore", "Impossibile caricare le proposte inviate.", "\u274C");
        this.loading.set(false);
      }
    });
  }
  switchTab(t) {
    this.tabAttiva.set(t);
  }
  seleziona(idProposta, idAnnuncio) {
    this.scelte.update((m) => {
      const n = new Map(m);
      n.set(idProposta, idAnnuncio);
      return n;
    });
  }
  isSelezionato(idProposta, idAnnuncio) {
    return this.scelte().get(idProposta) === idAnnuncio;
  }
  canAccetta(proposta) {
    if (this.accettando() !== null)
      return false;
    if ((proposta.annunci_offerti?.length ?? 0) <= 1)
      return true;
    return this.scelte().has(proposta.id_proposta);
  }
  accetta(proposta) {
    const offerti = proposta.annunci_offerti ?? [];
    const idScelto = offerti.length === 1 ? offerti[0].annuncio_offerto?.id_annuncio : this.scelte().get(proposta.id_proposta);
    if (!idScelto)
      return;
    this.accettando.set(proposta.id_proposta);
    this.propostaService.accetta(proposta.id_proposta, idScelto).subscribe({
      next: () => {
        this.accettando.set(null);
        this.toast.ok("Proposta accettata!", "Gli annunci sono sospesi. La chat \xE8 aperta.", "\u{1F91D}");
        this.caricaTutto();
        setTimeout(() => this.router.navigate(["/chat"]), 1200);
      },
      error: () => {
        this.accettando.set(null);
        this.toast.err("Errore", "Impossibile accettare la proposta.", "\u274C");
      }
    });
  }
  rifiuta(proposta) {
    this.propostaService.rifiuta(proposta.id_proposta).subscribe({
      next: () => {
        this.toast.info("Proposta rifiutata", "L'utente \xE8 stato notificato.", "\u2717");
        this.caricaTutto();
      },
      error: () => this.toast.err("Errore", "Impossibile rifiutare la proposta.", "\u274C")
    });
  }
  badgeClass(stato) {
    if (stato === "accettata")
      return "prop-badge pb-acc";
    if (stato === "rifiutata")
      return "prop-badge pb-ref";
    return "prop-badge pb-wait";
  }
  labelStato(stato) {
    if (stato === "accettata")
      return "Accettata";
    if (stato === "rifiutata")
      return "Rifiutata";
    return "In attesa";
  }
  initials(name) {
    return name?.substring(0, 2)?.toUpperCase() ?? "?";
  }
  static \u0275fac = function ProposteComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProposteComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProposteComponent, selectors: [["app-proposte"]], decls: 14, vars: 9, consts: [[1, "prop-wrap"], [1, "prop-hdr"], [1, "prop-t"], [1, "prop-sub"], [1, "prop-tabs"], [1, "prop-tab", 3, "click"], [1, "u-text-center", 2, "padding", "60px"], [1, "u-text-muted-sm"], [1, "prop-card"], [1, "u-text-muted-sm", "u-text-center", 2, "padding", "40px 0"], [1, "prop-card-hdr"], [1, "prop-av", "av-sage"], [1, "av-img", 3, "src"], [1, "prop-info"], [1, "swap-disp"], [1, "swap-side"], [1, "swap-side-lbl"], [1, "swap-item"], [1, "swap-item-ico"], [1, "swap-item-txt"], [1, "swap-item-n"], [1, "swap-item-u"], [1, "swap-item-price"], [1, "swap-arrow"], [1, "swap-item", 3, "swap-item-pick", "swap-item-sel"], [1, "swap-pick-hint"], [1, "prop-acts"], [1, "swap-side-count"], [1, "swap-item", 3, "click"], [1, "swap-item-radio", 3, "swap-item-radio-sel"], [1, "swap-item-radio"], [1, "btn-acc", 3, "click", "disabled"], [1, "btn-ref", 3, "click", "disabled"], [1, "prop-av", "av-amber"], [1, "swap-pick-hint", "swap-pick-hint-muted"], [1, "u-text-note-mt6"]], template: function ProposteComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "Proposte di scambio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275text(5, " Gestisci le proposte ricevute sui tuoi annunci e quelle che hai inviato. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
      \u0275\u0275listener("click", function ProposteComponent_Template_button_click_7_listener() {
        return ctx.switchTab("ric");
      });
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 5);
      \u0275\u0275listener("click", function ProposteComponent_Template_button_click_9_listener() {
        return ctx.switchTab("inv");
      });
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, ProposteComponent_Conditional_11_Template, 3, 0, "div", 6)(12, ProposteComponent_Conditional_12_Template, 3, 1)(13, ProposteComponent_Conditional_13_Template, 3, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("act", ctx.tabAttiva() === "ric");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" Ricevute (", ctx.ricevute().length, ") ");
      \u0275\u0275advance();
      \u0275\u0275classProp("act", ctx.tabAttiva() === "inv");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" Inviate (", ctx.inviate().length, ") ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && ctx.tabAttiva() === "ric" ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && ctx.tabAttiva() === "inv" ? 13 : -1);
    }
  }, dependencies: [CommonModule, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProposteComponent, { className: "ProposteComponent", filePath: "app/pages/proposte/proposte.component.ts", lineNumber: 15 });
})();
export {
  ProposteComponent
};
//# sourceMappingURL=chunk-SYSJ52YR.js.map
