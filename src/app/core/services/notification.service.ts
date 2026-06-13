import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private http = inject(HttpClient);
  private auth = inject(AuthService);
  private readonly API = 'http://localhost:8080/api';

  chatNonLette  = signal<Set<number>>(new Set());
  chatBadge     = signal(false);
  proposteBadge = signal(false);

  carica() {
    if (!this.auth.isLoggedIn()) return;
    const userId = this._userId();
    if (!userId) return;
    this._caricaChat(userId);
    this._caricaProposte(userId);
  }

  /** Aggiorna ultima_visita_proposte nel DB e azzera il badge. */
  visitaProposte() {
    const userId = this._userId();
    if (!userId) return;
    this.http.put(`${this.API}/utenti/visita-proposte`, {}, {
      headers: { 'X-User-Id': userId }
    }).subscribe();
    this.proposteBadge.set(false);
  }

  /** Aggiorna ultima_visita_chat nel DB e azzera il badge delle chat vuote. */
  visitaChat() {
    const userId = this._userId();
    if (!userId) return;
    this.http.put(`${this.API}/utenti/visita-chat`, {}, {
      headers: { 'X-User-Id': userId }
    }).subscribe();
  }

  segnaLetta(idChat: number) {
    this.chatNonLette.update(s => { const n = new Set(s); n.delete(idChat); return n; });
    this.chatBadge.set(this.chatNonLette().size > 0);
  }

  hasChatNonLetta(idChat: number): boolean {
    return this.chatNonLette().has(idChat);
  }

  private _caricaChat(userId: string) {
    this.http
      .get<{ messaggi_non_letti: number[]; chat_vuote: number[] }>(
        `${this.API}/chat/non-letti`,
        { headers: { 'X-User-Id': userId } }
      )
      .subscribe({
        next: ({ messaggi_non_letti, chat_vuote }) => {
          const result = new Set<number>([
            ...(messaggi_non_letti ?? []),
            ...(chat_vuote ?? [])
          ]);
          this.chatNonLette.set(result);
          this.chatBadge.set(result.size > 0);
        },
        error: (err) => console.error('[NotificationService] chat/non-letti:', err)
      });
  }

  private _caricaProposte(userId: string) {
    this.http
      .get<number>(`${this.API}/proposte/badge`, { headers: { 'X-User-Id': userId } })
      .subscribe({
        next: (count) => this.proposteBadge.set(count > 0),
        error: (err) => console.error('[NotificationService] proposte/badge:', err)
      });
  }

  private _userId(): string | null {
    const u  = this.auth.utenteCorrente() as any;
    const id = u?.id_utente_reg ?? u?.id_utente_adm;
    return id ? String(id) : null;
  }
}
