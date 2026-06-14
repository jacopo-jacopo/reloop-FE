import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BBR5L3LN.js";
import {
  AnnuncioService
} from "./chunk-H3KUEFTO.js";
import {
  CommonModule,
  Router,
  ToastService,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3SNN5JWR.js";

// src/app/pages/pubblica/pubblica.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function PubblicaComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 21);
    \u0275\u0275text(2, "\u{1F4F8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275text(4, "Aggiungi almeno una foto");
    \u0275\u0275elementEnd()();
  }
}
function PubblicaComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "img", 24);
    \u0275\u0275elementStart(2, "div", 25)(3, "button", 26);
    \u0275\u0275listener("click", function PubblicaComponent_Conditional_12_For_2_Template_button_click_3_listener() {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.rimuoviFoto($index_r2));
    });
    \u0275\u0275text(4, "\u2715");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const prev_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", prev_r4, \u0275\u0275sanitizeUrl);
  }
}
function PubblicaComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, PubblicaComponent_Conditional_12_For_2_Template, 5, 1, "div", 23, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.fotoPreview);
  }
}
function PubblicaComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Titolo obbligatorio");
    \u0275\u0275elementEnd();
  }
}
function PubblicaComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    \u0275\u0275property("value", cat_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r5);
  }
}
function PubblicaComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Categoria obbligatoria");
    \u0275\u0275elementEnd();
  }
}
function PubblicaComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function PubblicaComponent_For_36_Template_div_click_0_listener() {
      const c_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selCond(c_r7.value));
    });
    \u0275\u0275elementStart(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("sel", ctx_r2.condSelezionata() === c_r7.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r7.emoji);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r7.label);
  }
}
function PubblicaComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Inserisci un valore positivo");
    \u0275\u0275elementEnd();
  }
}
var PubblicaComponent = class _PubblicaComponent {
  fb = inject(FormBuilder);
  annuncioService = inject(AnnuncioService);
  toast = inject(ToastService);
  router = inject(Router);
  loading = signal(false);
  condSelezionata = signal(null);
  fotoPreview = [];
  // I value devono corrispondere esattamente all'enum Java e al DB
  condizioni = [
    { value: "scarso", emoji: "\u{1F61E}", label: "Scarso" },
    { value: "discreto", emoji: "\u{1F642}", label: "Discreto" },
    { value: "buono", emoji: "\u{1F60A}", label: "Buono" },
    { value: "ottimo", emoji: "\u{1F44D}", label: "Ottimo" },
    { value: "come_nuovo", emoji: "\u2728", label: "Come nuovo" }
  ];
  categorie = [
    "Arredamento",
    "Abbigliamento",
    "Libri & Cultura",
    "Sport & Tempo libero",
    "Elettronica",
    "Cucina",
    "Musica"
  ];
  form = this.fb.group({
    titolo: ["", Validators.required],
    categoria: ["", Validators.required],
    descrizione: [""],
    prezzo_stimato: ["", [Validators.required, Validators.min(0)]]
  });
  selCond(v) {
    this.condSelezionata.set(v);
  }
  onFotoChange(event) {
    const input = event.target;
    if (!input.files)
      return;
    Array.from(input.files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => this.fotoPreview.push(e.target?.result);
      reader.readAsDataURL(file);
    });
  }
  rimuoviFoto(idx) {
    this.fotoPreview.splice(idx, 1);
  }
  pubblica() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (!this.condSelezionata()) {
      this.toast.warn("Condizioni mancanti", "Seleziona le condizioni.", "\u26A0\uFE0F");
      return;
    }
    this.loading.set(true);
    this.annuncioService.pubblica({
      titolo: this.form.value.titolo,
      categoria: this.form.value.categoria,
      descrizione_annuncio: this.form.value.descrizione,
      prezzo_stimato: Number(this.form.value.prezzo_stimato),
      condizioni: this.condSelezionata(),
      foto: this.fotoPreview
    }).subscribe({
      next: () => {
        this.loading.set(false);
        this.toast.ok("Annuncio pubblicato!", "Visibile nel tuo quartiere.", "\u{1F4CB}");
        this.router.navigate(["/profilo"]);
      },
      error: () => {
        this.loading.set(false);
        this.toast.err("Errore", "Impossibile pubblicare l'annuncio.", "\u274C");
      }
    });
  }
  invalid(field) {
    const c = this.form.get(field);
    return !!(c?.invalid && c?.touched);
  }
  static \u0275fac = function PubblicaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PubblicaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PubblicaComponent, selectors: [["app-pubblica"]], decls: 44, vars: 16, consts: [[1, "pub-wrap"], [1, "pub-t"], [1, "pub-sub"], [1, "u-clr-lime"], [1, "pub-form", 3, "ngSubmit", "formGroup"], [1, "upload-zone"], [1, "upload-placeholder-inner"], ["type", "file", "accept", "image/*", "multiple", "", 2, "position", "absolute", "inset", "0", "opacity", "0", "cursor", "pointer", 3, "change"], [1, "photo-grid"], [1, "fg"], [1, "fl"], ["formControlName", "titolo", "placeholder", "es. Bicicletta mountain bike", 1, "fi"], [1, "ferr", "show"], ["formControlName", "categoria", 1, "fi"], ["value", ""], [3, "value"], ["rows", "3", "formControlName", "descrizione", "placeholder", "Descrivi l'oggetto, condizioni, cosa vorresti in cambio...", 1, "fi"], [1, "cond-grid"], [1, "cond-item", 3, "sel"], ["type", "number", "min", "0", "formControlName", "prezzo_stimato", "placeholder", "es. 80", 1, "fi"], ["type", "submit", 1, "btn-pub", 3, "disabled"], [1, "u-text-2xl"], [1, "u-text-muted-sm"], [1, "photo-cell"], ["alt", "foto", 3, "src"], [1, "photo-cell-remove"], ["type", "button", 1, "photo-cell-remove-btn", 3, "click"], [1, "cond-item", 3, "click"], [1, "ci-e"], [1, "ci-l"]], template: function PubblicaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Pubblica un annuncio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275text(4, " Il tuo annuncio sar\xE0 visibile solo agli utenti del tuo quartiere. Stato iniziale: ");
      \u0275\u0275elementStart(5, "strong", 3);
      \u0275\u0275text(6, "attivo");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, ". ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "form", 4);
      \u0275\u0275listener("ngSubmit", function PubblicaComponent_Template_form_ngSubmit_8_listener() {
        return ctx.pubblica();
      });
      \u0275\u0275elementStart(9, "div", 5);
      \u0275\u0275template(10, PubblicaComponent_Conditional_10_Template, 5, 0, "div", 6);
      \u0275\u0275elementStart(11, "input", 7);
      \u0275\u0275listener("change", function PubblicaComponent_Template_input_change_11_listener($event) {
        return ctx.onFotoChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, PubblicaComponent_Conditional_12_Template, 3, 0, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9)(14, "label", 10);
      \u0275\u0275text(15, "Titolo");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 11);
      \u0275\u0275template(17, PubblicaComponent_Conditional_17_Template, 2, 0, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 9)(19, "label", 10);
      \u0275\u0275text(20, "Categoria");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "select", 13)(22, "option", 14);
      \u0275\u0275text(23, "Seleziona categoria...");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(24, PubblicaComponent_For_25_Template, 2, 2, "option", 15, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, PubblicaComponent_Conditional_26_Template, 2, 0, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 9)(28, "label", 10);
      \u0275\u0275text(29, "Descrizione");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "textarea", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 9)(32, "label", 10);
      \u0275\u0275text(33, "Condizioni");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 17);
      \u0275\u0275repeaterCreate(35, PubblicaComponent_For_36_Template, 5, 4, "div", 18, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 9)(38, "label", 10);
      \u0275\u0275text(39, "Prezzo stimato (\u20AC)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "input", 19);
      \u0275\u0275template(41, PubblicaComponent_Conditional_41_Template, 2, 0, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 20);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275classProp("has-photos", ctx.fotoPreview.length > 0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.fotoPreview.length === 0 ? 10 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.fotoPreview.length > 0 ? 12 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("err", ctx.invalid("titolo"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.invalid("titolo") ? 17 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("err", ctx.invalid("categoria"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.categorie);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.invalid("categoria") ? 26 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.condizioni);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("err", ctx.invalid("prezzo_stimato"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.invalid("prezzo_stimato") ? 41 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Pubblicazione in corso..." : "Pubblica annuncio", " ");
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PubblicaComponent, { className: "PubblicaComponent", filePath: "app/pages/pubblica/pubblica.component.ts", lineNumber: 15 });
})();
export {
  PubblicaComponent
};
//# sourceMappingURL=chunk-C7PYPOQE.js.map
