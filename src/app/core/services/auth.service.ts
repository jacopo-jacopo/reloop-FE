import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


// @Injectable({ providedIn: 'root' }) crea un singleton di AuthService, cioè solo un'istanza in tutta l'app
// in modo che i signal leggano e scrivano sempre sugli stessi valori (utenteCorrente e tipoUtente) globalmente 
@Injectable({ providedIn: 'root' })
export class AuthService {

  // URL base dell'API, usata per tutte le chiamate HTTP
  private readonly API = 'http://localhost:8080/api';

  utenteCorrente = signal<any>(null);  // signal che contiene l'utente loggato, inizialmente null (nessun utente loggato)
  tipoUtente     = signal<'utente' | 'admin' | null>(null); // signal che contiene il tipo dell'utente loggato,
                                                            // inizialmente null (nessun utente loggato)

  // il costruttore riceve HttpClient e Router tramite dependency injection per fare richieste HTTP e navigare tra le pagine
  constructor(private http: HttpClient, private router: Router) {}

  // prepara la richiesta di login all'API, inviando email e password (per questo è di tipo Observable<any>),
  // se la risposta è positiva, imposta i signal utenteCorrente e tipoUtente;
  // il tipo di ritorno è Observable<any> perché rappresenta un flusso di dati asincrono (come Angular gestisce le risposte HTTP)
  login(email: string, password: string): Observable<any> {
    // nel body non ci sono le chiavi di email e password perché typescript permette di ometterle se i nomi sono uguali a quelli delle variabili;
    // 'withCredentials: true' serve per inviare i cookie di sessione nella comunicazione cross-origin
    return this.http.post<any>(`${this.API}/auth/login`, { email, password }, { withCredentials: true }).pipe( // pipe serve per applicare operatori alla risposta dell'HTTP
      tap(res => this._impostaSessione(res.tipo, res.utente)) // imposta la sessione con tipo e utente (restituiti dal backend),
                                                              // tap è una funzione che permette di applicare un 'effetto collaterale' senza
                                                              // modificare il flusso dei dati
    );
  }

  // prepara la richiesta di registrazione all'API, inviando i dati del nuovo utente,
  // se la risposta è positiva, imposta i signal utenteCorrente e tipoUtente;
  // il tipo di ritorno è Observable<any> perché rappresenta un flusso di dati asincrono (come Angular gestisce le risposte HTTP)
  registra(dati: {
    nome_completo: string;
    email: string;
    password: string;
    indirizzo: string;
    quartiere: any;
  }): Observable<any> {
    return this.http.post<any>(`${this.API}/auth/registra`, {
      nome_completo: dati.nome_completo,
      email:         dati.email,
      password:      dati.password,
      indirizzo:     dati.indirizzo,
      id_quartiere:  dati.quartiere?.id_quartiere
    }, { withCredentials: true }).pipe(  // pipe serve per applicare operatori alla risposta dell'HTTP
      tap(res => this._impostaSessione(res.tipo, res.utente)) // imposta la sessione con tipo e utente (restituiti dal backend),
                                                              // tap è una funzione che permette di applicare un 'effetto collaterale' senza
                                                              // modificare il flusso dei dati
    );
  }

  // aggiorna i signal utenteCorrente e tipoUtente con i nuovi dati dell'utente
  aggiornaProfilo(utente: any): void {
    this._impostaSessione(this.tipoUtente()!, utente);  // ! = non-null assertion operatore, per indicare che non è null
                                                        // (disattiva il controllo di nullabilità)
  }


  // verifica il cookie di sessione tramite /api/auth/me e ripristina utenteCorrente/tipoUtente se valido;
  // usata all'avvio dell'app per mantenere la sessione dopo un refresh della pagina;
  // il tipo di ritorno è Observable<any> perché rappresenta un flusso di dati asincrono (come Angular gestisce le risposte HTTP)
  inizializzaSessione(): Observable<any> {
    return this.http.get<any>(`${this.API}/auth/me`, { withCredentials: true }).pipe(  // pipe serve per applicare operatori alla risposta dell'HTTP
      tap(res => this._impostaSessione(res.tipo, res.utente)), // imposta la sessione con tipo e utente (restituiti dal backend),
                                                               // tap è una funzione che permette di applicare un 'effetto collaterale' senza
                                                               // modificare il flusso dei dati
      catchError(() => of(null))  // se il cookie è assente/non valido, catchError intercette l'errore e restituisce un Observable di null (creato dalla
                                  // funzione 'of') per evitare che l'errore si propaghi; in questo caso utenteCorrente e tipoUtente rimangono null
    );
  }


  // invia la richiesta di logout all'API, cancella i signal utenteCorrente e tipoUtente e reindirizza alla pagina di login;
  // non prepara la richiesta come per login() e registra() perché non serve gestire la risposta, basta inviarla
  logout(): void {
    this.http.post(`${this.API}/auth/logout`, {}, { withCredentials: true }).subscribe();

    // anche se subscribe() è asincrono, questi comandi vengono eseguiti subito,
    // perché il logout è già stato richiesto al backend e non serve aspettare la risposta
    this.utenteCorrente.set(null);
    this.tipoUtente.set(null);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean { return !!this.utenteCorrente(); } // true se utenteCorrente non è null (!! trasforma in booleano)
  isAdmin():    boolean { return this.tipoUtente() === 'admin'; }

  // imposta i signal utenteCorrente e tipoUtente, underscore usato come convenzione per metodi privati
  private _impostaSessione(tipo: 'utente' | 'admin', utente: any): void {
    this.utenteCorrente.set(utente);
    this.tipoUtente.set(tipo);
  }
}
