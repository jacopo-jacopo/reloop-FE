import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly API = 'http://localhost:8080/api';

  utenteCorrente = signal<any>(null);
  tipoUtente     = signal<'utente' | 'admin' | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.API}/auth/login`, { email, password }, { withCredentials: true }).pipe(
      tap(res => this._impostaSessione(res.tipo, res.utente))
    );
  }

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
    }, { withCredentials: true }).pipe(
      tap(res => this._impostaSessione(res.tipo, res.utente))
    );
  }

  aggiornaProfilo(utente: any): void {
    this._impostaSessione(this.tipoUtente()!, utente);
  }

  /**
   * Verifica il cookie di sessione tramite /api/auth/me e ripristina
   * utenteCorrente/tipoUtente se valido. Usata all'avvio dell'app per
   * mantenere la sessione dopo un refresh della pagina.
   */
  inizializzaSessione(): Observable<any> {
    return this.http.get<any>(`${this.API}/auth/me`, { withCredentials: true }).pipe(
      tap(res => this._impostaSessione(res.tipo, res.utente)),
      catchError(() => of(null))
    );
  }

  logout(): void {
    this.http.post(`${this.API}/auth/logout`, {}, { withCredentials: true }).subscribe();
    this.utenteCorrente.set(null);
    this.tipoUtente.set(null);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean { return !!this.utenteCorrente(); }
  isAdmin():    boolean { return this.tipoUtente() === 'admin'; }

  private _impostaSessione(tipo: 'utente' | 'admin', utente: any): void {
    this.utenteCorrente.set(utente);
    this.tipoUtente.set(tipo);
  }
}
