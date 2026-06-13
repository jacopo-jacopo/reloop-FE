import { Routes } from '@angular/router';
import { authGuard, adminGuard, loginGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    canActivate: [loginGuard]
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    canActivate: [authGuard]
  },
  {
    path: 'annunci',
    loadComponent: () => import('./pages/annunci/annunci.component').then(m => m.AnnunciComponent),
    canActivate: [authGuard]
  },
  {
    path: 'proposte',
    loadComponent: () => import('./pages/proposte/proposte.component').then(m => m.ProposteComponent),
    canActivate: [authGuard]
  },
  {
    path: 'chat',
    loadComponent: () => import('./pages/chat/chat.component').then(m => m.ChatComponent),
    canActivate: [authGuard]
  },
  {
    path: 'pubblica',
    loadComponent: () => import('./pages/pubblica/pubblica.component').then(m => m.PubblicaComponent),
    canActivate: [authGuard]
  },
  {
    path: 'profilo',
    loadComponent: () => import('./pages/profilo/profilo.component').then(m => m.ProfiloComponent),
    canActivate: [authGuard]
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent),
    canActivate: [adminGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];