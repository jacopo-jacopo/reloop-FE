import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ToastComponent } from './shared/toast/toast.component';
import { AnnOverlayComponent } from './shared/ann-overlay/ann-overlay.component';
import { UserOverlayComponent } from './shared/user-overlay/user-overlay.component';
import { RecensioneModalComponent } from './shared/recensione-modal/recensione-modal.component';
import { PropostaModalComponent } from './shared/proposta-modal/proposta-modal.component';
import { ModificaProfiloComponent } from './shared/modifica-profilo/modifica-profilo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, NavbarComponent, ToastComponent,
    AnnOverlayComponent, UserOverlayComponent,
    RecensioneModalComponent, PropostaModalComponent,
    ModificaProfiloComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
