import {
  AuthService,
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-3V7QK2LV.js";

// src/app/core/services/annuncio.service.ts
var AnnuncioService = class _AnnuncioService {
  http = inject(HttpClient);
  auth = inject(AuthService);
  API = "http://localhost:8080/api";
  /** Annunci attivi del quartiere dell'utente, esclusi i propri */
  getAnnunciQuartiere() {
    const utente = this.auth.utenteCorrente();
    const idQuartiere = utente?.quartiere?.id_quartiere;
    return this.http.get(`${this.API}/annunci?quartiere=${idQuartiere}`);
  }
  /** Ultimi 3 annunci del quartiere — usato nella home */
  getAnnunciRecenti() {
    const utente = this.auth.utenteCorrente();
    const idQuartiere = utente?.quartiere?.id_quartiere;
    return this.http.get(`${this.API}/annunci?quartiere=${idQuartiere}&limit=3`);
  }
  /** Tutti gli annunci dell'utente loggato (tutti gli stati) */
  getMieiAnnunci() {
    return this.http.get(`${this.API}/utenti/me/annunci`);
  }
  /** Singolo annuncio per ID */
  getById(id) {
    return this.http.get(`${this.API}/annunci/${id}`);
  }
  /** Pubblica un nuovo annuncio con eventuali foto base64 */
  pubblica(dati) {
    return this.http.post(`${this.API}/annunci`, {
      titolo: dati.titolo,
      categoria: dati.categoria,
      descrizione_annuncio: dati.descrizione_annuncio || "",
      prezzo_stimato: dati.prezzo_stimato,
      condizioni: dati.condizioni,
      foto: dati.foto || []
    });
  }
  /** Foto di un annuncio come array di stringhe base64 */
  getFoto(idAnnuncio) {
    return this.http.get(`${this.API}/annunci/${idAnnuncio}/foto`);
  }
  /** Chiude un annuncio (stato → chiuso) */
  chiudi(id) {
    return this.http.put(`${this.API}/annunci/${id}`, {
      stato_annuncio: "chiuso"
    });
  }
  /** Segna come letta la notifica di oscuramento di un annuncio */
  segnaNotificaOscuramentoLetta(id) {
    return this.http.put(`${this.API}/annunci/${id}`, {
      notifica_oscuramento_letta: true
    });
  }
  /** Elimina definitivamente un annuncio */
  elimina(id) {
    return this.http.delete(`${this.API}/annunci/${id}`);
  }
  /** CO₂ risparmiata dal quartiere dell'utente */
  getCo2Quartiere() {
    const utente = this.auth.utenteCorrente();
    const idQuartiere = utente?.quartiere?.id_quartiere;
    return this.http.get(`${this.API}/stats/co2-quartiere?quartiere=${idQuartiere}`);
  }
  static \u0275fac = function AnnuncioService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnnuncioService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AnnuncioService, factory: _AnnuncioService.\u0275fac, providedIn: "root" });
};

export {
  AnnuncioService
};
//# sourceMappingURL=chunk-Y4UJ2NKZ.js.map
