import { Routes } from '@angular/router';
import { authGuard, adminGuard, loginGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Rotta vuota -> reindirizza al login
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  // Pagina di login, accessibile solo se NON si è già loggati (loginGuard)
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    canActivate: [loginGuard]
  },
  // Home, richiede utente autenticato (authGuard)
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    canActivate: [authGuard]
  },
  // Elenco/ricerca annunci
  {
    path: 'annunci',
    loadComponent: () => import('./pages/annunci/annunci.component').then(m => m.AnnunciComponent),
    canActivate: [authGuard]
  },
  // Proposte di scambio inviate/ricevute
  {
    path: 'proposte',
    loadComponent: () => import('./pages/proposte/proposte.component').then(m => m.ProposteComponent),
    canActivate: [authGuard]
  },
  // Chat tra utenti
  {
    path: 'chat',
    loadComponent: () => import('./pages/chat/chat.component').then(m => m.ChatComponent),
    canActivate: [authGuard]
  },
  // Pubblicazione di un nuovo annuncio
  {
    path: 'pubblica',
    loadComponent: () => import('./pages/pubblica/pubblica.component').then(m => m.PubblicaComponent),
    canActivate: [authGuard]
  },
  // Profilo utente
  {
    path: 'profilo',
    loadComponent: () => import('./pages/profilo/profilo.component').then(m => m.ProfiloComponent),
    canActivate: [authGuard]
  },
  // Dashboard amministrazione, riservata agli admin (adminGuard)
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent),
    canActivate: [adminGuard]
  },
  // Qualsiasi altra rotta non definita -> reindirizza al login
  {
    path: '**',
    redirectTo: 'login'
  }
];