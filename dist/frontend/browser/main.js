import {
  QuartiereService
} from "./chunk-4E3FYBZI.js";
import {
  PropostaService
} from "./chunk-QLIDZFYC.js";
import {
  NotificationService
} from "./chunk-OAKHWBYB.js";
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
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BBR5L3LN.js";
import {
  SegnalazioneService
} from "./chunk-EOAE7ACB.js";
import {
  OverlayService,
  UtenteService
} from "./chunk-EEAG4X3M.js";
import {
  AnnuncioService
} from "./chunk-H3KUEFTO.js";
import {
  AuthService,
  CommonModule,
  DecimalPipe,
  HttpClient,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  ToastService,
  bootstrapApplication,
  effect,
  filter,
  inject,
  provideHttpClient,
  provideRouter,
  signal,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-3SNN5JWR.js";

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn())
    return true;
  router.navigate(["/login"]);
  return false;
};
var adminGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn() && auth.isAdmin())
    return true;
  router.navigate(["/login"]);
  return false;
};
var loginGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn()) {
    router.navigate([auth.isAdmin() ? "/admin" : "/home"]);
    return false;
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  },
  {
    path: "login",
    loadComponent: () => import("./chunk-X2JNW63G.js").then((m) => m.LoginComponent),
    canActivate: [loginGuard]
  },
  {
    path: "home",
    loadComponent: () => import("./chunk-LYBTTI2C.js").then((m) => m.HomeComponent),
    canActivate: [authGuard]
  },
  {
    path: "annunci",
    loadComponent: () => import("./chunk-NQ6R3BQG.js").then((m) => m.AnnunciComponent),
    canActivate: [authGuard]
  },
  {
    path: "proposte",
    loadComponent: () => import("./chunk-63ZPTG4M.js").then((m) => m.ProposteComponent),
    canActivate: [authGuard]
  },
  {
    path: "chat",
    loadComponent: () => import("./chunk-V42G4FCD.js").then((m) => m.ChatComponent),
    canActivate: [authGuard]
  },
  {
    path: "pubblica",
    loadComponent: () => import("./chunk-C7PYPOQE.js").then((m) => m.PubblicaComponent),
    canActivate: [authGuard]
  },
  {
    path: "profilo",
    loadComponent: () => import("./chunk-7LMJIZHE.js").then((m) => m.ProfiloComponent),
    canActivate: [authGuard]
  },
  {
    path: "admin",
    loadComponent: () => import("./chunk-KXAXNAGP.js").then((m) => m.AdminComponent),
    canActivate: [adminGuard]
  },
  {
    path: "**",
    redirectTo: "login"
  }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const utente = auth.utenteCorrente();
  if (utente) {
    const id = utente.id_utente_reg ?? utente.id_utente_adm;
    if (id) {
      req = req.clone({
        setHeaders: { "X-User-Id": String(id) }
      });
    }
  }
  return next(req);
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/shared/navbar/navbar.component.ts
function NavbarComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "!");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "!");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_0_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 17);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r2.fotoProfilo, \u0275\u0275sanitizeUrl);
  }
}
function NavbarComponent_Conditional_0_Conditional_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.iniziali, " ");
  }
}
function NavbarComponent_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_0_Conditional_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vaiAlProfilo());
    });
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275template(2, NavbarComponent_Conditional_0_Conditional_19_Conditional_2_Template, 1, 1, "img", 17)(3, NavbarComponent_Conditional_0_Conditional_19_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.fotoProfilo ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = ctx_r2.auth.utenteCorrente()) == null ? null : tmp_3_0.nome_completo == null ? null : tmp_3_0.nome_completo.split(" ")[0], " ");
  }
}
function NavbarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 0)(1, "a", 2);
    \u0275\u0275element(2, "img", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4)(4, "a", 5);
    \u0275\u0275text(5, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 6);
    \u0275\u0275text(7, "Annunci");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 7);
    \u0275\u0275text(9, " Proposte ");
    \u0275\u0275template(10, NavbarComponent_Conditional_0_Conditional_10_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 9);
    \u0275\u0275text(12, " Chat ");
    \u0275\u0275template(13, NavbarComponent_Conditional_0_Conditional_13_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 10);
    \u0275\u0275text(15, "Pubblica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 11);
    \u0275\u0275text(17, "Profilo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 12);
    \u0275\u0275template(19, NavbarComponent_Conditional_0_Conditional_19_Template, 6, 2, "div", 13);
    \u0275\u0275elementStart(20, "button", 14);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.apriConfermaLogout());
    });
    \u0275\u0275text(21, "Esci");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r2.notif.proposteBadge() ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.notif.chatBadge() ? 13 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.auth.utenteCorrente() ? 19 : -1);
  }
}
function NavbarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_1_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event.target === $event.currentTarget && ctx_r2.chiudiConfermaLogout());
    });
    \u0275\u0275elementStart(1, "div", 20)(2, "div", 21);
    \u0275\u0275text(3, "Esci da reloop");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 22);
    \u0275\u0275text(5, "Sei sicuro di voler uscire dal tuo account?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 23)(7, "button", 24);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.chiudiConfermaLogout());
    });
    \u0275\u0275text(8, "No, torna indietro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 25);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275text(10, "S\xEC, esci");
    \u0275\u0275elementEnd()()()();
  }
}
var NavbarComponent = class _NavbarComponent {
  auth = inject(AuthService);
  notif = inject(NotificationService);
  toast = inject(ToastService);
  router = inject(Router);
  sub;
  constructor() {
    this.sub = this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => this.notif.carica());
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  get fotoProfilo() {
    return this.auth.utenteCorrente()?.foto_profilo || null;
  }
  get iniziali() {
    const nome = this.auth.utenteCorrente()?.nome_completo || "";
    return nome.split(" ").map((p) => p[0]).join("").substring(0, 2).toUpperCase();
  }
  vaiAlProfilo() {
    this.router.navigate(["/profilo"]);
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
    this.toast.info("Arrivederci!", "Sessione terminata correttamente.", "\u{1F44B}");
  }
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], decls: 2, vars: 2, consts: [["id", "mainNav"], [1, "modal-bg", "open"], ["routerLink", "/home", 1, "nav-logo"], ["src", "LOGO.png", "alt", "reloop", 1, "logo-nav"], [1, "nav-links"], ["routerLink", "/home", "routerLinkActive", "act", 1, "nav-link"], ["routerLink", "/annunci", "routerLinkActive", "act", 1, "nav-link"], ["routerLink", "/proposte", "routerLinkActive", "act", 1, "nav-link"], [1, "nav-badge"], ["routerLink", "/chat", "routerLinkActive", "act", 1, "nav-link"], ["routerLink", "/pubblica", "routerLinkActive", "act", 1, "nav-link"], ["routerLink", "/profilo", "routerLinkActive", "act", 1, "nav-link"], [1, "nav-right"], [1, "nav-pill", 2, "display", "flex", "align-items", "center", "gap", "8px", "padding", "3px 10px 3px 3px", "cursor", "pointer"], [1, "btn-nav", 3, "click"], [1, "nav-pill", 2, "display", "flex", "align-items", "center", "gap", "8px", "padding", "3px 10px 3px 3px", "cursor", "pointer", 3, "click"], [2, "width", "28px", "height", "28px", "border-radius", "50%", "overflow", "hidden", "background", "rgba(184,224,0,.15)", "display", "flex", "align-items", "center", "justify-content", "center", "font-size", ".65rem", "font-weight", "700", "color", "var(--lime)", "flex-shrink", "0"], [2, "width", "100%", "height", "100%", "object-fit", "cover", 3, "src"], [2, "font-size", ".72rem", "color", "var(--lime)", "font-weight", "600"], [1, "modal-bg", "open", 3, "click"], [1, "modal", "u-mw520"], [1, "modal-h"], [1, "modal-p"], [1, "modal-acts"], [1, "btn-cancel2", 3, "click"], [1, "btn-confirm", "btn-admin-danger", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NavbarComponent_Conditional_0_Template, 22, 3, "nav", 0)(1, NavbarComponent_Conditional_1_Template, 11, 0, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.auth.isLoggedIn() && !ctx.auth.isAdmin() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.confermaLogoutAperta() ? 1 : -1);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "app/shared/navbar/navbar.component.ts", lineNumber: 17 });
})();

// src/app/shared/toast/toast.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ToastComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("toast t-", t_r1.type, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.msg);
  }
}
var ToastComponent = class _ToastComponent {
  toastService;
  constructor(toastService) {
    this.toastService = toastService;
  }
  static \u0275fac = function ToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastComponent)(\u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], decls: 3, vars: 0, consts: [["id", "toast-wrap"], [3, "class"], [1, "toast-ico"], [1, "toast-body"], [1, "toast-title"], [1, "toast-msg"], [1, "toast-bar"]], template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, ToastComponent_For_2_Template, 9, 6, "div", 1, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.toastService.toasts());
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "app/shared/toast/toast.component.ts", lineNumber: 12 });
})();

// src/app/shared/ann-overlay/ann-overlay.component.ts
function AnnOverlayComponent_Conditional_0_Conditional_3_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 26);
  }
  if (rf & 2) {
    const $index_r4 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r1.fotoIndice() === $index_r4);
  }
}
function AnnOverlayComponent_Conditional_0_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function AnnOverlayComponent_Conditional_0_Conditional_3_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fotoPrecedente());
    });
    \u0275\u0275text(1, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 23);
    \u0275\u0275listener("click", function AnnOverlayComponent_Conditional_0_Conditional_3_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fotoSuccessiva());
    });
    \u0275\u0275text(3, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24);
    \u0275\u0275repeaterCreate(5, AnnOverlayComponent_Conditional_0_Conditional_3_Conditional_1_For_6_Template, 1, 2, "span", 25, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.foto());
  }
}
function AnnOverlayComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
    \u0275\u0275template(1, AnnOverlayComponent_Conditional_0_Conditional_3_Conditional_1_Template, 7, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.fotoCorrente, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.foto().length > 1 ? 1 : -1);
  }
}
function AnnOverlayComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F4E6} ");
  }
}
function AnnOverlayComponent_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.annuncio.pubblicante == null ? null : ctx_r1.annuncio.pubblicante.foto_profilo, \u0275\u0275sanitizeUrl);
  }
}
function AnnOverlayComponent_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.annuncio.pubblicante == null ? null : ctx_r1.annuncio.pubblicante.nome_completo == null ? null : (tmp_2_0 = ctx_r1.annuncio.pubblicante.nome_completo.substring(0, 2)) == null ? null : tmp_2_0.toUpperCase(), " ");
  }
}
function AnnOverlayComponent_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function AnnOverlayComponent_Conditional_0_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.apriModalProposta());
    });
    \u0275\u0275text(1, " Proponi scambio ");
    \u0275\u0275elementEnd();
  }
}
function AnnOverlayComponent_Conditional_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275text(1, " Annuncio gi\xE0 segnalato ");
    \u0275\u0275elementEnd();
  }
}
function AnnOverlayComponent_Conditional_0_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "textarea", 28);
    \u0275\u0275listener("input", function AnnOverlayComponent_Conditional_0_Conditional_32_Template_textarea_input_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.motivazione.set($event.target.value));
    });
    \u0275\u0275text(2, "              ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "button", 30);
    \u0275\u0275listener("click", function AnnOverlayComponent_Conditional_0_Conditional_32_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.mostraSegnalaForm.set(false));
    });
    \u0275\u0275text(5, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 31);
    \u0275\u0275listener("click", function AnnOverlayComponent_Conditional_0_Conditional_32_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.inviaSegnalazione());
    });
    \u0275\u0275text(7, " Invia segnalazione ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.motivazione());
  }
}
function AnnOverlayComponent_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function AnnOverlayComponent_Conditional_0_Conditional_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.apriSegnalaForm());
    });
    \u0275\u0275text(1, " Segnala annuncio ");
    \u0275\u0275elementEnd();
  }
}
function AnnOverlayComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function AnnOverlayComponent_Conditional_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBgClick($event));
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3);
    \u0275\u0275template(3, AnnOverlayComponent_Conditional_0_Conditional_3_Template, 2, 2)(4, AnnOverlayComponent_Conditional_0_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6)(9, "span", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 7);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 8);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 9);
    \u0275\u0275listener("click", function AnnOverlayComponent_Conditional_0_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.apriProfiloUtente());
    });
    \u0275\u0275elementStart(18, "div", 10);
    \u0275\u0275template(19, AnnOverlayComponent_Conditional_0_Conditional_19_Template, 1, 1, "img", 11)(20, AnnOverlayComponent_Conditional_0_Conditional_20_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "div", 12);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 13);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 14)(27, "button", 15);
    \u0275\u0275listener("click", function AnnOverlayComponent_Conditional_0_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.chiudi());
    });
    \u0275\u0275text(28, "Chiudi");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, AnnOverlayComponent_Conditional_0_Conditional_29_Template, 2, 0, "button", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 17);
    \u0275\u0275template(31, AnnOverlayComponent_Conditional_0_Conditional_31_Template, 2, 0, "button", 18)(32, AnnOverlayComponent_Conditional_0_Conditional_32_Template, 8, 1, "div", 19)(33, AnnOverlayComponent_Conditional_0_Conditional_33_Template, 2, 0, "button", 20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ann-bg-bici", !ctx_r1.fotoCorrente);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fotoCorrente ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.annuncio.titolo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4C2} ", ctx_r1.annuncio.categoria, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4B0} \u20AC", ctx_r1.annuncio.prezzo_stimato, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2B50 ", ctx_r1.labelCondizione(ctx_r1.annuncio.condizioni), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.annuncio.descrizione_annuncio);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r1.annuncio.pubblicante == null ? null : ctx_r1.annuncio.pubblicante.foto_profilo) ? 19 : 20);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.annuncio.pubblicante == null ? null : ctx_r1.annuncio.pubblicante.nome_completo, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" \u{1F4CD} ", ctx_r1.annuncio.pubblicante == null ? null : ctx_r1.annuncio.pubblicante.quartiere == null ? null : ctx_r1.annuncio.pubblicante.quartiere.nome_quartiere, ", ", ctx_r1.annuncio.pubblicante == null ? null : ctx_r1.annuncio.pubblicante.quartiere == null ? null : ctx_r1.annuncio.pubblicante.quartiere.citta, " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx_r1.isMio() ? 29 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.giaSegnalato() ? 31 : ctx_r1.mostraSegnalaForm() ? 32 : 33);
  }
}
var AnnOverlayComponent = class _AnnOverlayComponent {
  segnalazioneService = inject(SegnalazioneService);
  annuncioService = inject(AnnuncioService);
  toast = inject(ToastService);
  auth = inject(AuthService);
  overlayService = inject(OverlayService);
  // Etichette leggibili per i valori dell'enum condizioni del DB
  LABEL_CONDIZIONI = {
    scarso: "Scarso",
    discreto: "Discreto",
    buono: "Buono",
    ottimo: "Ottimo",
    come_nuovo: "Come nuovo"
  };
  labelCondizione(value) {
    return this.LABEL_CONDIZIONI[value] ?? value;
  }
  giaSegnalato = signal(false);
  motivazione = signal("");
  mostraSegnalaForm = signal(false);
  isMio = signal(false);
  foto = signal([]);
  fotoIndice = signal(0);
  get annuncio() {
    return this.overlayService.annuncioSelezionato();
  }
  get aperto() {
    return this.overlayService.annOverlayAperto();
  }
  get fotoCorrente() {
    const f = this.foto();
    return f.length > 0 ? f[this.fotoIndice()] : null;
  }
  constructor() {
    effect(() => {
      const ann = this.overlayService.annuncioSelezionato();
      if (ann) {
        const utente = this.auth.utenteCorrente();
        this.isMio.set(ann.pubblicante?.id_utente_reg === utente?.id_utente_reg);
        this.mostraSegnalaForm.set(false);
        this.motivazione.set("");
        this.giaSegnalato.set(false);
        this._controllaGiaSegnalato(ann.id_annuncio);
        this.foto.set([]);
        this.fotoIndice.set(0);
        this.annuncioService.getFoto(ann.id_annuncio).subscribe({
          next: (f) => this.foto.set(f),
          error: () => {
          }
        });
      }
    });
  }
  fotoSuccessiva() {
    const n = this.foto().length;
    if (n > 1)
      this.fotoIndice.set((this.fotoIndice() + 1) % n);
  }
  fotoPrecedente() {
    const n = this.foto().length;
    if (n > 1)
      this.fotoIndice.set((this.fotoIndice() - 1 + n) % n);
  }
  chiudi() {
    this.overlayService.chiudiAnnuncio();
  }
  onBgClick(e) {
    if (e.target === e.currentTarget)
      this.chiudi();
  }
  apriProfiloUtente() {
    const ann = this.annuncio;
    if (!ann?.pubblicante)
      return;
    this.overlayService.apriUtente(ann.pubblicante.id_utente_reg);
  }
  apriModalProposta() {
    const ann = this.annuncio;
    if (!ann)
      return;
    this.chiudi();
    this.overlayService.apriProposta(ann);
  }
  apriSegnalaForm() {
    this.mostraSegnalaForm.set(true);
  }
  inviaSegnalazione() {
    const ann = this.annuncio;
    const mot = this.motivazione().trim();
    if (!ann || !mot) {
      this.toast.warn("Campo vuoto", "Inserisci una motivazione.", "\u26A0\uFE0F");
      return;
    }
    this.segnalazioneService.invia(ann.id_annuncio, mot).subscribe({
      next: () => {
        this.giaSegnalato.set(true);
        this.mostraSegnalaForm.set(false);
        this.toast.err("Segnalazione inviata", "I moderatori esamineranno l'annuncio.", "\u{1F6A9}");
        setTimeout(() => this.chiudi(), 1200);
      },
      error: (err) => {
        if (err.status === 409) {
          this.giaSegnalato.set(true);
          this.mostraSegnalaForm.set(false);
          this.toast.warn("Gi\xE0 segnalato", "Hai gi\xE0 segnalato questo annuncio.", "\u{1F6A9}");
        } else {
          this.toast.err("Errore", "Impossibile inviare la segnalazione.", "\u274C");
        }
      }
    });
  }
  /** Controlla sul BE se l'utente ha già una segnalazione non chiusa per questo annuncio */
  _controllaGiaSegnalato(idAnnuncio) {
    this.segnalazioneService.getMie().subscribe({
      next: (segnalazioni) => {
        const giaSegnalato = segnalazioni.some((s) => s.annuncio_segnalato?.id_annuncio === idAnnuncio && s.stato_segnalazione !== "chiusa");
        this.giaSegnalato.set(giaSegnalato);
      },
      error: () => {
      }
    });
  }
  static \u0275fac = function AnnOverlayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnnOverlayComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnnOverlayComponent, selectors: [["app-ann-overlay"]], decls: 1, vars: 1, consts: [[1, "ann-overlay-bg", "open"], [1, "ann-overlay-bg", "open", 3, "click"], [1, "ann-overlay-box"], [1, "ann-ov-img"], [1, "ann-ov-body"], [1, "ann-ov-title"], [1, "ann-ov-chips"], [1, "ann-ov-chip"], [1, "ann-ov-desc"], [1, "ann-ov-user", "ann-ov-user-click", 3, "click"], [1, "ann-ov-av", "av-lime"], [1, "av-img", 3, "src"], [1, "ann-ov-uname-btn"], [1, "ann-ov-uloc"], [1, "ann-ov-acts"], [1, "btn-ov-close", 3, "click"], [1, "btn-ov-prop"], [1, "ann-ov-segnala-wrapper"], ["disabled", "", 1, "btn-ov-segnala-mini"], [2, "width", "100%", "margin-top", "10px"], [1, "btn-ov-segnala-mini"], [2, "width", "100%", "height", "100%", "object-fit", "cover", "border-radius", "12px 12px 0 0", 3, "src"], [1, "foto-nav", "foto-nav-prev", 3, "click"], [1, "foto-nav", "foto-nav-next", 3, "click"], [1, "foto-dots"], [1, "foto-dot", 3, "active"], [1, "foto-dot"], [1, "btn-ov-prop", 3, "click"], ["rows", "3", "placeholder", "Descrivi il motivo della segnalazione...", 1, "fi", 2, "width", "100%", "margin-bottom", "8px", 3, "input", "value"], [2, "display", "flex", "gap", "8px"], [1, "btn-cancel2", 2, "flex", "1", 3, "click"], [1, "btn-segnala-invia", 3, "click"], [1, "btn-ov-segnala-mini", 3, "click"]], template: function AnnOverlayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AnnOverlayComponent_Conditional_0_Template, 34, 14, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.aperto ? 0 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.btn-segnala-invia[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--terra);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 0.85rem;\n  cursor: pointer;\n  font-weight: 600;\n  transition: opacity 0.2s;\n}\n.btn-segnala-invia[_ngcontent-%COMP%]:hover {\n  opacity: 0.82;\n}\n.btn-segnala-invia[_ngcontent-%COMP%]:active {\n  opacity: 0.65;\n}\n.foto-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(0, 0, 0, 0.45);\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  font-size: 1.2rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n.foto-nav[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7);\n}\n.foto-nav.foto-nav-prev[_ngcontent-%COMP%] {\n  left: 8px;\n}\n.foto-nav.foto-nav-next[_ngcontent-%COMP%] {\n  right: 8px;\n}\n.foto-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 5px;\n}\n.foto-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.5);\n}\n.foto-dot.active[_ngcontent-%COMP%] {\n  background: #fff;\n}\n/*# sourceMappingURL=ann-overlay.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnnOverlayComponent, { className: "AnnOverlayComponent", filePath: "app/shared/ann-overlay/ann-overlay.component.ts", lineNumber: 16 });
})();

// src/app/shared/user-overlay/user-overlay.component.ts
function UserOverlayComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p", 4);
    \u0275\u0275text(2, "Caricamento profilo...");
    \u0275\u0275elementEnd()();
  }
}
function UserOverlayComponent_Conditional_0_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.overlayService.utenteSelezionato().foto_profilo, \u0275\u0275sanitizeUrl);
  }
}
function UserOverlayComponent_Conditional_0_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.iniziali, " ");
  }
}
function UserOverlayComponent_Conditional_0_Conditional_3_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4, "\u2B50");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, ctx_r1.mediaVoto, "1.1-1"), " ");
  }
}
function UserOverlayComponent_Conditional_0_Conditional_3_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function UserOverlayComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275template(2, UserOverlayComponent_Conditional_0_Conditional_3_Conditional_2_Template, 1, 1, "img", 7)(3, UserOverlayComponent_Conditional_0_Conditional_3_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 10)(10, "div", 11)(11, "div", 12)(12, "div", 13);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 14);
    \u0275\u0275text(15, "punti");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12)(17, "div", 13);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 14);
    \u0275\u0275text(20, "kg CO\u2082");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 12)(22, "div", 13);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 14);
    \u0275\u0275text(25, "scambi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 12);
    \u0275\u0275template(27, UserOverlayComponent_Conditional_0_Conditional_3_Conditional_27_Template, 5, 4, "div", 15)(28, UserOverlayComponent_Conditional_0_Conditional_3_Conditional_28_Template, 2, 0, "div", 13);
    \u0275\u0275elementStart(29, "div", 14);
    \u0275\u0275text(30, "recensioni");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "button", 16);
    \u0275\u0275listener("click", function UserOverlayComponent_Conditional_0_Conditional_3_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.chiudi());
    });
    \u0275\u0275text(32, "Chiudi");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.overlayService.utenteSelezionato().foto_profilo ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.overlayService.utenteSelezionato().nome_completo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx_r1.overlayService.utenteSelezionato().indirizzo, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.overlayService.utenteSelezionato().punteggio);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.overlayService.utenteSelezionato().co2_totale);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.overlayService.utenteSelezionato().scambi_completati);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.mediaVoto ? 27 : 28);
  }
}
function UserOverlayComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function UserOverlayComponent_Conditional_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBgClick($event));
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275template(2, UserOverlayComponent_Conditional_0_Conditional_2_Template, 3, 0, "div", 3)(3, UserOverlayComponent_Conditional_0_Conditional_3_Template, 33, 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.overlayService.utenteSelezionato() ? 2 : 3);
  }
}
var UserOverlayComponent = class _UserOverlayComponent {
  overlayService = inject(OverlayService);
  get iniziali() {
    const nome = this.overlayService.utenteSelezionato()?.nome_completo || "";
    return nome.split(" ").map((p) => p[0]).join("").substring(0, 2).toUpperCase();
  }
  /** Media dei voti delle recensioni ricevute, oppure null se non ce ne sono. */
  get mediaVoto() {
    const r = this.overlayService.recensioniUtente();
    if (!r.length)
      return null;
    return r.reduce((acc, x) => acc + x.voto, 0) / r.length;
  }
  chiudi() {
    this.overlayService.chiudiUtente();
  }
  onBgClick(e) {
    if (e.target === e.currentTarget)
      this.chiudi();
  }
  static \u0275fac = function UserOverlayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserOverlayComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserOverlayComponent, selectors: [["app-user-overlay"]], decls: 1, vars: 1, consts: [[1, "user-overlay-bg", "open"], [1, "user-overlay-bg", "open", 3, "click"], [1, "user-overlay-box"], [2, "padding", "40px", "text-align", "center"], [1, "u-text-muted-sm"], [1, "uov-header"], [1, "uov-av", "av-lime"], [1, "av-img", 3, "src"], [1, "uov-name"], [1, "uov-loc"], [1, "uov-body"], [1, "uov-stats"], [1, "uov-stat"], [1, "uov-stat-n"], [1, "uov-stat-l"], [1, "uov-stat-n", "uov-stat-rating"], [1, "btn-uov-close", 3, "click"], [1, "uov-star"]], template: function UserOverlayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, UserOverlayComponent_Conditional_0_Template, 4, 1, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.overlayService.userOverlayAperto() ? 0 : -1);
    }
  }, dependencies: [CommonModule, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserOverlayComponent, { className: "UserOverlayComponent", filePath: "app/shared/user-overlay/user-overlay.component.ts", lineNumber: 12 });
})();

// src/app/shared/recensione-modal/recensione-modal.component.ts
function RecensioneModalComponent_Conditional_0_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275listener("mouseenter", function RecensioneModalComponent_Conditional_0_For_11_Template_span_mouseenter_0_listener() {
      const s_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hoverStella(s_r4));
    })("click", function RecensioneModalComponent_Conditional_0_For_11_Template_span_click_0_listener() {
      const s_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.impostaVoto(s_r4));
    });
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", s_r4 <= (ctx_r1.hoverVoto() || ctx_r1.voto()));
  }
}
function RecensioneModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function RecensioneModalComponent_Conditional_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBgClick($event));
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3, "\u2B50 Lascia una recensione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 4);
    \u0275\u0275text(5, "Il tuo scambio \xE8 completato! Condividi la tua esperienza.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7, "Seleziona il voto in stelle e inserisci un breve commento.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7);
    \u0275\u0275listener("mouseleave", function RecensioneModalComponent_Conditional_0_Template_div_mouseleave_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetHoverStelle());
    });
    \u0275\u0275repeaterCreate(10, RecensioneModalComponent_Conditional_0_For_11_Template, 2, 2, "span", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9)(13, "textarea", 10);
    \u0275\u0275listener("input", function RecensioneModalComponent_Conditional_0_Template_textarea_input_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.testo.set($event.target.value));
    });
    \u0275\u0275text(14, "        ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 11)(16, "button", 12);
    \u0275\u0275listener("click", function RecensioneModalComponent_Conditional_0_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.chiudi());
    });
    \u0275\u0275text(17, "Annulla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 13);
    \u0275\u0275listener("click", function RecensioneModalComponent_Conditional_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.invia());
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r1.stelle);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.testo());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading() ? "Invio in corso..." : "Invia recensione", " ");
  }
}
var RecensioneModalComponent = class _RecensioneModalComponent {
  http = inject(HttpClient);
  overlayService = inject(OverlayService);
  toast = inject(ToastService);
  auth = inject(AuthService);
  router = inject(Router);
  API = "http://localhost:8080/api";
  voto = signal(0);
  hoverVoto = signal(0);
  testo = signal("");
  loading = signal(false);
  stelle = [1, 2, 3, 4, 5];
  get aperto() {
    return this.overlayService.recensioneAperta();
  }
  impostaVoto(v) {
    this.voto.set(v);
  }
  hoverStella(v) {
    this.hoverVoto.set(v);
  }
  resetHoverStelle() {
    this.hoverVoto.set(0);
  }
  chiudi() {
    this.overlayService.chiudiRecensione();
    this.voto.set(0);
    this.hoverVoto.set(0);
    this.testo.set("");
  }
  onBgClick(e) {
    if (e.target === e.currentTarget)
      this.chiudi();
  }
  invia() {
    if (!this.voto()) {
      this.toast.warn("Valutazione mancante", "Seleziona almeno una stella.", "\u26A0\uFE0F");
      return;
    }
    if (!this.testo().trim()) {
      this.toast.warn("Testo mancante", "Inserisci un breve commento.", "\u26A0\uFE0F");
      return;
    }
    const idRecensito = this.overlayService.idUtenteRecensito();
    if (!idRecensito)
      return;
    const idChat = this.overlayService.idChatCompletata();
    this.loading.set(true);
    this.http.post(`${this.API}/recensioni`, {
      id_utente_reg_recensito: idRecensito,
      voto: this.voto(),
      descrizione_recensione: this.testo().trim(),
      id_chat: idChat
    }).subscribe({
      next: () => {
        this.loading.set(false);
        this.toast.ok("Recensione inviata!", "Grazie per aver aiutato la comunit\xE0.", "\u2B50");
        this.chiudi();
        this.router.navigate(["/profilo"]);
      },
      error: () => {
        this.loading.set(false);
        this.toast.err("Errore", "Impossibile inviare la recensione.", "\u274C");
      }
    });
  }
  static \u0275fac = function RecensioneModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecensioneModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecensioneModalComponent, selectors: [["app-recensione-modal"]], decls: 1, vars: 1, consts: [[1, "modal-bg", "open"], [1, "modal-bg", "open", 3, "click"], [1, "modal", "u-mw520"], [1, "modal-h"], [1, "u-text-muted-mb6"], [1, "u-text-note-mb16"], [1, "rating-stars-container"], [1, "rating-stars", 3, "mouseleave"], [1, "star-btn", 3, "active"], [1, "fg", "u-mb16-w100", 2, "margin-top", "16px"], ["rows", "3", "placeholder", "Come \xE8 andato lo scambio con il tuo vicino?", 1, "fi", 3, "input", "value"], [1, "modal-acts"], [1, "btn-cancel2", 3, "click"], [1, "btn-confirm", 3, "click", "disabled"], [1, "star-btn", 3, "mouseenter", "click"]], template: function RecensioneModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, RecensioneModalComponent_Conditional_0_Template, 20, 3, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.aperto ? 0 : -1);
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecensioneModalComponent, { className: "RecensioneModalComponent", filePath: "app/shared/recensione-modal/recensione-modal.component.ts", lineNumber: 16 });
})();

// src/app/shared/proposta-modal/proposta-modal.component.ts
var _forTrack02 = ($index, $item) => $item.id_annuncio;
function PropostaModalComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Caricamento annunci...");
    \u0275\u0275elementEnd();
  }
}
function PropostaModalComponent_Conditional_0_Conditional_11_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
function PropostaModalComponent_Conditional_0_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function PropostaModalComponent_Conditional_0_Conditional_11_For_2_Template_div_click_0_listener() {
      const ann_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAnnuncio(ann_r4.id_annuncio));
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275text(2, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 19);
    \u0275\u0275template(9, PropostaModalComponent_Conditional_0_Conditional_11_For_2_Conditional_9_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ann_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("border-color", ctx_r1.isSelezionato(ann_r4.id_annuncio) ? "var(--lime)" : "rgba(255,255,255,.07)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ann_r4.titolo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Condizioni: ", ann_r4.condizioni, " \xB7 valore stimato \u20AC", ann_r4.prezzo_stimato, " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.isSelezionato(ann_r4.id_annuncio) ? "var(--lime)" : "")("color", ctx_r1.isSelezionato(ann_r4.id_annuncio) ? "#07090f" : "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSelezionato(ann_r4.id_annuncio) ? 9 : -1);
  }
}
function PropostaModalComponent_Conditional_0_Conditional_11_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Nessun annuncio attivo da offrire.");
    \u0275\u0275elementEnd();
  }
}
function PropostaModalComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, PropostaModalComponent_Conditional_0_Conditional_11_For_2_Template, 10, 10, "div", 13, _forTrack02, false, PropostaModalComponent_Conditional_0_Conditional_11_ForEmpty_3_Template, 2, 0, "p", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.mieiAnnunci());
  }
}
function PropostaModalComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u2713 ", ctx_r1.nSelezionati, " ", ctx_r1.nSelezionati === 1 ? "annuncio selezionato" : "annunci selezionati", " ");
  }
}
function PropostaModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function PropostaModalComponent_Conditional_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBgClick($event));
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3, "\u{1F91D} Proponi uno scambio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 4);
    \u0275\u0275text(5, " Vuoi scambiare: ");
    \u0275\u0275elementStart(6, "strong", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9, " Seleziona uno o pi\xF9 tuoi annunci da offrire in cambio. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, PropostaModalComponent_Conditional_0_Conditional_10_Template, 2, 0, "p", 7)(11, PropostaModalComponent_Conditional_0_Conditional_11_Template, 4, 1, "div", 8)(12, PropostaModalComponent_Conditional_0_Conditional_12_Template, 2, 2, "div", 9);
    \u0275\u0275elementStart(13, "div", 10)(14, "button", 11);
    \u0275\u0275listener("click", function PropostaModalComponent_Conditional_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.chiudi());
    });
    \u0275\u0275text(15, "Annulla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 12);
    \u0275\u0275listener("click", function PropostaModalComponent_Conditional_0_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.inviaProposta());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.annuncioTarget == null ? null : ctx_r1.annuncioTarget.titolo);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.loadingAnnunci() ? 10 : 11);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.nSelezionati > 0 ? 12 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.nSelezionati === 0 || ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading() ? "Invio in corso..." : "Invia proposta", " ");
  }
}
var PropostaModalComponent = class _PropostaModalComponent {
  overlayService = inject(OverlayService);
  propostaService = inject(PropostaService);
  annuncioService = inject(AnnuncioService);
  toast = inject(ToastService);
  router = inject(Router);
  mieiAnnunci = signal([]);
  selezionati = signal(/* @__PURE__ */ new Set());
  loadingAnnunci = signal(false);
  loading = signal(false);
  get aperto() {
    return this.overlayService.propostaAperta();
  }
  get annuncioTarget() {
    return this.overlayService.annuncioTarget();
  }
  get nSelezionati() {
    return this.selezionati().size;
  }
  constructor() {
    effect(() => {
      if (this.overlayService.propostaAperta()) {
        this.loadingAnnunci.set(true);
        this.annuncioService.getMieiAnnunci().subscribe({
          next: (data) => {
            this.mieiAnnunci.set(data.filter((a) => a.stato_annuncio === "attivo"));
            this.loadingAnnunci.set(false);
          },
          error: () => this.loadingAnnunci.set(false)
        });
        this.selezionati.set(/* @__PURE__ */ new Set());
      }
    });
  }
  toggleAnnuncio(id) {
    this.selezionati.update((set) => {
      const n = new Set(set);
      if (n.has(id))
        n.delete(id);
      else
        n.add(id);
      return n;
    });
  }
  isSelezionato(id) {
    return this.selezionati().has(id);
  }
  chiudi() {
    this.overlayService.chiudiProposta();
  }
  onBgClick(e) {
    if (e.target === e.currentTarget)
      this.chiudi();
  }
  inviaProposta() {
    const target = this.annuncioTarget;
    if (!target || !this.nSelezionati)
      return;
    this.loading.set(true);
    this.propostaService.invia(target.id_annuncio, Array.from(this.selezionati())).subscribe({
      next: () => {
        this.loading.set(false);
        this.toast.ok("Proposta inviata! \u{1F91D}", "L'utente ricever\xE0 la tua proposta.", "\u{1F4E4}");
        this.chiudi();
        setTimeout(() => this.router.navigate(["/proposte"], {
          queryParams: { tab: "inv" }
        }), 900);
      },
      error: () => {
        this.loading.set(false);
        this.toast.err("Errore", "Impossibile inviare la proposta.", "\u274C");
      }
    });
  }
  static \u0275fac = function PropostaModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PropostaModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PropostaModalComponent, selectors: [["app-proposta-modal"]], decls: 1, vars: 1, consts: [[1, "modal-bg", "open", 2, "z-index", "900"], [1, "modal-bg", "open", 2, "z-index", "900", 3, "click"], [1, "modal", "u-mw520"], [1, "modal-h"], [1, "u-text-muted-mb6"], [1, "u-clr-txt"], [1, "u-text-note-mb16"], [1, "u-text-muted-sm"], [1, "u-col-gap8-mb18"], [1, "proponi-note-box", 2, "display", "block"], [1, "modal-acts"], [1, "btn-cancel2", 3, "click"], [1, "btn-confirm", 3, "click", "disabled"], [1, "ricevi-item-base", 3, "borderColor"], [1, "ricevi-item-base", 3, "click"], [1, "u-text-lg"], [1, "u-flex1"], [1, "u-text-sm-bold"], [1, "u-text-xs-muted"], [1, "ricevi-check-base", "ricevi-check-flex"]], template: function PropostaModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PropostaModalComponent_Conditional_0_Template, 18, 5, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.aperto ? 0 : -1);
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PropostaModalComponent, { className: "PropostaModalComponent", filePath: "app/shared/proposta-modal/proposta-modal.component.ts", lineNumber: 16 });
})();

// src/app/shared/modifica-profilo/modifica-profilo.component.ts
var _forTrack03 = ($index, $item) => $item.id_quartiere;
function ModificaProfiloComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.fotoPreview(), \u0275\u0275sanitizeUrl);
  }
}
function ModificaProfiloComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r1.auth.utenteCorrente()) == null ? null : tmp_2_0.nome_completo == null ? null : (tmp_2_0 = tmp_2_0.nome_completo.substring(0, 2)) == null ? null : tmp_2_0.toUpperCase(), " ");
  }
}
function ModificaProfiloComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function ModificaProfiloComponent_Conditional_0_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.fotoPreview.set(null));
    });
    \u0275\u0275text(1, " Rimuovi foto ");
    \u0275\u0275elementEnd();
  }
}
function ModificaProfiloComponent_Conditional_0_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
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
function ModificaProfiloComponent_Conditional_0_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
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
function ModificaProfiloComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ModificaProfiloComponent_Conditional_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBgClick($event));
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3, "\u270F\uFE0F Modifica profilo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 4)(5, "div", 5)(6, "div", 6);
    \u0275\u0275template(7, ModificaProfiloComponent_Conditional_0_Conditional_7_Template, 1, 1, "img", 7)(8, ModificaProfiloComponent_Conditional_0_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label", 8);
    \u0275\u0275text(10, " \u{1F4F7} Cambia foto profilo ");
    \u0275\u0275elementStart(11, "input", 9);
    \u0275\u0275listener("change", function ModificaProfiloComponent_Conditional_0_Template_input_change_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFotoChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ModificaProfiloComponent_Conditional_0_Conditional_12_Template, 2, 0, "button", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 11)(14, "label", 12);
    \u0275\u0275text(15, "Indirizzo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 11)(18, "label", 12);
    \u0275\u0275text(19, "Citt\xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 14);
    \u0275\u0275listener("change", function ModificaProfiloComponent_Conditional_0_Template_select_change_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCittaChange($event));
    });
    \u0275\u0275elementStart(21, "option", 15);
    \u0275\u0275text(22, "Seleziona citt\xE0...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(23, ModificaProfiloComponent_Conditional_0_For_24_Template, 2, 2, "option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 11)(26, "label", 12);
    \u0275\u0275text(27, "Quartiere");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 17)(29, "option", 15);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(31, ModificaProfiloComponent_Conditional_0_For_32_Template, 2, 2, "option", 16, _forTrack03);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 11)(34, "label", 12);
    \u0275\u0275text(35, "Nuova password (opzionale)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 19)(38, "label", 12);
    \u0275\u0275text(39, "Conferma nuova password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 21)(42, "button", 22);
    \u0275\u0275listener("click", function ModificaProfiloComponent_Conditional_0_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.chiudi());
    });
    \u0275\u0275text(43, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 23);
    \u0275\u0275listener("click", function ModificaProfiloComponent_Conditional_0_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.salva());
    });
    \u0275\u0275text(45, " Salva modifiche ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.fotoPreview() ? 7 : 8);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.fotoPreview() ? 12 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.citta);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.quartieriFiltrarti().length === 0 ? "Scegli prima una citt\xE0..." : "Seleziona quartiere...", " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.quartieriFiltrarti());
  }
}
var ModificaProfiloComponent = class _ModificaProfiloComponent {
  fb = inject(FormBuilder);
  utenteService = inject(UtenteService);
  quartiereService = inject(QuartiereService);
  toast = inject(ToastService);
  overlayService = inject(OverlayService);
  auth = inject(AuthService);
  fotoPreview = signal(null);
  quartieriList = [];
  citta = [];
  quartieriFiltrarti = signal([]);
  loading = signal(false);
  get aperto() {
    return this.overlayService.modificaProfiloAperta();
  }
  form = this.fb.group({
    indirizzo: [""],
    citta: [""],
    id_quartiere: [""],
    password_nuova: [""],
    password_conferma: [""]
  });
  constructor() {
    this.quartiereService.getAll().subscribe({
      next: (q) => {
        this.quartieriList = q;
        this.citta = [...new Set(q.map((x) => x.citta))];
      }
    });
    effect(() => {
      if (this.overlayService.modificaProfiloAperta()) {
        const utente = this.auth.utenteCorrente();
        this.form.patchValue({
          indirizzo: utente?.indirizzo || "",
          citta: utente?.quartiere?.citta || "",
          id_quartiere: utente?.quartiere?.id_quartiere || ""
        });
        this.quartieriFiltrarti.set(this.quartieriList.filter((q) => q.citta === utente?.quartiere?.citta));
        this.fotoPreview.set(utente?.foto_profilo || null);
      }
    });
  }
  chiudi() {
    this.overlayService.chiudiModificaProfilo();
  }
  onBgClick(e) {
    if (e.target === e.currentTarget)
      this.chiudi();
  }
  onCittaChange(event) {
    const citta = event.target.value;
    this.form.get("id_quartiere")?.setValue("");
    this.quartieriFiltrarti.set(this.quartieriList.filter((q) => q.citta === citta));
  }
  onFotoChange(event) {
    const input = event.target;
    if (!input.files?.length)
      return;
    const reader = new FileReader();
    reader.onload = (e) => this.fotoPreview.set(e.target?.result);
    reader.readAsDataURL(input.files[0]);
  }
  salva() {
    const v = this.form.value;
    if (v.password_nuova && v.password_nuova !== v.password_conferma) {
      this.toast.warn("Password diversa", "Le due password non coincidono.", "\u26A0\uFE0F");
      return;
    }
    const quartiere = this.quartieriList.find((q) => q.id_quartiere === Number(v.id_quartiere));
    const dati = {};
    if (v.indirizzo)
      dati.indirizzo = v.indirizzo;
    if (quartiere)
      dati.quartiere = quartiere;
    if (v.password_nuova)
      dati.password = v.password_nuova;
    dati.foto_profilo = this.fotoPreview() || null;
    this.loading.set(true);
    this.utenteService.aggiornaProfilo(dati).subscribe({
      next: (utente) => {
        this.auth.aggiornaProfilo(utente);
        this.loading.set(false);
        this.toast.ok("Profilo aggiornato!", "Le modifiche sono state salvate.", "\u2705");
        this.chiudi();
      },
      error: () => {
        this.loading.set(false);
        this.toast.err("Errore", "Impossibile aggiornare il profilo.", "\u274C");
      }
    });
  }
  static \u0275fac = function ModificaProfiloComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModificaProfiloComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModificaProfiloComponent, selectors: [["app-modifica-profilo"]], decls: 1, vars: 1, consts: [[1, "modal-bg", "open"], [1, "modal-bg", "open", 3, "click"], [1, "modal", "u-mw520"], [1, "modal-h"], [3, "formGroup"], [2, "display", "flex", "flex-direction", "column", "align-items", "center", "gap", "12px", "margin-bottom", "20px"], [1, "prof-av", 2, "width", "80px", "height", "80px", "font-size", "2rem", "position", "relative"], [2, "width", "100%", "height", "100%", "object-fit", "cover", "border-radius", "50%", 3, "src"], [2, "cursor", "pointer", "color", "var(--lime)", "font-size", ".82rem", "font-weight", "600"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["type", "button", 2, "background", "none", "border", "none", "color", "var(--terra)", "font-size", ".75rem", "cursor", "pointer"], [1, "fg", 2, "margin-bottom", "12px"], [1, "fl"], ["type", "text", "formControlName", "indirizzo", "placeholder", "Via Roma 12", 1, "fi"], ["formControlName", "citta", 1, "fi", 3, "change"], ["value", ""], [3, "value"], ["formControlName", "id_quartiere", 1, "fi"], ["type", "password", "formControlName", "password_nuova", "placeholder", "Lascia vuoto per non modificarla", 1, "fi"], [1, "fg", 2, "margin-bottom", "20px"], ["type", "password", "formControlName", "password_conferma", "placeholder", "Ripeti la nuova password", 1, "fi"], [1, "modal-acts"], ["type", "button", 1, "btn-cancel2", 3, "click"], ["type", "button", 1, "btn-confirm", 3, "click"], ["type", "button", 2, "background", "none", "border", "none", "color", "var(--terra)", "font-size", ".75rem", "cursor", "pointer", 3, "click"]], template: function ModificaProfiloComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ModificaProfiloComponent_Conditional_0_Template, 46, 4, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.aperto ? 0 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModificaProfiloComponent, { className: "ModificaProfiloComponent", filePath: "app/shared/modifica-profilo/modifica-profilo.component.ts", lineNumber: 17 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar")(1, "app-toast")(2, "router-outlet")(3, "app-ann-overlay")(4, "app-user-overlay")(5, "app-recensione-modal")(6, "app-proposta-modal")(7, "app-modifica-profilo");
    }
  }, dependencies: [
    RouterOutlet,
    NavbarComponent,
    ToastComponent,
    AnnOverlayComponent,
    UserOverlayComponent,
    RecensioneModalComponent,
    PropostaModalComponent,
    ModificaProfiloComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "app/app.component.ts", lineNumber: 23 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
