import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' }) crea un singleton di PropostaService, cioè solo un'istanza in tutta l'app
// in modo che i signal leggano e scrivano sempre sugli stessi valori (globalmente)
@Injectable({ providedIn: 'root' })
export class PropostaService {
  private http = inject(HttpClient);
  private readonly API = 'http://localhost:8080/api';

  // il tipo di ritorno è Observable<any[]> perché rappresenta un flusso di dati asincrono (come Angular gestisce le risposte HTTP)

  // trova le proposte ricevute dall'utente loggato
  getRicevute(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/proposte/ricevute`);
  }

  // trova le proposte inviate dall'utente loggato
  getInviate(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/proposte/inviate`);
  }

  // invia una nuova proposta, specificando l'id dell'annuncio di interesse e gli id degli annunci offerti
  invia(idAnnuncioInteresse: number, idAnnunciOfferti: number[]): Observable<any> {
    return this.http.post<any>(`${this.API}/proposte`, {
      id_annuncio_interesse: idAnnuncioInteresse,
      id_annunci_offerti:    idAnnunciOfferti
    });
  }

  // accetta una proposta scegliendo quale annuncio offerto prendere
  accetta(idProposta: number, idAnnuncioScelto: number): Observable<any> {
    return this.http.put<any>(`${this.API}/proposte/${idProposta}/accetta`, {
      id_annuncio_scelto: idAnnuncioScelto
    });
  }

  // rifiuta una proposta
  rifiuta(idProposta: number): Observable<any> {
    return this.http.put<any>(`${this.API}/proposte/${idProposta}/rifiuta`, {});
  }
}