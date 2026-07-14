import { Component, inject, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { NotificaService } from '../../core/services/notifica.service';
import { ToastService } from '../toast/toast.service';

// Componente per la barra di navigazione, mostra il logo, il menu e le notifiche dell'utente, gestisce il logout e la navigazione al profilo

// inizia il decoratore, @Component definisce un componente Angular, con selettore 'app-navbar'
@Component({
  selector: 'app-navbar',
  standalone: true, // stabilisce che il componente è standalone, cioè non fa parte di un modulo Angular e usa le dipendenze dichiarate in imports
  imports: [CommonModule, RouterModule], // importa il modulo CommonModule, che fornisce direttive comuni come @if e @for
                                          // e RouterModule, che fornisce funzionalità per la navigazione tra le pagine
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy { // OnDestroy è un'interfaccia che permette di eseguire codice quando il componente viene distrutto, 
                                                    // utile per pulire le sottoscrizioni
  auth     = inject(AuthService);
  notif    = inject(NotificationService);
  notifica = inject(NotificaService);
  private toast  = inject(ToastService);
  private router = inject(Router);
  private sub: Subscription;

  // il costruttore crea un'iscrizione agli eventi di navigazione del router, 
  // in modo da ricaricare le notifiche e il badge quando l'utente cambia pagina
  constructor() {
    this.sub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd)) // filtra solo gli eventi di fine navigazione
      .subscribe(() => { this.notif.carica(); this.notifica.caricaBadge(); }); // quando li riceve, aggiorna le notifiche e i badge di notifica
  }

  // metodo che chiude le iscrizioni quando il componente viene distrutto
  ngOnDestroy() { this.sub.unsubscribe(); }

  get fotoProfilo(): string | null {
    return (this.auth.utenteCorrente() as any)?.foto_profilo || null;
  }

  get iniziali(): string {
    const nome = (this.auth.utenteCorrente() as any)?.nome_completo || '';
    return nome.split(' ').map((p: string) => p[0]).join('').substring(0, 2).toUpperCase();
  }

  vaiAlProfilo() { this.router.navigate(['/profilo']); }

  confermaLogoutAperta = signal(false);

  // metodi per aprire e chiudere il modal di conferma logout
  apriConfermaLogout()  { this.confermaLogoutAperta.set(true); }
  chiudiConfermaLogout() { this.confermaLogoutAperta.set(false); }

  logout() {
    this.confermaLogoutAperta.set(false);
    this.auth.logout();
    this.toast.info('Arrivederci!', 'Torna a scambiare presto :)', '👋');
  }
}
