import { ApplicationConfig, inject, provideAppInitializer } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { AuthService } from './core/services/auth.service';

// esporta la configurazione globale dell'app
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),  // registra il router con le rotte definite in app.routes.ts
    provideHttpClient(withInterceptors([authInterceptor])),  // registra il client HTTP con l'interceptor
                                                             // per gestire l'autenticazione
    
    // inizializza la sessione dell'utente all'avvio dell'app, verificando se è già loggato
    provideAppInitializer(() => {
      const auth = inject(AuthService);
      return auth.inizializzaSessione();
    })
  ]
};