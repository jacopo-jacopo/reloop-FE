import {
  HttpClient,
  inject,
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

export {
  UtenteService
};
//# sourceMappingURL=chunk-MS2JQD6X.js.map
