import { HttpInterceptorFn } from '@angular/common/http';

// intercetta tutte le richieste HTTP e aggiunge withCredentials: true
// in modo che il browser invii automaticamente il cookie JWT di sessione
// (necessario perché FE e BE girano su porte diverse: 4200 e 8080)
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req.clone({ withCredentials: true }));
};