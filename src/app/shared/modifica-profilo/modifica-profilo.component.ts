import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UtenteService } from '../../core/services/utente.service';
import { QuartiereService } from '../../core/services/quartiere.service';
import { ToastService } from '../toast/toast.service';
import { AuthService } from '../../core/services/auth.service';
import { OverlayService } from '../../core/services/overlay.service';

@Component({
  selector: 'app-modifica-profilo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modifica-profilo.component.html',
  styleUrls: ['./modifica-profilo.component.scss']
})
export class ModificaProfiloComponent {
  private fb               = inject(FormBuilder);
  private utenteService    = inject(UtenteService);
  private quartiereService = inject(QuartiereService);
  private toast            = inject(ToastService);
  private overlayService   = inject(OverlayService);
  auth                     = inject(AuthService);

  fotoPreview        = signal<string | null>(null);
  quartieriList:any[]= [];
  citta:string[]     = [];
  quartieriFiltrarti = signal<any[]>([]);
  loading            = signal(false);

  get aperto() { return this.overlayService.modificaProfiloAperta(); }

  form: FormGroup = this.fb.group({
    indirizzo:         [''],
    citta:             [''],
    id_quartiere:      [''],
    password_nuova:    [''],
    password_conferma: ['']
  });

  constructor() {
    // Carica quartieri dal backend
    this.quartiereService.getAll().subscribe({
      next: (q) => {
        this.quartieriList = q;
        this.citta         = [...new Set(q.map((x: any) => x.citta))];
      }
    });

    effect(() => {
      if (this.overlayService.modificaProfiloAperta()) {
        const utente = this.auth.utenteCorrente() as any;
        this.form.patchValue({
          indirizzo:    utente?.indirizzo    || '',
          citta:        utente?.quartiere?.citta || '',
          id_quartiere: utente?.quartiere?.id_quartiere || ''
        });
        this.quartieriFiltrarti.set(
          this.quartieriList.filter((q: any) => q.citta === utente?.quartiere?.citta)
        );
        this.fotoPreview.set(utente?.foto_profilo || null);
      }
    });
  }

  chiudi() { this.overlayService.chiudiModificaProfilo(); }
  onBgClick(e: MouseEvent) { if (e.target === e.currentTarget) this.chiudi(); }

  onCittaChange(event: Event) {
    const citta = (event.target as HTMLSelectElement).value;
    this.form.get('id_quartiere')?.setValue('');
    this.quartieriFiltrarti.set(
      this.quartieriList.filter((q: any) => q.citta === citta)
    );
  }

  onFotoChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    const reader = new FileReader();
    reader.onload = e => this.fotoPreview.set(e.target?.result as string);
    reader.readAsDataURL(input.files[0]);
  }

  salva() {
  const v = this.form.value;

  if (v.password_nuova && v.password_nuova !== v.password_conferma) {
    this.toast.warn('Password diversa', 'Le due password non coincidono.', '⚠️');
    return;
  }

  const quartiere = this.quartieriList.find(
    (q: any) => q.id_quartiere === Number(v.id_quartiere)
  );

  // Costruisce il body con solo i campi modificati
  const dati: any = {};
  if (v.indirizzo)        dati.indirizzo     = v.indirizzo;
  if (quartiere)          dati.quartiere     = quartiere;
  if (v.password_nuova)   dati.password      = v.password_nuova;
  // Foto profilo — null se rimossa, stringa base64 se presente
  dati.foto_profilo = this.fotoPreview() || null;

  this.loading.set(true);
  this.utenteService.aggiornaProfilo(dati).subscribe({
    next: (utente) => {
      this.auth.aggiornaProfilo(utente);
      this.loading.set(false);
      this.toast.ok('Profilo aggiornato!', 'Le modifiche sono state salvate.', '✅');
      this.chiudi();
    },
    error: () => {
      this.loading.set(false);
      this.toast.err('Errore', 'Impossibile aggiornare il profilo.', '❌');
    }
  });
}
}