import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PropostaService {
  private http = inject(HttpClient);
  private readonly API = 'http://localhost:8080/api';

  /** Proposte ricevute dall'utente (sui suoi annunci) */
  getRicevute(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/proposte/ricevute`);
  }

  /** Proposte inviate dall'utente */
  getInviate(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/proposte/inviate`);
  }

  /** Invia una proposta — body: id_annuncio_interesse + id_annunci_offerti */
  invia(idAnnuncioInteresse: number, idAnnunciOfferti: number[]): Observable<any> {
    return this.http.post<any>(`${this.API}/proposte`, {
      id_annuncio_interesse: idAnnuncioInteresse,
      id_annunci_offerti:    idAnnunciOfferti
    });
  }

  /** Accetta una proposta scegliendo quale annuncio offerto prendere */
  accetta(idProposta: number, idAnnuncioScelto: number): Observable<any> {
    return this.http.put<any>(`${this.API}/proposte/${idProposta}/accetta`, {
      id_annuncio_scelto: idAnnuncioScelto
    });
  }

  /** Rifiuta una proposta */
  rifiuta(idProposta: number): Observable<any> {
    return this.http.put<any>(`${this.API}/proposte/${idProposta}/rifiuta`, {});
  }
}