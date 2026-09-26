import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quartiere } from '../../models/quartiere.model';

// @Injectable({ providedIn: 'root' }) crea un singleton di QuartiereService, cioè solo un'istanza in tutta l'app
// in modo che i signal leggano e scrivano sempre sugli stessi valori (globalmente)
@Injectable({ providedIn: 'root' })
export class QuartiereService {
  private http = inject(HttpClient);
  private readonly API = 'http://localhost:8080/api';

  getAll(): Observable<Quartiere[]> {
    return this.http.get<Quartiere[]>(`${this.API}/quartieri`);
  }

  crea(nomeQuartiere: string, citta: string): Observable<Quartiere> {
    return this.http.post<Quartiere>(`${this.API}/quartieri`, { nome_quartiere: nomeQuartiere, citta });
  }

  aggiorna(id: number, nomeQuartiere: string, citta: string): Observable<Quartiere> {
    return this.http.put<Quartiere>(`${this.API}/quartieri/${id}`, { nome_quartiere: nomeQuartiere, citta });
  }
}