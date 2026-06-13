import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: number;
  type: 'ok' | 'err' | 'info' | 'warn';
  title: string;
  msg: string;
  icon: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts = signal<Toast[]>([]);
  private _counter = 0;

  show(type: Toast['type'], title: string, msg: string, icon: string) {
    const id = ++this._counter;
    this.toasts.update(t => [...t, { id, type, title, msg, icon }]);
    setTimeout(() => this.remove(id), 4200);
  }

  remove(id: number) {
    this.toasts.update(t => t.filter(x => x.id !== id));
  }

  ok(title: string, msg: string, icon = '✅')   { this.show('ok',   title, msg, icon); }
  err(title: string, msg: string, icon = '❌')  { this.show('err',  title, msg, icon); }
  info(title: string, msg: string, icon = 'ℹ️') { this.show('info', title, msg, icon); }
  warn(title: string, msg: string, icon = '⚠️') { this.show('warn', title, msg, icon); }
}