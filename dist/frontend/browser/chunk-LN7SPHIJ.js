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
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function AdminComponent_For_12_Template_div_click_0_listener() {
      const s_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.ispeziona(s_r3));
    });
    \u0275\u0275elementStart(1, "div", 13)(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 15);
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
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 16);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4, " Seleziona una segnalazione per iniziare l'ispezione. ");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_Conditional_16_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 24);
    \u0275\u0275text(2, "Contesto Annuncio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26)(6, "strong");
    \u0275\u0275text(7, "Categoria:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 26)(10, "strong");
    \u0275\u0275text(11, "Condizioni:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 27)(14, "strong");
    \u0275\u0275text(15, "Valore stimato:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 28)(18, "strong");
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
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 29);
    \u0275\u0275text(2, "Risoluzione del ticket:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "button", 31);
    \u0275\u0275listener("click", function AdminComponent_Conditional_16_Conditional_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.risolvi(true));
    });
    \u0275\u0275text(5, " \u274C Chiudi e Oscura Annuncio ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 32);
    \u0275\u0275listener("click", function AdminComponent_Conditional_16_Conditional_11_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.risolvi(false));
    });
    \u0275\u0275text(7, " \u{1F7E2} Lascia Annuncio Attivo ");
    \u0275\u0275elementEnd()()();
  }
}
function AdminComponent_Conditional_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, " \u2713 Questa segnalazione \xE8 stata archiviata e chiusa correttamente. ");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 18)(2, "h3", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 20)(7, "strong");
    \u0275\u0275text(8, "Motivazione:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, AdminComponent_Conditional_16_Conditional_10_Template, 21, 5, "div", 21)(11, AdminComponent_Conditional_16_Conditional_11_Template, 8, 0, "div", 22)(12, AdminComponent_Conditional_16_Conditional_12_Template, 2, 0, "div", 23);
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
  logout() {
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], decls: 17, vars: 5, consts: [[1, "admin-page-container", 2, "display", "block"], [1, "admin-header"], [1, "admin-title"], [1, "btn-admin-logout", 3, "click"], [1, "admin-main-layout"], [1, "prof-ann-card", "admin-column-card"], [1, "prof-ann-t", "admin-list-title"], [1, "admin-login-note"], [1, "admin-item-card", 3, "selezionata"], ["id", "adminPannelloIspezione", 1, "prof-ann-card", "admin-column-card"], [1, "admin-empty-state"], [1, "admin-inspection-content", 2, "display", "block"], [1, "admin-item-card", 3, "click"], [1, "admin-card-header"], [1, "admin-card-id"], [1, "admin-card-title"], [1, "admin-empty-icon"], [1, "admin-empty-text"], [1, "inspection-detail-header"], [1, "inspection-detail-title"], [1, "inspection-detail-row"], [1, "preview-annuncio-box"], [1, "admin-actions-section"], [1, "admin-archived-notice"], [1, "preview-box-label"], [1, "preview-box-title"], [1, "u-text-xs-muted", "admin-preview-row"], [1, "u-text-xs-muted", "admin-preview-row-last"], [1, "u-text-xs-muted", "admin-preview-desc"], [1, "admin-actions-label"], [1, "admin-actions-buttons"], [1, "btn-confirm", "btn-admin-danger", 3, "click"], [1, "btn-cancel2", "btn-admin-flex", 3, "click"]], template: function AdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "\u{1F6E1}\uFE0F Centro Moderazione Reloop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function AdminComponent_Template_button_click_4_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(5, "Logout \u{1F6AA}");
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
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "app/pages/admin/admin.component.ts", lineNumber: 15 });
})();
export {
  AdminComponent
};
//# sourceMappingURL=chunk-LN7SPHIJ.js.map
