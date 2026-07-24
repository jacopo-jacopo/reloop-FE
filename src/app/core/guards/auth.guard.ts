import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// se l'utente è loggato e NON è admin, consente l'accesso alla rotta, altrimenti reindirizza
export const userGuard: CanActivateFn = () => {
  const auth   = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn() && !auth.isAdmin()) return true;
  router.navigate([auth.isAdmin() ? '/admin' : '/login']);
  return false;
};

// se l'utente è loggato e admin, consente l'accesso alla rotta, altrimenti reindirizza a /login
export const adminGuard: CanActivateFn = () => {
  const auth   = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn() && auth.isAdmin()) return true;
  router.navigate(['/login']);
  return false;
};

// blocca l'accesso alla pagina di login se l'utente è già autenticato
export const loginGuard: CanActivateFn = () => {
  const auth   = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn()) {
    router.navigate([auth.isAdmin() ? '/admin' : '/home']);
    return false;
  }
  return true;
};