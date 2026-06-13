import { Component, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  auth  = inject(AuthService);
  notif = inject(NotificationService);
  private toast  = inject(ToastService);
  private router = inject(Router);
  private sub: Subscription;

  constructor() {
    // Ricarica i badge ad ogni navigazione (inclusa la prima al caricamento dell'app).
    // NavigationEnd è l'evento più affidabile: lo stato auth è già stabile.
    this.sub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.notif.carica());
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

  logout() {
    this.auth.logout();
    this.toast.info('Arrivederci!', 'Sessione terminata correttamente.', '👋');
  }
}
