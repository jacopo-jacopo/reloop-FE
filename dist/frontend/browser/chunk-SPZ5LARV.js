import {
  OverlayService
} from "./chunk-EEAG4X3M.js";
import {
  AnnuncioService
} from "./chunk-VUMWJ5MW.js";
import {
  CommonModule,
  DecimalPipe,
  Router,
  RouterModule,
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
  ɵɵpipe,
  ɵɵpipeBind1,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-3SNN5JWR.js";

// src/app/pages/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.id_annuncio;
function HomeComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, "Caricamento...");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_43_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 39);
  }
  if (rf & 2) {
    const ann_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", ann_r2.foto_preview, \u0275\u0275sanitizeUrl);
  }
}
function HomeComponent_Conditional_43_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " \u{1F4E6} ");
  }
  if (rf & 2) {
    const ann_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ann_r2.categoria);
  }
}
function HomeComponent_Conditional_43_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 46);
  }
  if (rf & 2) {
    const ann_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", ann_r2.pubblicante.foto_profilo, \u0275\u0275sanitizeUrl);
  }
}
function HomeComponent_Conditional_43_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_12_0;
    const ann_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", ann_r2.pubblicante == null ? null : ann_r2.pubblicante.nome_completo == null ? null : (tmp_12_0 = ann_r2.pubblicante.nome_completo.substring(0, 2)) == null ? null : tmp_12_0.toUpperCase(), " ");
  }
}
function HomeComponent_Conditional_43_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function HomeComponent_Conditional_43_For_2_Template_div_click_0_listener() {
      const ann_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.apriDettaglio(ann_r2));
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275template(2, HomeComponent_Conditional_43_For_2_Conditional_2_Template, 1, 1, "img", 39)(3, HomeComponent_Conditional_43_For_2_Conditional_3_Template, 3, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40)(5, "div", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 43)(10, "div", 44)(11, "div", 45);
    \u0275\u0275template(12, HomeComponent_Conditional_43_For_2_Conditional_12_Template, 1, 1, "img", 46)(13, HomeComponent_Conditional_43_For_2_Conditional_13_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 47);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ann_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("ann-bg-bici", !ann_r2.foto_preview);
    \u0275\u0275advance();
    \u0275\u0275conditional(ann_r2.foto_preview ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ann_r2.titolo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" \u{1F4CD} ", ann_r2.pubblicante == null ? null : ann_r2.pubblicante.quartiere == null ? null : ann_r2.pubblicante.quartiere.nome_quartiere, " \xB7 ~\u20AC", ann_r2.prezzo_stimato, " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ann_r2.pubblicante == null ? null : ann_r2.pubblicante.foto_profilo) ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ann_r2.pubblicante == null ? null : ann_r2.pubblicante.nome_completo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ann_r2.stato_annuncio);
  }
}
function HomeComponent_Conditional_43_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, "Nessun annuncio disponibile nel tuo quartiere.");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_43_For_2_Template, 18, 9, "div", 36, _forTrack0, false, HomeComponent_Conditional_43_ForEmpty_3_Template, 2, 0, "p", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.annunciRecenti());
  }
}
var HomeComponent = class _HomeComponent {
  annuncioService = inject(AnnuncioService);
  overlayService = inject(OverlayService);
  toast = inject(ToastService);
  router = inject(Router);
  annunciRecenti = signal([]);
  co2Quartiere = signal(0);
  loading = signal(true);
  ngOnInit() {
    this.annuncioService.getAnnunciRecenti().subscribe({
      next: (data) => {
        const annunci = data.map((a) => __spreadProps(__spreadValues({}, a), { foto_preview: null }));
        this.annunciRecenti.set(annunci);
        this.loading.set(false);
        annunci.forEach((ann) => {
          this.annuncioService.getFoto(ann.id_annuncio).subscribe({
            next: (foto) => {
              if (foto.length > 0) {
                this.annunciRecenti.update((list) => list.map((a) => a.id_annuncio === ann.id_annuncio ? __spreadProps(__spreadValues({}, a), { foto_preview: foto[0] }) : a));
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
    this.annuncioService.getCo2Quartiere().subscribe({
      next: (co2) => this.co2Quartiere.set(co2),
      error: () => {
      }
    });
  }
  apriDettaglio(ann) {
    this.overlayService.apriAnnuncio(ann);
  }
  vai(route) {
    this.router.navigate([route]);
  }
  get alberiEquivalenti() {
    return Math.round(this.co2Quartiere() / 21);
  }
  get kmAuto() {
    return Math.round(this.co2Quartiere() / 0.242);
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 75, vars: 9, consts: [[1, "home-hero"], [1, "hero-h"], [1, "hero-sub"], [1, "hero-btns"], [1, "btn-primary", 3, "click"], [1, "btn-outline", 3, "click"], [1, "map-box"], [1, "map-grid-bg"], [1, "map-road", "map-road-h1"], [1, "map-road", "map-road-v1"], [1, "map-road", "map-road-h2"], [1, "map-pin", "pin-l", "map-pin-bici", 3, "click"], [1, "map-pin", "pin-s", "map-pin-manga", 3, "click"], [1, "map-pin", "pin-m", "map-pin-chitarra", 3, "click"], [1, "map-pin", "pin-t", "map-pin-poltrona", 3, "click"], [1, "map-pin", "pin-l", "map-pin-pentole", 3, "click"], [1, "map-chip", "map-chip-sanfermo"], [1, "map-chip", "map-chip-garibaldi"], [1, "map-lbl"], [1, "sec"], [1, "sec-hdr"], [1, "sec-t"], [1, "sec-link", 3, "click"], [1, "u-text-muted-sm"], [1, "ann-grid"], [1, "sec", "u-pt0"], [1, "co2-box", 3, "click"], [1, "co2-label"], [1, "co2-val"], [1, "co2-unit"], [1, "co2-note"], [1, "co2-equiv"], [1, "co2-eq-item"], [1, "co2-eq-icon"], [1, "co2-eq-n"], [1, "co2-eq-l"], [1, "ann-card", "ann-card-clickable"], [1, "ann-card", "ann-card-clickable", 3, "click"], [1, "ann-img"], [2, "width", "100%", "height", "100%", "object-fit", "cover", 3, "src"], [1, "ann-body"], [1, "ann-title"], [1, "ann-loc"], [1, "ann-footer"], [1, "ann-user"], [1, "av", "av-lime"], [1, "av-img", 3, "src"], [1, "status-pill", "sp-active"], [1, "ann-cat-chip"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Scambia con i tuoi");
      \u0275\u0275element(4, "br");
      \u0275\u0275elementStart(5, "em");
      \u0275\u0275text(6, "vicini.");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Senza soldi.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 2);
      \u0275\u0275text(9, " Ogni oggetto inutilizzato \xE8 un'opportunit\xE0 per qualcuno vicino a te. Proponi scambi, accordati in chat, misura il tuo impatto reale. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 3)(11, "button", 4);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_11_listener() {
        return ctx.vai("/annunci");
      });
      \u0275\u0275text(12, "Esplora annunci");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 5);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_13_listener() {
        return ctx.vai("/pubblica");
      });
      \u0275\u0275text(14, "Pubblica oggetto");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 6);
      \u0275\u0275element(16, "div", 7)(17, "div", 8)(18, "div", 9)(19, "div", 10);
      \u0275\u0275elementStart(20, "div", 11);
      \u0275\u0275listener("click", function HomeComponent_Template_div_click_20_listener() {
        return ctx.vai("/annunci");
      });
      \u0275\u0275text(21, "\u{1F6B2}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 12);
      \u0275\u0275listener("click", function HomeComponent_Template_div_click_22_listener() {
        return ctx.vai("/annunci");
      });
      \u0275\u0275text(23, "\u{1F4DA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 13);
      \u0275\u0275listener("click", function HomeComponent_Template_div_click_24_listener() {
        return ctx.vai("/annunci");
      });
      \u0275\u0275text(25, "\u{1F3B8}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 14);
      \u0275\u0275listener("click", function HomeComponent_Template_div_click_26_listener() {
        return ctx.vai("/annunci");
      });
      \u0275\u0275text(27, "\u{1F6CB}\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 15);
      \u0275\u0275listener("click", function HomeComponent_Template_div_click_28_listener() {
        return ctx.vai("/annunci");
      });
      \u0275\u0275text(29, "\u{1F373}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 16);
      \u0275\u0275text(31, "Centro Storico");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 17);
      \u0275\u0275text(33, "Giardino");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 18);
      \u0275\u0275text(35, "\u{1F4CD} Ferrara");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 19)(37, "div", 20)(38, "div", 21);
      \u0275\u0275text(39, "Annunci recenti vicino a te");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "button", 22);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_40_listener() {
        return ctx.vai("/annunci");
      });
      \u0275\u0275text(41, "Vedi tutti");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(42, HomeComponent_Conditional_42_Template, 2, 0, "p", 23)(43, HomeComponent_Conditional_43_Template, 4, 1, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 25)(45, "div", 26);
      \u0275\u0275listener("click", function HomeComponent_Template_div_click_45_listener() {
        return ctx.vai("/profilo");
      });
      \u0275\u0275elementStart(46, "div")(47, "div", 27);
      \u0275\u0275text(48, "CO\u2082 risparmiata dal quartiere");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div")(50, "span", 28);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "span", 29);
      \u0275\u0275text(54, "kg");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 30);
      \u0275\u0275text(56, " calcolata su tutti gli scambi completati nel tuo quartiere ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 31)(58, "div", 32)(59, "div", 33);
      \u0275\u0275text(60, "\u{1F333}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div")(62, "div", 34);
      \u0275\u0275text(63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 35);
      \u0275\u0275text(65, "stima EPA: 21 kg CO\u2082 assorbiti da un albero in un anno");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "div", 32)(67, "div", 33);
      \u0275\u0275text(68, "\u{1F697}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div")(70, "div", 34);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 35);
      \u0275\u0275text(74, "stima: 0.242 kg CO\u2082 emessi da un'auto per km");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(42);
      \u0275\u0275conditional(ctx.loading() ? 42 : 43);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 4, ctx.co2Quartiere(), "1.1-1"));
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1("Come piantare ~", ctx.alberiEquivalenti, " alberi");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("Come non guidare per ~", \u0275\u0275pipeBind1(72, 7, ctx.kmAuto), " km");
    }
  }, dependencies: [CommonModule, DecimalPipe, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "app/pages/home/home.component.ts", lineNumber: 15 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-SPZ5LARV.js.map
