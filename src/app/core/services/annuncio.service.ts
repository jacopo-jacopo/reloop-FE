import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

// @Injectable({ providedIn: 'root' }) crea un singleton di AnnuncioService, cioè solo un'istanza in tutta l'app 
// in modo che i signal leggano e scrivano sempre sugli stessi valori (globalmente)
@Injectable({ providedIn: 'root' })
export class AnnuncioService {
  private http = inject(HttpClient);
  private auth = inject(AuthService);
  private readonly API = 'http://localhost:8080/api';

  // recupera tutti gli annunci del quartiere dell'utente loggato, usato in Annunci
  getAnnunciQuartiere(): Observable<any[]> {
    const utente      = this.auth.utenteCorrente() as any;
    const idQuartiere = utente?.quartiere?.id_quartiere;
    return this.http.get<any[]>(`${this.API}/annunci?quartiere=${idQuartiere}`);
  }

  // recupera gli ultimi 3 annunci del quartiere dell'utente loggato, usato in Home
  getAnnunciRecenti(): Observable<any[]> {
    const utente      = this.auth.utenteCorrente() as any;
    const idQuartiere = utente?.quartiere?.id_quartiere;
    return this.http.get<any[]>(`${this.API}/annunci?quartiere=${idQuartiere}&limit=3`);
  }

  // recupera tutti gli annunci dell'utente loggato 
  getMieiAnnunci(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/utenti/me/annunci`);
  }

  // recupera un singolo annuncio per ID
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API}/annunci/${id}`);
  }

  // pubblica un nuovo annuncio, inviando i dati al backend
  pubblica(dati: any): Observable<any> {
    return this.http.post<any>(`${this.API}/annunci`, {
      titolo:               dati.titolo,
      categoria:            dati.categoria,
      descrizione_annuncio: dati.descrizione_annuncio || '',
      prezzo_stimato:       dati.prezzo_stimato,
      condizioni:           dati.condizioni,
      foto:                 dati.foto
    });
  }

  // recupera le foto di un annuncio per ID, restituendo un array di stringhe base64
  getFoto(idAnnuncio: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.API}/annunci/${idAnnuncio}/foto`);
  }

  // chiude un annuncio, aggiornando lo stato_annuncio a "chiuso" nel backend
  chiudi(id: number): Observable<any> {
    return this.http.put<any>(`${this.API}/annunci/${id}`, {
      stato_annuncio: 'chiuso'
    });
  }

  // segna come letta la notifica di oscuramento di un annuncio
  segnaNotificaOscuramentoLetta(id: number): Observable<any> {
    return this.http.put<any>(`${this.API}/annunci/${id}`, {
      notifica_oscuramento_letta: true
    });
  }

  // elimina definitivamente un annuncio
  elimina(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/annunci/${id}`);
  }

  // recupera la CO2 risparmiata dal quartiere dell'utente
  getCo2Quartiere(): Observable<number> {
    const utente      = this.auth.utenteCorrente() as any;
    const idQuartiere = utente?.quartiere?.id_quartiere;
    return this.http.get<number>(`${this.API}/stats/co2-quartiere?quartiere=${idQuartiere}`);
  }
}