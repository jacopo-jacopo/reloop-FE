import {
  SegnalazioneService
} from "./chunk-EOAE7ACB.js";
import {
  AnnuncioService
} from "./chunk-VUMWJ5MW.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3SNN5JWR.js";

// src/app/pages/admin/admin.component.ts
var _forTrack0 = ($index, $item) => $item.id_segnalazione;
function AdminComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Caricamento...");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("click", function AdminComponent_For_12_Template_div_click_0_listener() {
      const s_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.ispeziona(s_r3));
    });
    \u0275\u0275elementStart(1, "div", 14)(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const s_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selezionata", ((tmp_10_0 = ctx_r0.segnalazioneAttiva()) == null ? null : tmp_10_0.id_segnalazione) === s_r3.id_segnalazione);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Segnalazione #", s_r3.id_segnalazione, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.badgeClass(s_r3.stato_segnalazione));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r3.stato_segnalazione);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Annuncio #", s_r3.annuncio_segnalato == null ? null : s_r3.annuncio_segnalato.id_annuncio, " ");
  }
}
function AdminComponent_ForEmpty_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Nessuna segnalazione presente.");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_ForEmpty_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdminComponent_ForEmpty_13_Conditional_0_Template, 2, 0, "p", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.loading() ? 0 : -1);
  }
}
function AdminComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 17);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 18);
    \u0275\u0275text(4, " Seleziona una segnalazione per iniziare l'ispezione. ");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_Conditional_16_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 25);
    \u0275\u0275text(2, "Contesto Annuncio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27)(6, "strong");
    \u0275\u0275text(7, "Categoria:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 27)(10, "strong");
    \u0275\u0275text(11, "Condizioni:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 28)(14, "strong");
    \u0275\u0275text(15, "Valore stimato:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 29)(18, "strong");
    \u0275\u0275text(19, "Descrizione:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.annuncioAttivo().titolo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.annuncioAttivo().categoria, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.annuncioAttivo().condizioni, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u20AC", ctx_r0.annuncioAttivo().prezzo_stimato, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(' "', ctx_r0.annuncioAttivo().descrizione_annuncio, '" ');
  }
}
function AdminComponent_Conditional_16_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 30);
    \u0275\u0275text(2, "Risoluzione del ticket:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31)(4, "button", 32);
    \u0275\u0275listener("click", function AdminComponent_Conditional_16_Conditional_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.risolvi(true));
    });
    \u0275\u0275text(5, " Chiudi e Oscura Annuncio ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 33);
    \u0275\u0275listener("click", function AdminComponent_Conditional_16_Conditional_11_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.risolvi(false));
    });
    \u0275\u0275text(7, " Lascia Annuncio Attivo ");
    \u0275\u0275elementEnd()()();
  }
}
function AdminComponent_Conditional_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, " \u2713 Questa segnalazione \xE8 stata archiviata e chiusa correttamente. ");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 19)(2, "h3", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 21)(7, "strong");
    \u0275\u0275text(8, "Motivazione:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, AdminComponent_Conditional_16_Conditional_10_Template, 21, 5, "div", 22)(11, AdminComponent_Conditional_16_Conditional_11_Template, 8, 0, "div", 23)(12, AdminComponent_Conditional_16_Conditional_12_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Ispezione #", ctx_r0.segnalazioneAttiva().id_segnalazione, " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.badgeClass(ctx_r0.segnalazioneAttiva().stato_segnalazione));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.segnalazioneAttiva().stato_segnalazione, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(' "', ctx_r0.segnalazioneAttiva().motivazione, '" ');
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.annuncioAttivo() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.segnalazioneAttiva().stato_segnalazione !== "chiusa" ? 11 : 12);
  }
}
function AdminComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function AdminComponent_Conditional_17_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event.target === $event.currentTarget && ctx_r0.chiudiConfermaLogout());
    });
    \u0275\u0275elementStart(1, "div", 35)(2, "div", 36);
    \u0275\u0275text(3, "Esci da reloop");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 37);
    \u0275\u0275text(5, "Sei sicuro di voler uscire dal tuo account?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 38)(7, "button", 39);
    \u0275\u0275listener("click", function AdminComponent_Conditional_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.chiudiConfermaLogout());
    });
    \u0275\u0275text(8, "No, torna indietro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 32);
    \u0275\u0275listener("click", function AdminComponent_Conditional_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.logout());
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
    const idAnnuncio = s.annuncio_segnalato?.id_annuncio;
    if (idAnnuncio) {
      this.annuncioService.getById(idAnnuncio).subscribe({
        next: (ann) => this.annuncioAttivo.set(ann),
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
  static \u0275fac = function AdminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], decls: 18, vars: 6, consts: [[1, "admin-page-container", 2, "display", "block"], [1, "admin-header"], [1, "admin-title"], [1, "btn-nav", 3, "click"], [1, "admin-main-layout"], [1, "prof-ann-card", "admin-column-card"], [1, "prof-ann-t", "admin-list-title"], [1, "admin-login-note"], [1, "admin-item-card", 3, "selezionata"], ["id", "adminPannelloIspezione", 1, "prof-ann-card", "admin-column-card"], [1, "admin-empty-state"], [1, "admin-inspection-content", 2, "display", "block"], [1, "modal-bg", "open"], [1, "admin-item-card", 3, "click"], [1, "admin-card-header"], [1, "admin-card-id"], [1, "admin-card-title"], [1, "admin-empty-icon"], [1, "admin-empty-text"], [1, "inspection-detail-header"], [1, "inspection-detail-title"], [1, "inspection-detail-row"], [1, "preview-annuncio-box"], [1, "admin-actions-section"], [1, "admin-archived-notice"], [1, "preview-box-label"], [1, "preview-box-title"], [1, "u-text-xs-muted", "admin-preview-row"], [1, "u-text-xs-muted", "admin-preview-row-last"], [1, "u-text-xs-muted", "admin-preview-desc"], [1, "admin-actions-label"], [1, "admin-actions-buttons"], [1, "btn-confirm", "btn-admin-danger", 3, "click"], [1, "btn-cancel2", "btn-admin-flex", 3, "click"], [1, "modal-bg", "open", 3, "click"], [1, "modal", "u-mw520"], [1, "modal-h"], [1, "modal-p"], [1, "modal-acts"], [1, "btn-cancel2", 3, "click"]], template: function AdminComponent_Template(rf, ctx) {
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
      \u0275\u0275template(10, AdminComponent_Conditional_10_Template, 2, 0, "p", 7);
      \u0275\u0275repeaterCreate(11, AdminComponent_For_12_Template, 8, 7, "div", 8, _forTrack0, false, AdminComponent_ForEmpty_13_Template, 1, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9);
      \u0275\u0275template(15, AdminComponent_Conditional_15_Template, 5, 0, "div", 10)(16, AdminComponent_Conditional_16_Template, 13, 7, "div", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(17, AdminComponent_Conditional_17_Template, 11, 0, "div", 12);
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.loading() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.segnalazioni());
      \u0275\u0275advance(3);
      \u0275\u0275classProp("admin-inspection-panel", !ctx.segnalazioneAttiva());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.segnalazioneAttiva() ? 15 : 16);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.confermaLogoutAperta() ? 17 : -1);
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "app/pages/admin/admin.component.ts", lineNumber: 15 });
})();
export {
  AdminComponent
};
//# sourceMappingURL=chunk-2H4J3FXZ.js.map
