import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

// @Injectable({ providedIn: 'root' }) crea un singleton di NotificationService, cioè solo un'istanza in tutta l'app
// in modo che i signal leggano e scrivano sempre sugli stessi valori (globalmente)
@Injectable({ providedIn: 'root' })
export class NotificationService {
  private http = inject(HttpClient);
  private auth = inject(AuthService);
  private readonly API = 'http://localhost:8080/api';

  chatNonLette  = signal<Set<number>>(new Set());
  chatBadge     = signal(false);
  proposteBadge = signal(false);

  // carica le notifiche di chat e proposte per l'utente loggato
  // se url inizia con /proposte, salta il badge proposte perché visitaProposte() lo gestisce
  carica(url?: string) {
    if (!this.auth.isLoggedIn()) return;
    const userId = this._userId();
    if (!userId) return;
    this._caricaChat(userId);
    if (!url?.startsWith('/proposte')) this._caricaProposte(userId);
  }

  // aggiorna ultima_visita_proposte nel db e azzera il badge delle proposte non lette
  visitaProposte() {
    const userId = this._userId();
    if (!userId) return;
    this.http.put(`${this.API}/utenti/visita-proposte`, {}, {
      headers: { 'X-User-Id': userId }
    }).subscribe();
    this.proposteBadge.set(false);
  }

  // aggiorna ultima_visita_chat nel db 
  visitaChat() {
    const userId = this._userId();
    if (!userId) return;
    this.http.put(`${this.API}/utenti/visita-chat`, {}, {
      headers: { 'X-User-Id': userId }
    }).subscribe();
  }

  // segnala che una chat è stata letta, rimuovendola dall'insieme delle chat con messaggi non letti
  segnaLetta(idChat: number) {
    this.chatNonLette.update(s => { const n = new Set(s);
                                    n.delete(idChat); 
                                    return n; });
    this.chatBadge.set(this.chatNonLette().size > 0);
  }

  // verifica se una chat è nuova o se ha messaggi non letti
  hasChatNonLetta(idChat: number): boolean {
    return this.chatNonLette().has(idChat);
  }

  // carica il badge in caso di chat con messaggi non letti o nuove chat
  private _caricaChat(userId: string) {
    this.http
      .get<{ messaggi_non_letti: number[]; chat_vuote: number[] }>( // gli array contengono gli id delle nuove chat o delle chat con nuovi messaggi
        `${this.API}/chat/non-letti`,
        { headers: { 'X-User-Id': userId } }
      )
      .subscribe({
        next: ({ messaggi_non_letti, chat_vuote }) => {
          const result = new Set<number>([...(messaggi_non_letti ?? []), ...(chat_vuote ?? [])]);
          this.chatNonLette.set(result);
          this.chatBadge.set(result.size > 0);
        },
        error: (err) => console.error('[NotificationService] chat/non-letti:', err)
      });
  }

  // carica il badge in caso di proposte non lette
  private _caricaProposte(userId: string) {
    this.http
      .get<number>(`${this.API}/proposte/badge`, { headers: { 'X-User-Id': userId } })
      .subscribe({
        next: (count) => this.proposteBadge.set(count > 0),
        error: (err) => console.error('[NotificationService] proposte/badge:', err)
      });
  }

  // restituisce l'id dell'utente loggato (admin o registrato)
  private _userId(): string | null {
    const u  = this.auth.utenteCorrente() as any;
    const id = u?.id_utente_reg ?? u?.id_utente_adm;
    return id ? String(id) : null;
  }
}
