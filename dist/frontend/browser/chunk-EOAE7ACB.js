import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-3SNN5JWR.js";

// src/app/core/services/segnalazione.service.ts
var SegnalazioneService = class _SegnalazioneService {
  http = inject(HttpClient);
  API = "http://localhost:8080/api";
  /** Segnalazioni inviate dall'utente loggato */
  getMie() {
    return this.http.get(`${this.API}/segnalazioni/mie`);
  }
  /** Tutte le segnalazioni — solo admin */
  getTutte() {
    return this.http.get(`${this.API}/segnalazioni`);
  }
  /** Invia una segnalazione su un annuncio */
  invia(idAnnuncio, motivazione) {
    return this.http.post(`${this.API}/segnalazioni`, {
      id_annuncio_segnalato: idAnnuncio,
      motivazione
    });
  }
  /** Prende in carico una segnalazione — solo admin */
  prendiInCarico(id) {
    return this.http.put(`${this.API}/segnalazioni/${id}/carico`, {});
  }
  /**
   * Chiude una segnalazione.
   * Se oscura=true, l'annuncio viene impostato a "oscurato" (non più visibile).
   */
  chiudi(id, oscura) {
    return this.http.put(`${this.API}/segnalazioni/${id}/chiudi`, {
      oscura_annuncio: oscura
    });
  }
  static \u0275fac = function SegnalazioneService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SegnalazioneService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SegnalazioneService, factory: _SegnalazioneService.\u0275fac, providedIn: "root" });
};

export {
  SegnalazioneService
};
//# sourceMappingURL=chunk-EOAE7ACB.js.map
