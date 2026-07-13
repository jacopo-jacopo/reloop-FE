import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' }) crea un singleton di SegnalazioneService, cioè solo un'istanza in tutta l'app
// in modo che i signal leggano e scrivano sempre sugli stessi valori (globalmente)
@Injectable({ providedIn: 'root' })
export class SegnalazioneService {
  private http = inject(HttpClient);
  private readonly API = 'http://localhost:8080/api';

  // il tipo di ritorno è Observable<any[]> perché rappresenta un flusso di dati asincrono (come Angular gestisce le risposte HTTP)

  // segnalazioni dell'utente loggato
  getMie(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/segnalazioni/mie`);
  }

  // tutte le segnalazioni
  getTutte(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/segnalazioni`);
  }

  // invia una nuova segnalazione per un annuncio
  invia(idAnnuncio: number, motivazione: string): Observable<any> {
    return this.http.post<any>(`${this.API}/segnalazioni`, {
      id_annuncio_segnalato: idAnnuncio,
      motivazione
    });
  }

  // prende in carico una segnalazione (solo per admin)
  prendiInCarico(id: number): Observable<any> {
    return this.http.put<any>(`${this.API}/segnalazioni/${id}/carico`, {});
  }

  // chiude una segnalazione (solo per admin), se oscura è true, l'annuncio segnalato viene oscurato
  chiudi(id: number, oscura: boolean): Observable<any> {
    return this.http.put<any>(`${this.API}/segnalazioni/${id}/chiudi`, {
      oscura_annuncio: oscura
    });
  }
}