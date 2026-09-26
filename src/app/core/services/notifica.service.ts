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
    this.http.get<number>(`${this.API}/notifiche/badge`)
      .subscribe({ next: (n) => this.notificheBadge.set(n > 0), error: (err) => console.error(err) });
  }

  // restituisce le notifiche dell'utente loggato
  getMie() {
    return this.http.get<Notifica[]>(`${this.API}/notifiche`);
  }

  // segna una notifica come letta
  segnaLetta(id: number) {
    return this.http.put<void>(`${this.API}/notifiche/${id}/letta`, {});
  }

  // segna tutte le notifiche come lette
  segnaTutteLette() {
    return this.http.put<void>(`${this.API}/notifiche/leggi-tutte`, {});
  }

  // azzera il badge delle notifiche non lette
  azzera() { this.notificheBadge.set(false); }
}
