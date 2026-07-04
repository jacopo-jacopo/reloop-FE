import { Component, inject, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { NotificaService } from '../../core/services/notifica.service';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  auth     = inject(AuthService);
  notif    = inject(NotificationService);
  notifica = inject(NotificaService);
  private toast  = inject(ToastService);
  private router = inject(Router);
  private sub: Subscription;

  constructor() {
    this.sub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => { this.notif.carica(); this.notifica.caricaBadge(); });
  }

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

  apriConfermaLogout()  { this.confermaLogoutAperta.set(true); }
  chiudiConfermaLogout() { this.confermaLogoutAperta.set(false); }

  logout() {
    this.confermaLogoutAperta.set(false);
    this.auth.logout();
    this.toast.info('Arrivederci!', 'Sessione terminata correttamente.', '👋');
  }
}
