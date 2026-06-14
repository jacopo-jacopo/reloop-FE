import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-3V7QK2LV.js";

// src/app/core/services/proposta.service.ts
var PropostaService = class _PropostaService {
  http = inject(HttpClient);
  API = "http://localhost:8080/api";
  /** Proposte ricevute dall'utente (sui suoi annunci) */
  getRicevute() {
    return this.http.get(`${this.API}/proposte/ricevute`);
  }
  /** Proposte inviate dall'utente */
  getInviate() {
    return this.http.get(`${this.API}/proposte/inviate`);
  }
  /** Invia una proposta — body: id_annuncio_interesse + id_annunci_offerti */
  invia(idAnnuncioInteresse, idAnnunciOfferti) {
    return this.http.post(`${this.API}/proposte`, {
      id_annuncio_interesse: idAnnuncioInteresse,
      id_annunci_offerti: idAnnunciOfferti
    });
  }
  /** Accetta una proposta scegliendo quale annuncio offerto prendere */
  accetta(idProposta, idAnnuncioScelto) {
    return this.http.put(`${this.API}/proposte/${idProposta}/accetta`, {
      id_annuncio_scelto: idAnnuncioScelto
    });
  }
  /** Rifiuta una proposta */
  rifiuta(idProposta) {
    return this.http.put(`${this.API}/proposte/${idProposta}/rifiuta`, {});
  }
  static \u0275fac = function PropostaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PropostaService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PropostaService, factory: _PropostaService.\u0275fac, providedIn: "root" });
};

export {
  PropostaService
};
//# sourceMappingURL=chunk-TMEL3XZI.js.map
