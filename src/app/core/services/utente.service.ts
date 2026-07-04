import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UtenteService {
  private http = inject(HttpClient);
  private readonly API = 'http://localhost:8080/api';

  /** Profilo dell'utente loggato */
  getProfilo(): Observable<any> {
    return this.http.get<any>(`${this.API}/utenti/me`);
  }

  /** Profilo pubblico di un utente per ID */
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API}/utenti/${id}`);
  }

  /** Classifica utenti ordinata per punteggio */
  getLeaderboard(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/utenti/leaderboard`);
  }

  /** Badge già sbloccati dall'utente loggato */
  getBadgeOttenuti(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/utenti/me/badge`);
  }

  /** Tutti i badge disponibili nella piattaforma */
  getTuttiBadge(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/utenti/badge/tutti`);
  }

  /** Recensioni ricevute da un utente */
  getRecensioni(idUtente: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/recensioni/${idUtente}`);
  }

  /**
   * Aggiorna il profilo dell'utente loggato.
   * Body può contenere: nome_completo, indirizzo, password, foto_profilo, quartiere
   */
  aggiornaProfilo(dati: any): Observable<any> {
    return this.http.put<any>(`${this.API}/utenti/me`, dati);
  }

  getAllAdmin(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/utenti`);
  }

  blocca(id: number, bloccato: boolean): Observable<any> {
    return this.http.put<any>(`${this.API}/utenti/${id}/blocca`, { bloccato });
  }
}