import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SegnalazioneService {
  private http = inject(HttpClient);
  private readonly API = 'http://localhost:8080/api';

  /** Segnalazioni inviate dall'utente loggato */
  getMie(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/segnalazioni/mie`);
  }

  /** Tutte le segnalazioni — solo admin */
  getTutte(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/segnalazioni`);
  }

  /** Invia una segnalazione su un annuncio */
  invia(idAnnuncio: number, motivazione: string): Observable<any> {
    return this.http.post<any>(`${this.API}/segnalazioni`, {
      id_annuncio_segnalato: idAnnuncio,
      motivazione
    });
  }

  /** Prende in carico una segnalazione — solo admin */
  prendiInCarico(id: number): Observable<any> {
    return this.http.put<any>(`${this.API}/segnalazioni/${id}/carico`, {});
  }

  /**
   * Chiude una segnalazione.
   * Se oscura=true, l'annuncio viene impostato a "oscurato" (non più visibile).
   */
  chiudi(id: number, oscura: boolean): Observable<any> {
    return this.http.put<any>(`${this.API}/segnalazioni/${id}/chiudi`, {
      oscura_annuncio: oscura
    });
  }
}