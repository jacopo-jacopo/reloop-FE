import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../toast/toast.service';

// Component overlay per utenti bloccati: copre le pagine protette impedendo l'interazione
@Component({
  selector: 'app-blocco-overlay',
  standalone: true,
  template: `
    @if (auth.isBloccato()) {
      <div class="blocco-overlay" (click)="onClick()"></div>
    }
  `,
  styles: [`
    .blocco-overlay {
      position: fixed;
      inset: 0;
      top: 60px;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(3px);
      z-index: 900;
      cursor: not-allowed;
    }
  `]
})
export class BloccoOverlayComponent {
  auth  = inject(AuthService);
  toast = inject(ToastService);

  onClick() {
    this.toast.warn('Account bloccato', 'Il tuo account è stato sospeso. Contatta il supporto.', '🔒');
  }
}
