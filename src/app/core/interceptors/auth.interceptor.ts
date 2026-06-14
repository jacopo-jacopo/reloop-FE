import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth   = inject(AuthService);
  const utente = auth.utenteCorrente();

  let headers: Record<string, string> = {};
  if (utente) {
    const id = (utente as any).id_utente_reg ?? (utente as any).id_utente_adm;
    if (id) {
      headers['X-User-Id'] = String(id);
    }
  }

  req = req.clone({
    setHeaders: headers,
    withCredentials: true
  });

  return next(req);
};