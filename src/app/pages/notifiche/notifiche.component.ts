import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificaService } from '../../core/services/notifica.service';
import { Notifica } from '../../models/notifica.model';
import { ToastService } from '../../shared/toast/toast.service';

@Component({
  selector: 'app-notifiche',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifiche.component.html',
  styleUrls: ['./notifiche.component.scss']
})
export class NotificheComponent implements OnInit {
  private notificaService = inject(NotificaService);
  private toast           = inject(ToastService);

  notifiche = signal<Notifica[]>([]);
  loading   = signal(true);

  ngOnInit() { this.carica(); }

  carica() {
    this.notificaService.getMie().subscribe({
      next: (data) => { this.notifiche.set(data.sort((a, b) => b.id_notifica - a.id_notifica)); this.loading.set(false); },
      error: () => { this.toast.err('Errore', 'Impossibile caricare le notifiche.', '❌'); this.loading.set(false); }
    });
  }

  segnaLetta(n: Notifica) {
    if (n.letta) return;
    this.notificaService.segnaLetta(n.id_notifica).subscribe({
      next: () => {
        this.notifiche.update(list => list.map(x => x.id_notifica === n.id_notifica ? { ...x, letta: true } : x));
        this.notificaService.caricaBadge();
      },
      error: () => {}
    });
  }

  segnaLutteLette() {
    this.notificaService.segnaLutteLette().subscribe({
      next: () => {
        this.notifiche.update(list => list.map(x => ({ ...x, letta: true })));
        this.notificaService.azzera();
        this.toast.ok('Fatto', 'Tutte le notifiche segnate come lette.', '✅');
      },
      error: () => this.toast.err('Errore', 'Impossibile aggiornare le notifiche.', '❌')
    });
  }

  nonLette() { return this.notifiche().filter(n => !n.letta).length; }

  icona(tipo: string): string {
    const map: Record<string, string> = {
      NUOVA_PROPOSTA:     '🔄',
      PROPOSTA_ACCETTATA: '✅',
      PROPOSTA_RIFIUTATA: '❌',
      NUOVO_MESSAGGIO:    '💬',
      NUOVA_RECENSIONE:   '⭐',
      ANNUNCIO_ELIMINATO: '🗑️',
      ACCOUNT_BLOCCATO:   '🔒'
    };
    return map[tipo] ?? '🔔';
  }
}
