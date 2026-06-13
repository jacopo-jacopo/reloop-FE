import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private http = inject(HttpClient);
  private readonly API = 'http://localhost:8080/api';

  /** Tutte le chat dell'utente loggato */
  getMie(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/chat`);
  }

  /** Messaggi di una chat, ordinati cronologicamente */
  getMessaggi(idChat: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/chat/${idChat}/messaggi`);
  }

  /** Invia un messaggio in una chat aperta */
  inviaMessaggio(idChat: number, contenuto: string): Observable<any> {
    return this.http.post<any>(`${this.API}/chat/${idChat}/messaggi`, { contenuto });
  }

  /**
   * Completa uno scambio.
   * Il BE restituisce: { chat, co2_risparmiata, id_altro_utente }
   */
  completa(idChat: number): Observable<any> {
    return this.http.put<any>(`${this.API}/chat/${idChat}/completa`, {});
  }

  /**
   * Annulla uno scambio.
   * Riporta gli annunci ad attivo e la proposta a rifiutata.
   */
  annulla(idChat: number): Observable<any> {
    return this.http.put<any>(`${this.API}/chat/${idChat}/annulla`, {});
  }

  /** Segna come letti tutti i messaggi ricevuti nella chat. */
  leggi(idChat: number): Observable<any> {
    return this.http.put<any>(`${this.API}/chat/${idChat}/leggi`, {});
  }
}