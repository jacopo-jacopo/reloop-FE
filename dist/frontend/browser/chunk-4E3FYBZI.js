import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-3SNN5JWR.js";

// src/app/core/services/quartiere.service.ts
var QuartiereService = class _QuartiereService {
  http = inject(HttpClient);
  API = "http://localhost:8080/api";
  getAll() {
    return this.http.get(`${this.API}/quartieri`);
  }
  static \u0275fac = function QuartiereService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuartiereService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuartiereService, factory: _QuartiereService.\u0275fac, providedIn: "root" });
};

export {
  QuartiereService
};
//# sourceMappingURL=chunk-4E3FYBZI.js.map
