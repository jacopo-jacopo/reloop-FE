import {
  AuthService,
  HttpClient,
  inject,
  signal,
  ɵɵdefineInjectable
} from "./chunk-3SNN5JWR.js";

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  http = inject(HttpClient);
  auth = inject(AuthService);
  API = "http://localhost:8080/api";
  chatNonLette = signal(/* @__PURE__ */ new Set());
  chatBadge = signal(false);
  proposteBadge = signal(false);
  carica() {
    if (!this.auth.isLoggedIn())
      return;
    const userId = this._userId();
    if (!userId)
      return;
    this._caricaChat(userId);
    this._caricaProposte(userId);
  }
  /** Aggiorna ultima_visita_proposte nel DB e azzera il badge. */
  visitaProposte() {
    const userId = this._userId();
    if (!userId)
      return;
    this.http.put(`${this.API}/utenti/visita-proposte`, {}, {
      headers: { "X-User-Id": userId }
    }).subscribe();
    this.proposteBadge.set(false);
  }
  /** Aggiorna ultima_visita_chat nel DB e azzera il badge delle chat vuote. */
  visitaChat() {
    const userId = this._userId();
    if (!userId)
      return;
    this.http.put(`${this.API}/utenti/visita-chat`, {}, {
      headers: { "X-User-Id": userId }
    }).subscribe();
  }
  segnaLetta(idChat) {
    this.chatNonLette.update((s) => {
      const n = new Set(s);
      n.delete(idChat);
      return n;
    });
    this.chatBadge.set(this.chatNonLette().size > 0);
  }
  hasChatNonLetta(idChat) {
    return this.chatNonLette().has(idChat);
  }
  _caricaChat(userId) {
    this.http.get(`${this.API}/chat/non-letti`, { headers: { "X-User-Id": userId } }).subscribe({
      next: ({ messaggi_non_letti, chat_vuote }) => {
        const result = /* @__PURE__ */ new Set([
          ...messaggi_non_letti ?? [],
          ...chat_vuote ?? []
        ]);
        this.chatNonLette.set(result);
        this.chatBadge.set(result.size > 0);
      },
      error: (err) => console.error("[NotificationService] chat/non-letti:", err)
    });
  }
  _caricaProposte(userId) {
    this.http.get(`${this.API}/proposte/badge`, { headers: { "X-User-Id": userId } }).subscribe({
      next: (count) => this.proposteBadge.set(count > 0),
      error: (err) => console.error("[NotificationService] proposte/badge:", err)
    });
  }
  _userId() {
    const u = this.auth.utenteCorrente();
    const id = u?.id_utente_reg ?? u?.id_utente_adm;
    return id ? String(id) : null;
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};

export {
  NotificationService
};
//# sourceMappingURL=chunk-OAKHWBYB.js.map
