import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Notifica } from '../../models/notifica.model';

// @Injectable({ providedIn: 'root' }) crea un singleton di NotificaService, cioè solo un'istanza in tutta l'app
// in modo che i signal leggano e scrivano sempre sugli stessi valori (globalmente)
@Injectable({ providedIn: 'root' })
export class NotificaService {
  private http = inject(HttpClient);
  private auth = inject(AuthService);
  private readonly API = 'http://localhost:8080/api';

  notificheBadge = signal(false);

  // carica il badge in caso di notifiche non lette
  caricaBadge() {
    if (!this.auth.isLoggedIn()) return;
    const userId = this._userId();
    if (!userId) return;
    this.http.get<number>(`${this.API}/notifiche/badge`, { headers: { 'X-User-Id': userId } })
      .subscribe({ next: (n) => this.notificheBadge.set(n > 0), error: () => {} });
  }

  // restituisce le notifiche dell'utente loggato
  getMie() {
    const userId = this._userId();
    return this.http.get<Notifica[]>(`${this.API}/notifiche`, { headers: { 'X-User-Id': userId! } });
  }

  // segna una notifica come letta
  segnaLetta(id: number) {
    return this.http.put<void>(`${this.API}/notifiche/${id}/letta`, {});
  }

  // segna tutte le notifiche come lette
  segnaTutteLette() {
    const userId = this._userId();
    return this.http.put<void>(`${this.API}/notifiche/leggi-tutte`, {}, { headers: { 'X-User-Id': userId! } });
  }

  // azzera il badge delle notifiche non lette
  azzera() { this.notificheBadge.set(false); }

  // restituisce l'id dell'utente loggato
  private _userId(): string | null {
    const u  = this.auth.utenteCorrente() as any;
    const id = u?.id_utente_reg ?? u?.id_utente_adm;
    return id ? String(id) : null;
  }
}
