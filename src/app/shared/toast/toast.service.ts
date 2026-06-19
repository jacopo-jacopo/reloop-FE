import { Injectable, signal } from '@angular/core';

// interfaccia che definisce la struttura di un toast, con ID univoco, tipo (ok, err, info, warn), titolo, messaggio e icona
export interface Toast {
  id: number;
  type: 'ok' | 'err' | 'info' | 'warn';
  title: string;
  msg: string;
  icon: string;
}

// @Injectable({ providedIn: 'root' }) crea un singleton di ToastService, cioè solo un'istanza in tutta l'app
// in modo che i signal leggano e scrivano sempre sugli stessi valori (globalmente)
@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts = signal<Toast[]>([]);  // signal che contiene la lista dei toast attivi, inizialmente vuota
  private _counter = 0;  // contatore per generare ID unici per i toast, inizialmente 0

  // mostra un nuovo toast, aggiungendolo alla lista dei toast attivi;
  // dopo 4.2 secondi viene rimosso automaticamente
  show(type: Toast['type'], title: string, msg: string, icon: string) {
    const id = ++this._counter;
    this.toasts.update(t => [...t, { id, type, title, msg, icon }]);  // aggiunge il nuovo toast (passato nei parametri) alla lista dei toast attivi
                                                                      // sfruttando l'operatore spread '...' e la funzione update() dei signal
    setTimeout(() => this.remove(id), 4200);  // funzione asincrona di JS che rimuove il toast dopo 4.2 secondi
  }

  // rimuove un toast dalla lista dei toast attivi, filtrando quelli con ID diverso da quello passato nei parametri
  remove(id: number) {
    this.toasts.update(t => t.filter(x => x.id !== id));
  }

  // metodi di comodo per mostrare toast di tipo specifico, con icona predefinita
  ok(title: string, msg: string, icon = '✅')   { this.show('ok',   title, msg, icon); }
  err(title: string, msg: string, icon = '❌')  { this.show('err',  title, msg, icon); }
  info(title: string, msg: string, icon = 'ℹ️') { this.show('info', title, msg, icon); }
  warn(title: string, msg: string, icon = '⚠️') { this.show('warn', title, msg, icon); }
}