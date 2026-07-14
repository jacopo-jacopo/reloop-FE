import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ToastComponent } from './shared/toast/toast.component';
import { AnnOverlayComponent } from './shared/ann-overlay/ann-overlay.component';
import { UserOverlayComponent } from './shared/user-overlay/user-overlay.component';
import { RecensioneModalComponent } from './shared/recensione-modal/recensione-modal.component';
import { PropostaModalComponent } from './shared/proposta-modal/proposta-modal.component';
import { ModificaProfiloComponent } from './shared/modifica-profilo/modifica-profilo.component';

// Component principale dell'applicazione:
// contiene il router outlet per la navigazione tra le pagine e i componenti condivisi come navbar, toast, overlay e modali

// inizia il decoratore, @Component definisce un componente Angular, con selettore 'app-root'
@Component({
  selector: 'app-root',
  standalone: true, // stabilisce che il componente è standalone, cioè non fa parte di un modulo Angular e usa le dipendenze dichiarate in imports
  imports: [
    RouterOutlet,                         // modulo RouterOutlet, che permette di visualizzare i componenti delle pagine in base alla rotta corrente
    NavbarComponent,                      // modulo NavbarComponent, che mostra la barra di navigazione in alto
    ToastComponent,                       // modulo ToastComponent, che mostra i toast di notifica all'utente (in alto a destra)
    AnnOverlayComponent,                  // modulo AnnOverlayComponent, che si occupa dell'overlay degli annunci
    UserOverlayComponent,                 // modulo UserOverlayComponent, che mostra l'overlay per il profilo utente
    RecensioneModalComponent,             // modulo RecensioneModalComponent, che mostra il modale per le recensioni
    PropostaModalComponent,               // modulo PropostaModalComponent, che mostra il modale per le proposte
    ModificaProfiloComponent              // modulo ModificaProfiloComponent, che mostra il modale per modificare il profilo
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // vuoto perché questo componente serve solo come contenitore per il router outlet e i componenti condivisi, non ha logica propria
}
