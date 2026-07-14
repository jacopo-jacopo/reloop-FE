import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificaService } from '../../core/services/notifica.service';
import { Notifica } from '../../models/notifica.model';
import { ToastService } from '../../shared/toast/toast.service';

// Component per la pagina delle notifiche, mostra le notifiche dell'utente loggato e permette di segnarle come lette

// inizia il decoratore, @Component definisce un componente Angular, con selettore 'app-notifiche'
@Component({
  selector: 'app-notifiche',
  standalone: true, // stabilisce che il componente è standalone, cioè non fa parte di un modulo Angular e usa le dipendenze dichiarate in imports
  imports: [CommonModule], // importa il modulo CommonModule, che fornisce direttive comuni come @if e @for
  templateUrl: './notifiche.component.html',
  styleUrls: ['./notifiche.component.scss']
})
export class NotificheComponent implements OnInit {
  private notificaService = inject(NotificaService);
  private toast           = inject(ToastService);

  notifiche = signal<Notifica[]>([]);
  loading   = signal(true);

  ngOnInit() { this.carica(); }

  // carica le notifiche dell'utente loggato dal backend e le ordina per id decrescente (le più recenti prima)
  carica() {
    this.notificaService.getMie().subscribe({
      next: (data) => { this.notifiche.set(data.sort((a, b) => b.id_notifica - a.id_notifica)); this.loading.set(false); },
      error: () => { this.toast.err('Errore', 'Impossibile caricare le notifiche.', '❌'); this.loading.set(false); }
    });
  }

  // segna una notifica come letta, se non lo è già, e aggiorna il badge delle notifiche non lette
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

  // segna tutte le notifiche come lette e aggiorna il badge delle notifiche non lette
  segnaTutteLette() {
    this.notificaService.segnaTutteLette().subscribe({
      next: () => {
        this.notifiche.update(list => list.map(x => ({ ...x, letta: true })));
        this.notificaService.azzera();
        this.toast.ok('Fatto!', 'Tutte le notifiche sono state lette.', '✅');
      },
      error: () => this.toast.err('Errore', 'Impossibile aggiornare le notifiche.', '❌')
    });
  }

  // restituisce il numero di notifiche non lette
  nonLette() { return this.notifiche().filter(n => !n.letta).length; }

  // restituisce l'icona corrispondente al tipo di notifica
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
