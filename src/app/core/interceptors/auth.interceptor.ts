import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

/*
funzione che intercetta tutte le richieste HTTP e aggiunge
l'header X-User-Id con l'id dell'utente loggato, se questo è presente

in X-User-Id, la X indica che l'header è personalizzato (non standard)
*/


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // prende l'utente attualmente loggato dal signal di AuthService
  const auth   = inject(AuthService);
  const utente = auth.utenteCorrente();

  // crea un oggetto headers vuoto che conterrà l'header X-User-Id da aggiungere,
  // è un tipo di oggetto con chiavi (Record<string, string>) e valori di tipo stringa (quindi JSON)
  let headers: Record<string, string> = {};

  if (utente) {
    // recupera l'id dell'utente loggato, necessario usare 'as any' perché utenteCorrente è un signal di tipo any

    // l'operatore ?? (nullish coalescing) restituisce il primo operando se è diverso da null o undefined,
    // altrimenti restituisce il secondo operando
    const id = (utente as any).id_utente_reg ?? (utente as any).id_utente_adm;
    if (id) {
      headers['X-User-Id'] = String(id);
    }
  }

  // clona la richiesta HTTP originale (che è immutabile) aggiungendo headers
  req = req.clone({
    setHeaders: headers,
    withCredentials: true  // poiché il backend gira su localhost:8080 e il frontend su localhost:4200, di default
                           // il browser non invierebbe i cookie di sessione (per motivi di sicurezza) ->
                           // 'withCredentials: true' permette di inviarli
  });

  return next(req);  // manda la richiesta modificata al backend e restituisce la risposta
};