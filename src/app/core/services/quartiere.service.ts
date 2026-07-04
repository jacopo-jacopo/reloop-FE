import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' }) crea un singleton di QuartiereService, cioè solo un'istanza in tutta l'app
// in modo che i signal leggano e scrivano sempre sugli stessi valori (globalmente)
@Injectable({ providedIn: 'root' })
export class QuartiereService {
  private http = inject(HttpClient);
  private readonly API = 'http://localhost:8080/api';

  // il tipo di ritorno è Observable<any[]> perché rappresenta un flusso di dati asincrono (come Angular gestisce le risposte HTTP)
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/quartieri`);
  }

  // il tipo di ritorno è Observable<any[]> perché rappresenta un flusso di dati asincrono (come Angular gestisce le risposte HTTP)
  crea(nomeQuartiere: string, citta: string): Observable<any> {
    return this.http.post<any>(`${this.API}/quartieri`, { nome_quartiere: nomeQuartiere, citta });
  }

  // il tipo di ritorno è Observable<any[]> perché rappresenta un flusso di dati asincrono (come Angular gestisce le risposte HTTP)
  aggiorna(id: number, nomeQuartiere: string, citta: string): Observable<any> {
    return this.http.put<any>(`${this.API}/quartieri/${id}`, { nome_quartiere: nomeQuartiere, citta });
  }
}