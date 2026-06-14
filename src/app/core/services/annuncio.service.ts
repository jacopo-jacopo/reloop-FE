import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AnnuncioService {
  private http = inject(HttpClient);
  private auth = inject(AuthService);
  private readonly API = 'http://localhost:8080/api';

  /** Annunci attivi del quartiere dell'utente, esclusi i propri */
  getAnnunciQuartiere(): Observable<any[]> {
    const utente      = this.auth.utenteCorrente() as any;
    const idQuartiere = utente?.quartiere?.id_quartiere;
    return this.http.get<any[]>(`${this.API}/annunci?quartiere=${idQuartiere}`);
  }

  /** Ultimi 3 annunci del quartiere — usato nella home */
  getAnnunciRecenti(): Observable<any[]> {
    const utente      = this.auth.utenteCorrente() as any;
    const idQuartiere = utente?.quartiere?.id_quartiere;
    return this.http.get<any[]>(`${this.API}/annunci?quartiere=${idQuartiere}&limit=3`);
  }

  /** Tutti gli annunci dell'utente loggato (tutti gli stati) */
  getMieiAnnunci(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/utenti/me/annunci`);
  }

  /** Singolo annuncio per ID */
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API}/annunci/${id}`);
  }

  /** Pubblica un nuovo annuncio con eventuali foto base64 */
  pubblica(dati: any): Observable<any> {
    return this.http.post<any>(`${this.API}/annunci`, {
      titolo:               dati.titolo,
      categoria:            dati.categoria,
      descrizione_annuncio: dati.descrizione_annuncio || '',
      prezzo_stimato:       dati.prezzo_stimato,
      condizioni:           dati.condizioni,
      foto:                 dati.foto || []
    });
  }

  /** Foto di un annuncio come array di stringhe base64 */
  getFoto(idAnnuncio: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.API}/annunci/${idAnnuncio}/foto`);
  }

  /** Chiude un annuncio (stato → chiuso) */
  chiudi(id: number): Observable<any> {
    return this.http.put<any>(`${this.API}/annunci/${id}`, {
      stato_annuncio: 'chiuso'
    });
  }

  /** Segna come letta la notifica di oscuramento di un annuncio */
  segnaNotificaOscuramentoLetta(id: number): Observable<any> {
    return this.http.put<any>(`${this.API}/annunci/${id}`, {
      notifica_oscuramento_letta: true
    });
  }

  /** Elimina definitivamente un annuncio */
  elimina(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/annunci/${id}`);
  }

  /** CO₂ risparmiata dal quartiere dell'utente */
  getCo2Quartiere(): Observable<number> {
    const utente      = this.auth.utenteCorrente() as any;
    const idQuartiere = utente?.quartiere?.id_quartiere;
    return this.http.get<number>(`${this.API}/stats/co2-quartiere?quartiere=${idQuartiere}`);
  }
}