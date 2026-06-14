import {
  HttpClient,
  inject,
  signal,
  ɵɵdefineInjectable
} from "./chunk-3SNN5JWR.js";

// src/app/core/services/utente.service.ts
var UtenteService = class _UtenteService {
  http = inject(HttpClient);
  API = "http://localhost:8080/api";
  /** Profilo dell'utente loggato */
  getProfilo() {
    return this.http.get(`${this.API}/utenti/me`);
  }
  /** Profilo pubblico di un utente per ID */
  getById(id) {
    return this.http.get(`${this.API}/utenti/${id}`);
  }
  /** Classifica utenti ordinata per punteggio */
  getLeaderboard() {
    return this.http.get(`${this.API}/utenti/leaderboard`);
  }
  /** Badge già sbloccati dall'utente loggato */
  getBadgeOttenuti() {
    return this.http.get(`${this.API}/utenti/me/badge`);
  }
  /** Tutti i badge disponibili nella piattaforma */
  getTuttiBadge() {
    return this.http.get(`${this.API}/utenti/badge/tutti`);
  }
  /** Recensioni ricevute da un utente */
  getRecensioni(idUtente) {
    return this.http.get(`${this.API}/recensioni/${idUtente}`);
  }
  /**
   * Aggiorna il profilo dell'utente loggato.
   * Body può contenere: nome_completo, indirizzo, password, foto_profilo, quartiere
   */
  aggiornaProfilo(dati) {
    return this.http.put(`${this.API}/utenti/me`, dati);
  }
  static \u0275fac = function UtenteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UtenteService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UtenteService, factory: _UtenteService.\u0275fac, providedIn: "root" });
};

// src/app/core/services/overlay.service.ts
var OverlayService = class _OverlayService {
  utenteService = inject(UtenteService);
  // ── Ann Overlay ──
  annOverlayAperto = signal(false);
  annuncioSelezionato = signal(null);
  apriAnnuncio(ann) {
    this.annuncioSelezionato.set(ann);
    this.annOverlayAperto.set(true);
  }
  chiudiAnnuncio() {
    this.annOverlayAperto.set(false);
    this.annuncioSelezionato.set(null);
  }
  // ── User Overlay ──
  userOverlayAperto = signal(false);
  idUtenteSelezionato = signal(null);
  utenteSelezionato = signal(null);
  recensioniUtente = signal([]);
  apriUtente(idUtente) {
    this.idUtenteSelezionato.set(idUtente);
    this.utenteSelezionato.set(null);
    this.recensioniUtente.set([]);
    this.userOverlayAperto.set(true);
    this.utenteService.getById(idUtente).subscribe({
      next: (u) => this.utenteSelezionato.set(u),
      error: () => {
      }
    });
    this.utenteService.getRecensioni(idUtente).subscribe({
      next: (r) => this.recensioniUtente.set(r),
      error: () => {
      }
    });
  }
  chiudiUtente() {
    this.userOverlayAperto.set(false);
    this.idUtenteSelezionato.set(null);
    this.utenteSelezionato.set(null);
    this.recensioniUtente.set([]);
  }
  // ── Recensione Modal ──
  recensioneAperta = signal(false);
  idUtenteRecensito = signal(null);
  idChatCompletata = signal(null);
  apriRecensione(idUtente, idChat) {
    this.idUtenteRecensito.set(idUtente);
    this.idChatCompletata.set(idChat);
    this.recensioneAperta.set(true);
  }
  chiudiRecensione() {
    this.recensioneAperta.set(false);
    this.idUtenteRecensito.set(null);
    this.idChatCompletata.set(null);
  }
  // ── Proposta Modal ──
  propostaAperta = signal(false);
  annuncioTarget = signal(null);
  apriProposta(ann) {
    this.annuncioTarget.set(ann);
    this.propostaAperta.set(true);
  }
  chiudiProposta() {
    this.propostaAperta.set(false);
    this.annuncioTarget.set(null);
  }
  // ── Modifica Profilo ──
  modificaProfiloAperta = signal(false);
  apriModificaProfilo() {
    this.modificaProfiloAperta.set(true);
  }
  chiudiModificaProfilo() {
    this.modificaProfiloAperta.set(false);
  }
  static \u0275fac = function OverlayService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OverlayService, factory: _OverlayService.\u0275fac, providedIn: "root" });
};

export {
  UtenteService,
  OverlayService
};
//# sourceMappingURL=chunk-EEAG4X3M.js.map
