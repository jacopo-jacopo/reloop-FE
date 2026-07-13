import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnuncioService } from '../../core/services/annuncio.service';
import { ToastService } from '../../shared/toast/toast.service';

// Componente per la pubblicazione di un annuncio, mostra un form con i campi necessari e gestisce l'invio dei dati al backend

// Inizia il decoratore @Component, che definisce un componente Angular con selettore 'app-pubblica'
@Component({
  selector: 'app-pubblica',
  standalone: true, // stabilisce che il componente è standalone, cioè non fa parte di un modulo Angular e usa le dipendenze dichiarate in imports
  imports: [CommonModule, ReactiveFormsModule], // importa il modulo CommonModule, che fornisce direttive comuni come @if e @for
                                                // e ReactiveFormsModule, che fornisce funzionalità per la gestione dei form reattivi
  templateUrl: './pubblica.component.html',
  styleUrls: ['./pubblica.component.scss']
})
export class PubblicaComponent {
  private fb              = inject(FormBuilder);
  private annuncioService = inject(AnnuncioService);
  private toast           = inject(ToastService);
  private router          = inject(Router);

  loading         = signal(false);
  condSelezionata = signal<string | null>(null);
  fotoPreview: string[] = [];

  // i value devono corrispondere esattamente all'enum Java e al DB
  readonly condizioni = [
    { value: 'scarso',    emoji: '😞', label: 'Scarso'     },
    { value: 'discreto',  emoji: '🙂', label: 'Discreto'   },
    { value: 'buono',     emoji: '😊', label: 'Buono'      },
    { value: 'ottimo',    emoji: '👍', label: 'Ottimo'     },
    { value: 'come_nuovo', emoji: '✨', label: 'Come nuovo' },
  ];

  // categorie di annuncio, corrispondono a quelle definite nel backend e nel DB
  readonly categorie = [
    'Arredamento', 'Abbigliamento',
    'Libri & Cultura', 'Sport & Tempo libero',
    'Elettronica', 'Cucina', 'Musica'
  ];

  form: FormGroup = this.fb.group({
    titolo:         ['', Validators.required], 
    categoria:      ['', Validators.required],
    descrizione:    [''],
    prezzo_stimato: ['', [Validators.required, Validators.min(0)]], 
  });

  selCond(v: string) { this.condSelezionata.set(v); }

  readonly maxFoto = 4;

  // gestisce il caricamento delle foto, legge i file selezionati dall'input e li converte in base64 per la preview
  onFotoChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;

    const postiLiberi = this.maxFoto - this.fotoPreview.length;
    const files = Array.from(input.files);

    if (files.length > postiLiberi) {
      this.toast.warn('Limite foto', `Puoi aggiungere al massimo ${this.maxFoto} foto per annuncio.`, '⚠️');
    }

    files.slice(0, postiLiberi).forEach(file => {
      const reader = new FileReader();
      reader.onload = e => this.fotoPreview.push(e.target?.result as string); // una volta letto il file, lo aggiunge all'array di foto preview
      reader.readAsDataURL(file); // legge il file come base64 per la preview
    });

    input.value = '';
  }

  // rimuove una foto dalla preview, dato l'indice della foto nell'array
  rimuoviFoto(idx: number) { this.fotoPreview.splice(idx, 1); }

  // metodo che pubblica l'annuncio, controlla la validità del form e invia i dati al backend tramite il servizio AnnuncioService
  pubblica() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    if (!this.condSelezionata()) {
      this.toast.warn('Condizioni mancanti', 'Seleziona le condizioni.', '⚠️');
      return;
    }
    if (this.fotoPreview.length === 0) {
      this.toast.warn('Foto mancante', 'Aggiungi almeno una foto all\'annuncio.', '⚠️');
      return;
    }
    this.loading.set(true);
    this.annuncioService.pubblica({
      titolo:               this.form.value.titolo,
      categoria:            this.form.value.categoria,
      descrizione_annuncio: this.form.value.descrizione,
      prezzo_stimato:       Number(this.form.value.prezzo_stimato),
      condizioni:           this.condSelezionata(),
      foto:                 this.fotoPreview
    }).subscribe({
      next: () => {
        this.loading.set(false);
        this.toast.ok('Annuncio pubblicato!', 'Visibile nel tuo quartiere.', '📋');
        this.router.navigate(['/profilo']);
      },
      error: () => {
        this.loading.set(false);
        this.toast.err('Errore', 'Impossibile pubblicare l\'annuncio.', '❌');
      }
    });
  }

  // metodo che verifica se un campo del form è invalido e toccato
  invalid(field: string): boolean {
    const c = this.form.get(field);
    return !!(c?.invalid && c?.touched);
  }
}