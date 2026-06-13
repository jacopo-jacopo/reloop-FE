import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth   = inject(AuthService);
  const utente = auth.utenteCorrente();
  if (utente) {
    const id = (utente as any).id_utente_reg ?? (utente as any).id_utente_adm;
    if (id) {
      req = req.clone({
        setHeaders: { 'X-User-Id': String(id) }
      });
    }
  }
  return next(req);
};