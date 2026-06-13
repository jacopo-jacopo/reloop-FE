import {
  OverlayService
} from "./chunk-LAONVNUN.js";
import {
  AnnuncioService
} from "./chunk-VUMWJ5MW.js";
import {
  CommonModule,
  ToastService,
  __spreadProps,
  __spreadValues,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-3SNN5JWR.js";

// src/app/pages/annunci/annunci.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id_annuncio;
function AnnunciComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function AnnunciComponent_For_5_Template_button_click_0_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filtra(cat_r2.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("act", ctx_r2.categoriaAttiva() === cat_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r2.label, " ");
  }
}
function AnnunciComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p", 8);
    \u0275\u0275text(2, "Caricamento annunci...");
    \u0275\u0275elementEnd()();
  }
}
function AnnunciComponent_Conditional_8_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
  }
  if (rf & 2) {
    const ann_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", ann_r5.foto_preview, \u0275\u0275sanitizeUrl);
  }
}
function AnnunciComponent_Conditional_8_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " \u{1F4E6} ");
  }
  if (rf & 2) {
    const ann_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ann_r5.categoria);
  }
}
function AnnunciComponent_Conditional_8_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20);
  }
  if (rf & 2) {
    const ann_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", ann_r5.pubblicante.foto_profilo, \u0275\u0275sanitizeUrl);
  }
}
function AnnunciComponent_Conditional_8_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_12_0;
    const ann_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", ann_r5.pubblicante == null ? null : ann_r5.pubblicante.nome_completo == null ? null : (tmp_12_0 = ann_r5.pubblicante.nome_completo.substring(0, 2)) == null ? null : tmp_12_0.toUpperCase(), " ");
  }
}
function AnnunciComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275listener("click", function AnnunciComponent_Conditional_8_For_2_Template_div_click_0_listener() {
      const ann_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.apriDettaglio(ann_r5));
    });
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275template(2, AnnunciComponent_Conditional_8_For_2_Conditional_2_Template, 1, 1, "img", 13)(3, AnnunciComponent_Conditional_8_For_2_Conditional_3_Template, 3, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "div", 18)(11, "div", 19);
    \u0275\u0275template(12, AnnunciComponent_Conditional_8_For_2_Conditional_12_Template, 1, 1, "img", 20)(13, AnnunciComponent_Conditional_8_For_2_Conditional_13_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 21);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 22);
    \u0275\u0275listener("click", function AnnunciComponent_Conditional_8_For_2_Template_button_click_18_listener($event) {
      const ann_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.apriDettaglio(ann_r5));
    });
    \u0275\u0275text(19, " \u{1F91D} Proponi scambio ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ann_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("ann-bg-bici", !ann_r5.foto_preview);
    \u0275\u0275advance();
    \u0275\u0275conditional(ann_r5.foto_preview ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ann_r5.titolo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" \u{1F4CD} ", ann_r5.pubblicante == null ? null : ann_r5.pubblicante.quartiere == null ? null : ann_r5.pubblicante.quartiere.nome_quartiere, " \xB7 ~\u20AC", ann_r5.prezzo_stimato, " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ann_r5.pubblicante == null ? null : ann_r5.pubblicante.foto_profilo) ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ann_r5.pubblicante == null ? null : ann_r5.pubblicante.nome_completo);
    \u0275\u0275advance();
    \u0275\u0275classProp("sp-active", ann_r5.stato_annuncio === "attivo")("sp-busy", ann_r5.stato_annuncio === "sospeso");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ann_r5.stato_annuncio, " ");
  }
}
function AnnunciComponent_Conditional_8_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p", 8);
    \u0275\u0275text(2, "Nessun annuncio trovato.");
    \u0275\u0275elementEnd()();
  }
}
function AnnunciComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, AnnunciComponent_Conditional_8_For_2_Template, 20, 13, "div", 9, _forTrack1, false, AnnunciComponent_Conditional_8_ForEmpty_3_Template, 3, 0, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.annunciFiltrati());
  }
}
var AnnunciComponent = class _AnnunciComponent {
  annuncioService = inject(AnnuncioService);
  overlayService = inject(OverlayService);
  toast = inject(ToastService);
  annunci = signal([]);
  annunciFiltrati = signal([]);
  loading = signal(true);
  categoriaAttiva = signal("tutti");
  searchQuery = signal("");
  categorie = [
    { label: "Tutti", value: "tutti" },
    { label: "\u{1F6B2} Trasporti", value: "trasporti" },
    { label: "\u{1F3E0} Arredamento", value: "arredamento" },
    { label: "\u{1F4DA} Libri", value: "libri" },
    { label: "\u26BD Sport", value: "sport" },
    { label: "\u{1F4BB} Elettronica", value: "elettronica" },
    { label: "\u{1F373} Casa & Cucina", value: "casa" },
    { label: "\u{1F3B8} Musica", value: "musica" }
  ];
  ngOnInit() {
    this.annuncioService.getAnnunciQuartiere().subscribe({
      next: (data) => {
        const annunci = data.map((a) => __spreadProps(__spreadValues({}, a), { foto_preview: null }));
        this.annunci.set(annunci);
        this.annunciFiltrati.set(annunci);
        this.loading.set(false);
        annunci.forEach((ann) => {
          this.annuncioService.getFoto(ann.id_annuncio).subscribe({
            next: (foto) => {
              if (foto.length > 0) {
                this.annunci.update((list) => list.map((a) => a.id_annuncio === ann.id_annuncio ? __spreadProps(__spreadValues({}, a), { foto_preview: foto[0] }) : a));
                this.annunciFiltrati.update((list) => list.map((a) => a.id_annuncio === ann.id_annuncio ? __spreadProps(__spreadValues({}, a), { foto_preview: foto[0] }) : a));
              }
            },
            error: () => {
            }
          });
        });
      },
      error: () => {
        this.toast.err("Errore", "Impossibile caricare gli annunci.", "\u274C");
        this.loading.set(false);
      }
    });
  }
  filtra(categoria) {
    this.categoriaAttiva.set(categoria);
    this._appliFiltri();
  }
  cerca(q) {
    this.searchQuery.set(q);
    this._appliFiltri();
  }
  _appliFiltri() {
    let r = this.annunci();
    if (this.categoriaAttiva() !== "tutti") {
      r = r.filter((a) => a.categoria.toLowerCase().includes(this.categoriaAttiva()));
    }
    if (this.searchQuery()) {
      r = r.filter((a) => a.titolo.toLowerCase().includes(this.searchQuery().toLowerCase()));
    }
    this.annunciFiltrati.set(r);
  }
  apriDettaglio(ann) {
    this.overlayService.apriAnnuncio(ann);
  }
  static \u0275fac = function AnnunciComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnnunciComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnnunciComponent, selectors: [["app-annunci"]], decls: 9, vars: 1, consts: [[1, "ann-page-hdr"], [1, "ann-page-t"], [1, "filter-row"], [1, "fchip", 3, "act"], ["placeholder", "\u{1F50D} Cerca...", 1, "search-i", 3, "input"], [1, "u-text-center", 2, "padding", "60px"], [1, "ann-grid-full"], [1, "fchip", 3, "click"], [1, "u-text-muted-sm"], [1, "ann-card", "ann-card-clickable"], [1, "u-text-center", 2, "grid-column", "1/-1", "padding", "60px"], [1, "ann-card", "ann-card-clickable", 3, "click"], [1, "ann-img"], [2, "width", "100%", "height", "100%", "object-fit", "cover", 3, "src"], [1, "ann-body"], [1, "ann-title"], [1, "ann-loc"], [1, "ann-footer"], [1, "ann-user"], [1, "av", "av-lime"], [1, "av-img", 3, "src"], [1, "status-pill"], [1, "ann-card-prop", 3, "click"], [1, "ann-cat-chip"]], template: function AnnunciComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Annunci nel tuo quartiere");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275repeaterCreate(4, AnnunciComponent_For_5_Template, 2, 3, "button", 3, _forTrack0);
      \u0275\u0275elementStart(6, "input", 4);
      \u0275\u0275listener("input", function AnnunciComponent_Template_input_input_6_listener($event) {
        return ctx.cerca($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(7, AnnunciComponent_Conditional_7_Template, 3, 0, "div", 5)(8, AnnunciComponent_Conditional_8_Template, 4, 1, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.categorie);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 7 : 8);
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnnunciComponent, { className: "AnnunciComponent", filePath: "app/pages/annunci/annunci.component.ts", lineNumber: 14 });
})();
export {
  AnnunciComponent
};
//# sourceMappingURL=chunk-236WTU4P.js.map
