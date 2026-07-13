import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' }) crea un singleton di UtenteService, cioè solo un'istanza in tutta l'app
// in modo che i signal leggano e scrivano sempre sugli stessi valori (globalmente)
@Injectable({ providedIn: 'root' })
export class UtenteService {
  private http = inject(HttpClient);
  private readonly API = 'http://localhost:8080/api';

  // il tipo di ritorno è Observable<any[]> perché rappresenta un flusso di dati asincrono (come Angular gestisce le risposte HTTP)

  // profilo dell'utente loggato
  getProfilo(): Observable<any> {
    return this.http.get<any>(`${this.API}/utenti/me`);
  }

  // utente specifico dato il suo id
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API}/utenti/${id}`);
  }

  // classifica degli utenti in base al punteggio
  getLeaderboard(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/utenti/leaderboard`);
  }

  // badge già sbloccati dall'utente loggato
  getBadgeOttenuti(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/utenti/me/badge`);
  }

  // tutti i badge disponibili nella piattaforma
  getTuttiBadge(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/utenti/badge/tutti`);
  }

  // recensioni ricevute da un utente
  getRecensioni(idUtente: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/recensioni/${idUtente}`);
  }

  // aggiorna il profilo dell'utente loggato,
  // il body può contenere: nome_completo, indirizzo, password, foto_profilo, quartiere
  aggiornaProfilo(dati: any): Observable<any> {
    return this.http.put<any>(`${this.API}/utenti/me`, dati);
  }

  // ottiene tutti gli utenti amministratori
  getAllAdmin(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/utenti`);
  }

  // blocca o sblocca un utente dato il suo id
  blocca(id: number, bloccato: boolean): Observable<any> {
    return this.http.put<any>(`${this.API}/utenti/${id}/blocca`, { bloccato });
  }
}