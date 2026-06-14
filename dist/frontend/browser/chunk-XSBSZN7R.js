import {
  QuartiereService
} from "./chunk-TU36ZM4H.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-HAS6CWBK.js";
import {
  AuthService,
  CommonModule,
  HttpClient,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3V7QK2LV.js";

// src/app/pages/login/login.component.ts
var _forTrack0 = ($index, $item) => $item.id_quartiere;
function LoginComponent_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Email non valida");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_9_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Password obbligatoria");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 27);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Conditional_9_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doLogin());
    });
    \u0275\u0275elementStart(1, "div", 28)(2, "label", 29);
    \u0275\u0275text(3, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 30);
    \u0275\u0275template(5, LoginComponent_Conditional_9_Conditional_5_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28)(7, "label", 29);
    \u0275\u0275text(8, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 32);
    \u0275\u0275template(10, LoginComponent_Conditional_9_Conditional_10_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 33);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.formLogin);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("err", ctx_r1.invalid(ctx_r1.formLogin, "email"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.invalid(ctx_r1.formLogin, "email") ? 5 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("err", ctx_r1.invalid(ctx_r1.formLogin, "password"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.invalid(ctx_r1.formLogin, "password") ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Accesso in corso..." : "Entra in reloop", " ");
  }
}
function LoginComponent_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Nome obbligatorio");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_10_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("value", c_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4);
  }
}
function LoginComponent_Conditional_10_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Seleziona una citt\xE0");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_10_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r5 = ctx.$implicit;
    \u0275\u0275property("value", q_r5.id_quartiere);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r5.nome_quartiere);
  }
}
function LoginComponent_Conditional_10_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Seleziona un quartiere");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_10_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Indirizzo obbligatorio");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_10_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Email non valida");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_10_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Almeno 8 caratteri con 1 maiuscola, 1 minuscola, 1 numero e 1 carattere speciale (!?#-_)");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_10_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Conferma la password");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 27);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Conditional_10_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doRegister());
    });
    \u0275\u0275elementStart(1, "div", 28)(2, "label", 29);
    \u0275\u0275text(3, "Nome completo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 34);
    \u0275\u0275template(5, LoginComponent_Conditional_10_Conditional_5_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28)(7, "label", 29);
    \u0275\u0275text(8, "Citt\xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 35);
    \u0275\u0275listener("change", function LoginComponent_Conditional_10_Template_select_change_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCittaChange($event));
    });
    \u0275\u0275elementStart(10, "option", 36);
    \u0275\u0275text(11, "Seleziona citt\xE0...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(12, LoginComponent_Conditional_10_For_13_Template, 2, 2, "option", 37, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, LoginComponent_Conditional_10_Conditional_14_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 28)(16, "label", 29);
    \u0275\u0275text(17, "Quartiere");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 38)(19, "option", 36);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, LoginComponent_Conditional_10_For_22_Template, 2, 2, "option", 37, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, LoginComponent_Conditional_10_Conditional_23_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 28)(25, "label", 29);
    \u0275\u0275text(26, "Indirizzo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 39);
    \u0275\u0275template(28, LoginComponent_Conditional_10_Conditional_28_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 28)(30, "label", 29);
    \u0275\u0275text(31, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 30);
    \u0275\u0275template(33, LoginComponent_Conditional_10_Conditional_33_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 28)(35, "label", 29);
    \u0275\u0275text(36, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 32);
    \u0275\u0275template(38, LoginComponent_Conditional_10_Conditional_38_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 28)(40, "label", 29);
    \u0275\u0275text(41, "Conferma password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 40);
    \u0275\u0275template(43, LoginComponent_Conditional_10_Conditional_43_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 33);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.formReg);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("err", ctx_r1.invalid(ctx_r1.formReg, "nome_completo"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.invalid(ctx_r1.formReg, "nome_completo") ? 5 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("err", ctx_r1.invalid(ctx_r1.formReg, "citta"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.citta);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.invalid(ctx_r1.formReg, "citta") ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("err", ctx_r1.invalid(ctx_r1.formReg, "id_quartiere"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.quartieriFiltrati.length === 0 ? "Scegli prima una citt\xE0..." : "Seleziona quartiere...", " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.quartieriFiltrati);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.invalid(ctx_r1.formReg, "id_quartiere") ? 23 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("err", ctx_r1.invalid(ctx_r1.formReg, "indirizzo"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.invalid(ctx_r1.formReg, "indirizzo") ? 28 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("err", ctx_r1.invalid(ctx_r1.formReg, "email"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.invalid(ctx_r1.formReg, "email") ? 33 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("err", ctx_r1.invalid(ctx_r1.formReg, "password"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.invalid(ctx_r1.formReg, "password") ? 38 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("err", ctx_r1.invalid(ctx_r1.formReg, "password2"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.invalid(ctx_r1.formReg, "password2") ? 43 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Creazione account..." : "Crea il tuo account", " ");
  }
}
var LoginComponent = class _LoginComponent {
  auth = inject(AuthService);
  router = inject(Router);
  fb = inject(FormBuilder);
  toast = inject(ToastService);
  quartiereService = inject(QuartiereService);
  http = inject(HttpClient);
  API = "http://localhost:8080/api";
  tabAttiva = "accedi";
  loading = false;
  quartieri = [];
  citta = [];
  quartieriFiltrati = [];
  stats = signal(null);
  formLogin = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required]
  });
  // Almeno 8 caratteri, 1 maiuscola, 1 minuscola, 1 numero, 1 carattere speciale tra !?#-_
  static PASSWORD_PATTERN = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!?#\-_]).{8,}$/;
  // Il dominio @reloop.it è riservato agli amministratori
  static emailNonRiservata(control) {
    const value = (control.value || "").toLowerCase();
    return value.endsWith("@reloop.it") ? { email: true } : null;
  }
  formReg = this.fb.group({
    nome_completo: ["", Validators.required],
    email: ["", [Validators.required, Validators.email, _LoginComponent.emailNonRiservata]],
    password: ["", [Validators.required, Validators.pattern(_LoginComponent.PASSWORD_PATTERN)]],
    password2: ["", Validators.required],
    indirizzo: ["", Validators.required],
    citta: ["", Validators.required],
    id_quartiere: ["", Validators.required]
  });
  ngOnInit() {
    this.quartiereService.getAll().subscribe({
      next: (q) => {
        this.quartieri = q;
        this.citta = [...new Set(q.map((x) => x.citta))];
      },
      error: () => this.toast.err("Errore", "Impossibile caricare i quartieri.", "\u274C")
    });
    this.http.get(`${this.API}/stats/pubbliche`).subscribe({
      next: (s) => this.stats.set(s),
      error: () => {
      }
    });
  }
  switchTab(t) {
    this.tabAttiva = t;
  }
  onCittaChange(event) {
    const citta = event.target.value;
    this.formReg.get("id_quartiere")?.setValue("");
    this.quartieriFiltrati = this.quartieri.filter((q) => q.citta === citta);
  }
  doLogin() {
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      return;
    }
    this.loading = true;
    const { email, password } = this.formLogin.value;
    this.auth.login(email, password).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.tipo === "admin") {
          this.router.navigate(["/admin"]);
        } else {
          this.toast.ok("Benvenuto su reloop!", "Buono scambio \u{1F44B}", "\u{1F33F}");
          this.router.navigate(["/home"]);
        }
      },
      error: () => {
        this.loading = false;
        this.toast.err("Errore login", "Credenziali non valide.", "\u274C");
      }
    });
  }
  doRegister() {
    if (this.formReg.invalid) {
      this.formReg.markAllAsTouched();
      return;
    }
    const v = this.formReg.value;
    if (v.password !== v.password2) {
      this.toast.warn("Password diversa", "Le due password non coincidono.", "\u26A0\uFE0F");
      return;
    }
    const quartiere = this.quartieri.find((q) => q.id_quartiere === Number(v.id_quartiere));
    this.loading = true;
    this.auth.registra({
      nome_completo: v.nome_completo,
      email: v.email,
      password: v.password,
      indirizzo: v.indirizzo,
      quartiere
    }).subscribe({
      next: () => {
        this.loading = false;
        this.toast.ok("Account creato!", "Benvenuto in reloop \u{1F33F}", "\u2705");
        this.router.navigate(["/home"]);
      },
      error: () => {
        this.loading = false;
        this.toast.err("Errore", "Email gi\xE0 in uso o dati non validi.", "\u274C");
      }
    });
  }
  invalid(form, field) {
    const c = form.get(field);
    return !!(c?.invalid && c?.touched);
  }
  formatNum(n) {
    if (n >= 1e3)
      return (n / 1e3).toFixed(1).replace(".", ",") + "k";
    return n.toString();
  }
  formatCo2(kg) {
    if (kg >= 1e3)
      return (kg / 1e3).toFixed(1) + " t";
    return kg + " kg";
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 84, vars: 9, consts: [[1, "login-pg", "act"], [1, "login-left"], [1, "ll-logo"], ["src", "LOGO_SCRITTA.png", "alt", "reloop", 1, "logo-login"], [1, "tab-row"], [1, "tab-btn", 3, "click"], [1, "lform", 3, "formGroup"], [1, "login-right"], [1, "lr-tag"], [1, "lr-tag-dot"], [1, "lr-h"], [1, "lr-sub"], [1, "stats-strip", "u-mb28"], [1, "ss-item"], [1, "ss-n"], [1, "ss-l"], [1, "flow"], [1, "flow-step", "flow-lime"], [1, "fs-n"], [1, "fs-ico"], [1, "fs-t"], [1, "fs-d"], [1, "flow-step", "flow-sage"], [1, "flow-step", "flow-amber"], [1, "flow-step", "flow-terra"], [1, "lr-chips"], [1, "lr-chip"], [1, "lform", 3, "ngSubmit", "formGroup"], [1, "fg"], [1, "fl"], ["type", "email", "formControlName", "email", "placeholder", "esempio@dominio.com", 1, "fi"], [1, "ferr", "show"], ["type", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "fi"], ["type", "submit", 1, "btn-login", 3, "disabled"], ["type", "text", "formControlName", "nome_completo", "placeholder", "Mario Rossi", 1, "fi"], ["formControlName", "citta", 1, "fi", 3, "change"], ["value", ""], [3, "value"], ["formControlName", "id_quartiere", 1, "fi"], ["type", "text", "formControlName", "indirizzo", "placeholder", "Via Roma 12", 1, "fi"], ["type", "password", "formControlName", "password2", "placeholder", "ripeti password", 1, "fi"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "button", 5);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_5_listener() {
        return ctx.switchTab("accedi");
      });
      \u0275\u0275text(6, "Accedi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_7_listener() {
        return ctx.switchTab("reg");
      });
      \u0275\u0275text(8, "Registrati");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, LoginComponent_Conditional_9_Template, 13, 9, "form", 6)(10, LoginComponent_Conditional_10_Template, 46, 25, "form", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8);
      \u0275\u0275element(13, "span", 9);
      \u0275\u0275text(14, "Come funziona reloop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h1", 10);
      \u0275\u0275text(16, "Dai nuova vita");
      \u0275\u0275element(17, "br");
      \u0275\u0275text(18, "agli oggetti del");
      \u0275\u0275element(19, "br");
      \u0275\u0275elementStart(20, "em");
      \u0275\u0275text(21, "tuo quartiere.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "p", 11);
      \u0275\u0275text(23, "Nessun denaro. Solo fiducia reciproca tra vicini. Ogni scambio riduce il tuo impatto ambientale.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 12)(25, "div", 13)(26, "span", 14);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 15);
      \u0275\u0275text(29, "scambi completati");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 13)(31, "span", 14);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 15);
      \u0275\u0275text(34, "CO\u2082 calcolata");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 13)(36, "span", 14);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 15);
      \u0275\u0275text(39, "utenti attivi");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 16)(41, "div", 17)(42, "div", 18);
      \u0275\u0275text(43, "01 \xB7 Pubblica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 19);
      \u0275\u0275text(45, "\u{1F4CB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 20);
      \u0275\u0275text(47, "Annuncio attivo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 21);
      \u0275\u0275text(49, "Inserisci l'oggetto con foto, categoria e valore stimato.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 22)(51, "div", 18);
      \u0275\u0275text(52, "02 \xB7 Proposta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 19);
      \u0275\u0275text(54, "\u{1F91D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 20);
      \u0275\u0275text(56, "Offri i tuoi annunci");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 21);
      \u0275\u0275text(58, "Seleziona tra i tuoi annunci attivi quelli da proporre.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 23)(60, "div", 18);
      \u0275\u0275text(61, "03 \xB7 Chat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 19);
      \u0275\u0275text(63, "\u{1F4AC}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 20);
      \u0275\u0275text(65, "Accordatevi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 21);
      \u0275\u0275text(67, "Proposta accettata \u2192 chat aperta.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 24)(69, "div", 18);
      \u0275\u0275text(70, "04 \xB7 CO\u2082 calcolata");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 19);
      \u0275\u0275text(72, "\u{1F331}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 20);
      \u0275\u0275text(74, "Scambio completato");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 21);
      \u0275\u0275text(76, "Recensisci il tuo vicino e sblocca badge!");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "div", 25)(78, "div", 26);
      \u0275\u0275text(79, "\u{1F3D8}\uFE0F Iperlocale \xB7 per quartiere");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 26);
      \u0275\u0275text(81, "\u267B\uFE0F Zero denaro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 26);
      \u0275\u0275text(83, "\u{1F30D} CO\u2082 tracciata");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275classProp("act", ctx.tabAttiva === "accedi");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("act", ctx.tabAttiva === "reg");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tabAttiva === "accedi" ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tabAttiva === "reg" ? 10 : -1);
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate(ctx.stats() ? ctx.formatNum(ctx.stats().scambi_completati) : "\u2014");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.stats() ? ctx.formatCo2(ctx.stats().co2_totale_kg) : "\u2014");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.stats() ? ctx.formatNum(ctx.stats().utenti_attivi) : "\u2014");
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app/pages/login/login.component.ts", lineNumber: 17 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-XSBSZN7R.js.map
