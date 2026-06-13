import {
  signal,
  ɵɵdefineInjectable
} from "./chunk-3SNN5JWR.js";

// src/app/core/services/overlay.service.ts
var OverlayService = class _OverlayService {
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
  apriUtente(idUtente) {
    this.idUtenteSelezionato.set(idUtente);
    this.userOverlayAperto.set(true);
  }
  chiudiUtente() {
    this.userOverlayAperto.set(false);
    this.idUtenteSelezionato.set(null);
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
  OverlayService
};
//# sourceMappingURL=chunk-LAONVNUN.js.map
