import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// avvia l'applicazione Angular, bootstrapApplication è una funzione che inizializza l'applicazione con il componente principale 
// AppComponent e la configurazione appConfig;
// in caso di errore durante l'avvio, questo viene catturato e stampato in console

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
