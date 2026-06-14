import {
  SegnalazioneService
} from "./chunk-DP4R4AS2.js";
import {
  AnnuncioService
} from "./chunk-Y4UJ2NKZ.js";
import {
  AuthService,
  CommonModule,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-3V7QK2LV.js";

// src/app/pages/admin/admin.component.ts
var _forTrack0 = ($index, $item) => $item.id_segnalazione;
function AdminComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Caricamento...");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Nessuna segnalazione presente.");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_Conditional_11_Conditional_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function AdminComponent_Conditional_11_Conditional_1_For_3_Template_div_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.ispeziona(s_r2));
    });
    \u0275\u0275elementStart(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selezionata", ((tmp_12_0 = ctx_r2.segnalazioneAttiva()) == null ? null : tmp_12_0.id_segnalazione) === s_r2.id_segnalazione);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Segnalazione #", s_r2.id_segnalazione, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.badgeClass(s_r2.stato_segnalazione));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.testoStato(s_r2.stato_segnalazione));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Annuncio #", s_r2.annuncio_segnalato == null ? null : s_r2.annuncio_segnalato.id_annuncio, " ");
  }
}
function AdminComponent_Conditional_11_Conditional_1_ForEmpty_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Nessuna segnalazione in attesa.");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_Conditional_11_Conditional_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function AdminComponent_Conditional_11_Conditional_1_For_8_Template_div_click_0_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.ispeziona(s_r5));
    });
    \u0275\u0275elementStart(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const s_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selezionata", ((tmp_12_0 = ctx_r2.segnalazioneAttiva()) == null ? null : tmp_12_0.id_segnalazione) === s_r5.id_segnalazione);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Segnalazione #", s_r5.id_segnalazione, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.badgeClass(s_r5.stato_segnalazione));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.testoStato(s_r5.stato_segnalazione));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Annuncio #", s_r5.annuncio_segnalato == null ? null : s_r5.annuncio_segnalato.id_annuncio, " ");
  }
}
function AdminComponent_Conditional_11_Conditional_1_ForEmpty_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Nessuna segnalazione gestita da te.");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_Conditional_11_Conditional_1_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function AdminComponent_Conditional_11_Conditional_1_For_13_Template_div_click_0_listener() {
      const s_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.ispeziona(s_r7));
    });
    \u0275\u0275elementStart(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const s_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selezionata", ((tmp_12_0 = ctx_r2.segnalazioneAttiva()) == null ? null : tmp_12_0.id_segnalazione) === s_r7.id_segnalazione);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Segnalazione #", s_r7.id_segnalazione, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.badgeClass(s_r7.stato_segnalazione));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.testoStato(s_r7.stato_segnalazione));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Annuncio #", s_r7.annuncio_segnalato == null ? null : s_r7.annuncio_segnalato.id_annuncio, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Gestita da: ", s_r7.amministratore == null ? null : s_r7.amministratore.nome_completo, " (ID #", s_r7.amministratore == null ? null : s_r7.amministratore.id_utente_adm, ") ");
  }
}
function AdminComponent_Conditional_11_Conditional_1_ForEmpty_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Nessuna segnalazione gestita da altri admin.");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "In attesa");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, AdminComponent_Conditional_11_Conditional_1_For_3_Template, 8, 7, "div", 13, _forTrack0, false, AdminComponent_Conditional_11_Conditional_1_ForEmpty_4_Template, 2, 0, "p", 7);
    \u0275\u0275elementStart(5, "div", 12);
    \u0275\u0275text(6, "Gestite da me");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, AdminComponent_Conditional_11_Conditional_1_For_8_Template, 8, 7, "div", 13, _forTrack0, false, AdminComponent_Conditional_11_Conditional_1_ForEmpty_9_Template, 2, 0, "p", 7);
    \u0275\u0275elementStart(10, "div", 12);
    \u0275\u0275text(11, "Gestite da altri admin");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(12, AdminComponent_Conditional_11_Conditional_1_For_13_Template, 10, 9, "div", 13, _forTrack0, false, AdminComponent_Conditional_11_Conditional_1_ForEmpty_14_Template, 2, 0, "p", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.segnalazioniInAttesa());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.segnalazioniMie());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.segnalazioniAltri());
  }
}
function AdminComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdminComponent_Conditional_11_Conditional_0_Template, 2, 0, "p", 7)(1, AdminComponent_Conditional_11_Conditional_1_Template, 15, 3);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.segnalazioni().length === 0 ? 0 : 1);
  }
}
function AdminComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 19);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4, " Seleziona una segnalazione per iniziare l'ispezione. ");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_Conditional_14_Conditional_10_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 33);
  }
  if (rf & 2) {
    const f_r8 = ctx.$implicit;
    \u0275\u0275property("src", f_r8, \u0275\u0275sanitizeUrl);
  }
}
function AdminComponent_Conditional_14_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, AdminComponent_Conditional_14_Conditional_10_Conditional_5_For_2_Template, 1, 1, "img", 33, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.fotoAnnuncio());
  }
}
function AdminComponent_Conditional_14_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 27);
    \u0275\u0275text(2, "Contesto Annuncio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminComponent_Conditional_14_Conditional_10_Conditional_5_Template, 3, 0, "div", 29);
    \u0275\u0275elementStart(6, "div", 30)(7, "strong");
    \u0275\u0275text(8, "Categoria:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 30)(11, "strong");
    \u0275\u0275text(12, "Condizioni:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 30)(15, "strong");
    \u0275\u0275text(16, "Valore stimato:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 31)(19, "strong");
    \u0275\u0275text(20, "Pubblicato da:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 32)(23, "strong");
    \u0275\u0275text(24, "Descrizione:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.annuncioAttivo().titolo);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.fotoAnnuncio().length > 0 ? 5 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.annuncioAttivo().categoria, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.annuncioAttivo().condizioni, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u20AC", ctx_r2.annuncioAttivo().prezzo_stimato, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", (tmp_7_0 = ctx_r2.annuncioAttivo().pubblicante) == null ? null : tmp_7_0.nome_completo, " (ID #", (tmp_7_0 = ctx_r2.annuncioAttivo().pubblicante) == null ? null : tmp_7_0.id_utente_reg, ") ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(' "', ctx_r2.annuncioAttivo().descrizione_annuncio, '" ');
  }
}
function AdminComponent_Conditional_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, " \u2713 Questa segnalazione \xE8 stata archiviata e chiusa correttamente. ");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_Conditional_14_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 34);
    \u0275\u0275text(2, "Risoluzione del ticket:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "button", 36);
    \u0275\u0275listener("click", function AdminComponent_Conditional_14_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.risolvi(true));
    });
    \u0275\u0275text(5, " Chiudi e Oscura Annuncio ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 37);
    \u0275\u0275listener("click", function AdminComponent_Conditional_14_Conditional_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.risolvi(false));
    });
    \u0275\u0275text(7, " Lascia Annuncio Attivo ");
    \u0275\u0275elementEnd()()();
  }
}
function AdminComponent_Conditional_14_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u{1F4C2} Presa in carico da ", (tmp_2_0 = ctx_r2.segnalazioneAttiva().amministratore) == null ? null : tmp_2_0.nome_completo, " (ID #", (tmp_2_0 = ctx_r2.segnalazioneAttiva().amministratore) == null ? null : tmp_2_0.id_utente_adm, "). ");
  }
}
function AdminComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 21)(2, "h3", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 23)(7, "strong");
    \u0275\u0275text(8, "Motivazione:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, AdminComponent_Conditional_14_Conditional_10_Template, 26, 8, "div", 24)(11, AdminComponent_Conditional_14_Conditional_11_Template, 2, 0, "div", 25)(12, AdminComponent_Conditional_14_Conditional_12_Template, 8, 0, "div", 26)(13, AdminComponent_Conditional_14_Conditional_13_Template, 2, 2, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Ispezione #", ctx_r2.segnalazioneAttiva().id_segnalazione, " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.badgeClass(ctx_r2.segnalazioneAttiva().stato_segnalazione));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.testoStato(ctx_r2.segnalazioneAttiva().stato_segnalazione), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(' "', ctx_r2.segnalazioneAttiva().motivazione, '" ');
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.annuncioAttivo() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.segnalazioneAttiva().stato_segnalazione === "chiusa" ? 11 : ctx_r2.puoAgire(ctx_r2.segnalazioneAttiva()) ? 12 : 13);
  }
}
function AdminComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function AdminComponent_Conditional_15_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event.target === $event.currentTarget && ctx_r2.chiudiConfermaLogout());
    });
    \u0275\u0275elementStart(1, "div", 39)(2, "div", 40);
    \u0275\u0275text(3, "Esci da reloop");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 41);
    \u0275\u0275text(5, "Sei sicuro di voler uscire dal tuo account?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 42)(7, "button", 43);
    \u0275\u0275listener("click", function AdminComponent_Conditional_15_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.chiudiConfermaLogout());
    });
    \u0275\u0275text(8, "No, torna indietro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 36);
    \u0275\u0275listener("click", function AdminComponent_Conditional_15_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275text(10, "S\xEC, esci");
    \u0275\u0275elementEnd()()()();
  }
}
var AdminComponent = class _AdminComponent {
  segnalazioneService = inject(SegnalazioneService);
  annuncioService = inject(AnnuncioService);
  toast = inject(ToastService);
  auth = inject(AuthService);
  segnalazioni = signal([]);
  segnalazioneAttiva = signal(null);
  annuncioAttivo = signal(null);
  fotoAnnuncio = signal([]);
  loading = signal(true);
  ngOnInit() {
    this.caricaSegnalazioni();
  }
  caricaSegnalazioni() {
    this.segnalazioneService.getTutte().subscribe({
      next: (data) => {
        this.segnalazioni.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.toast.err("Errore", "Impossibile caricare le segnalazioni.", "\u274C");
        this.loading.set(false);
      }
    });
  }
  ispeziona(s) {
    this.segnalazioneAttiva.set(s);
    this.fotoAnnuncio.set([]);
    const idAnnuncio = s.annuncio_segnalato?.id_annuncio;
    if (idAnnuncio) {
      this.annuncioService.getById(idAnnuncio).subscribe({
        next: (ann) => this.annuncioAttivo.set(ann),
        error: () => {
        }
      });
      this.annuncioService.getFoto(idAnnuncio).subscribe({
        next: (f) => this.fotoAnnuncio.set(f),
        error: () => {
        }
      });
    }
    if (s.stato_segnalazione === "in_attesa") {
      this.segnalazioneService.prendiInCarico(s.id_segnalazione).subscribe({
        next: (aggiornata) => {
          this.segnalazioni.update((list) => list.map((x) => x.id_segnalazione === aggiornata.id_segnalazione ? aggiornata : x));
          this.segnalazioneAttiva.set(aggiornata);
          this.toast.ok("Presa in carico", `Segnalazione #${s.id_segnalazione} assegnata a te.`, "\u{1F4C2}");
        },
        error: () => {
        }
      });
    }
  }
  risolvi(oscura) {
    const s = this.segnalazioneAttiva();
    if (!s)
      return;
    this.segnalazioneService.chiudi(s.id_segnalazione, oscura).subscribe({
      next: (aggiornata) => {
        this.segnalazioni.update((list) => list.map((x) => x.id_segnalazione === aggiornata.id_segnalazione ? aggiornata : x));
        this.segnalazioneAttiva.set(aggiornata);
        this.annuncioAttivo.set(aggiornata?.annuncio_segnalato || null);
        if (oscura)
          this.toast.err("Annuncio rimosso", "L'annuncio \xE8 stato oscurato.", "\u{1F5D1}\uFE0F");
        else
          this.toast.ok("Segnalazione respinta", "Annuncio conforme.", "\u{1F7E2}");
      },
      error: () => this.toast.err("Errore", "Impossibile risolvere.", "\u274C")
    });
  }
  confermaLogoutAperta = signal(false);
  apriConfermaLogout() {
    this.confermaLogoutAperta.set(true);
  }
  chiudiConfermaLogout() {
    this.confermaLogoutAperta.set(false);
  }
  logout() {
    this.confermaLogoutAperta.set(false);
    this.auth.logout();
  }
  badgeClass(stato) {
    if (stato === "presa_in_carico")
      return "badge-stato badge-carico";
    if (stato === "chiusa")
      return "badge-stato badge-chiusa";
    return "badge-stato badge-attesa";
  }
  testoStato(stato) {
    return (stato || "").replace(/_/g, " ");
  }
  /** ID dell'admin attualmente loggato. */
  idAdminCorrente() {
    return this.auth.utenteCorrente()?.id_utente_adm ?? null;
  }
  /** Segnalazioni ancora da prendere in carico. */
  segnalazioniInAttesa() {
    return this.segnalazioni().filter((s) => s.stato_segnalazione === "in_attesa");
  }
  /** Segnalazioni prese in carico o chiuse dall'admin attualmente loggato. */
  segnalazioniMie() {
    const id = this.idAdminCorrente();
    return this.segnalazioni().filter((s) => s.stato_segnalazione !== "in_attesa" && s.amministratore?.id_utente_adm === id);
  }
  /** Segnalazioni prese in carico o chiuse da altri amministratori. */
  segnalazioniAltri() {
    const id = this.idAdminCorrente();
    return this.segnalazioni().filter((s) => s.stato_segnalazione !== "in_attesa" && s.amministratore?.id_utente_adm !== id);
  }
  /** Indica se l'admin loggato può agire su questa segnalazione (è sua o non ancora presa in carico). */
  puoAgire(s) {
    if (!s)
      return false;
    if (s.stato_segnalazione === "chiusa")
      return false;
    if (s.stato_segnalazione === "presa_in_carico") {
      return s.amministratore?.id_utente_adm === this.idAdminCorrente();
    }
    return true;
  }
  static \u0275fac = function AdminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], decls: 16, vars: 6, consts: [[1, "admin-page-container", 2, "display", "block"], [1, "admin-header"], [1, "admin-title"], [1, "btn-nav", 3, "click"], [1, "admin-main-layout"], [1, "prof-ann-card", "admin-column-card"], [1, "prof-ann-t", "admin-list-title"], [1, "admin-login-note"], ["id", "adminPannelloIspezione", 1, "prof-ann-card", "admin-column-card"], [1, "admin-empty-state"], [1, "admin-inspection-content", 2, "display", "block"], [1, "modal-bg", "open"], [1, "admin-section-title"], [1, "admin-item-card", 3, "selezionata"], [1, "admin-item-card", 3, "click"], [1, "admin-card-header"], [1, "admin-card-id"], [1, "admin-card-title"], [1, "admin-card-admin"], [1, "admin-empty-icon"], [1, "admin-empty-text"], [1, "inspection-detail-header"], [1, "inspection-detail-title"], [1, "inspection-detail-row"], [1, "preview-annuncio-box"], [1, "admin-archived-notice"], [1, "admin-actions-section"], [1, "preview-box-label"], [1, "preview-box-title"], [1, "admin-preview-foto-row"], [1, "u-text-xs-muted", "admin-preview-row"], [1, "u-text-xs-muted", "admin-preview-row-last"], [1, "u-text-xs-muted", "admin-preview-desc"], [1, "admin-preview-foto", 3, "src"], [1, "admin-actions-label"], [1, "admin-actions-buttons"], [1, "btn-confirm", "btn-admin-danger", 3, "click"], [1, "btn-cancel2", "btn-admin-flex", 3, "click"], [1, "modal-bg", "open", 3, "click"], [1, "modal", "u-mw520"], [1, "modal-h"], [1, "modal-p"], [1, "modal-acts"], [1, "btn-cancel2", 3, "click"]], template: function AdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "\u{1F6E1}\uFE0F Centro Moderazione Reloop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function AdminComponent_Template_button_click_4_listener() {
        return ctx.apriConfermaLogout();
      });
      \u0275\u0275text(5, "Esci");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
      \u0275\u0275text(9, "\u{1F4CB} Segnalazioni Globali");
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, AdminComponent_Conditional_10_Template, 2, 0, "p", 7)(11, AdminComponent_Conditional_11_Template, 2, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275template(13, AdminComponent_Conditional_13_Template, 5, 0, "div", 9)(14, AdminComponent_Conditional_14_Template, 14, 7, "div", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(15, AdminComponent_Conditional_15_Template, 11, 0, "div", 11);
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.loading() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("admin-inspection-panel", !ctx.segnalazioneAttiva());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.segnalazioneAttiva() ? 13 : 14);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.confermaLogoutAperta() ? 15 : -1);
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "app/pages/admin/admin.component.ts", lineNumber: 15 });
})();
export {
  AdminComponent
};
//# sourceMappingURL=chunk-B2MSPCFD.js.map
