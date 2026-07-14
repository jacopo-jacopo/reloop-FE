import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UtenteService } from '../../core/services/utente.service';
import { QuartiereService } from '../../core/services/quartiere.service';
import { ToastService } from '../toast/toast.service';
import { AuthService } from '../../core/services/auth.service';
import { OverlayService } from '../../core/services/overlay.service';

// Component per la modifica del profilo utente, mostra un form con i campi modificabili e gestisce l'aggiornamento dei dati sul backend

// inizia il decoratore, @Component definisce un componente Angular, con selettore 'app-modifica-profilo'
@Component({
  selector: 'app-modifica-profilo',
  standalone: true, // stabilisce che il componente è standalone, cioè non fa parte di un modulo Angular e usa le dipendenze dichiarate in imports
  imports: [CommonModule, ReactiveFormsModule], // importa il modulo CommonModule, che fornisce direttive comuni come @if e @for
                                                // e ReactiveFormsModule, che fornisce funzionalità per la gestione dei form reattivi
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
  quartieriFiltrati = signal<any[]>([]);
  loading            = signal(false);

  // getter per sapere se il modal di modifica profilo è aperto, leggendo il signal dal servizio OverlayService
  get aperto() { return this.overlayService.modificaProfiloAperta(); } 

  form: FormGroup = this.fb.group({
    indirizzo:         [''],
    citta:             [''],
    id_quartiere:      [''],
    password_nuova:    [''],
    password_conferma: ['']
  });

  constructor() {
    // carica quartieri dal backend
    this.quartiereService.getAll().subscribe({
      next: (q) => {
        this.quartieriList = q;
        this.citta         = [...new Set(q.map((x: any) => x.citta))]; // estrae le città uniche dai quartieri
      }
    });

    // effetto che si attiva quando il modal di modifica profilo viene aperto, per popolare il form con i dati correnti dell'utente
    effect(() => {
      if (this.overlayService.modificaProfiloAperta()) {
        const utente = this.auth.utenteCorrente() as any;
        this.form.patchValue({  // patchValue aggiorna solo i campi specificati, senza resettare il form
          indirizzo:    utente?.indirizzo    || '',
          citta:        utente?.quartiere?.citta || '',
          id_quartiere: utente?.quartiere?.id_quartiere || ''
        });
        this.quartieriFiltrati.set(
          this.quartieriList.filter((q: any) => q.citta === utente?.quartiere?.citta)
        );
        this.fotoPreview.set(utente?.foto_profilo || null);
      }
    });
  }

  // metodi per chiudere il modal catturando il click sullo sfondo o sul pulsante "Annulla"
  chiudi() { this.overlayService.chiudiModificaProfilo(); }
  onBgClick(e: MouseEvent) { if (e.target === e.currentTarget) this.chiudi(); }

  // metodo che filtra i quartieri in base alla città selezionata nel form, resettando il quartiere selezionato
  onCittaChange(event: Event) {
    const citta = (event.target as HTMLSelectElement).value;
    this.form.get('id_quartiere')?.setValue('');
    this.quartieriFiltrati.set(
      this.quartieriList.filter((q: any) => q.citta === citta)
    );
  }

  // metodo che gestisce il cambio della foto profilo, leggendo il file selezionato e creando un'anteprima
  onFotoChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    const reader = new FileReader();
    reader.onload = e => this.fotoPreview.set(e.target?.result as string); // imposta il signal fotoPreview con la stringa base64 dell'immagine 
                                                                           // selezionata, utilizzando onload in modo che venga eseguito solo quando 
                                                                           // la lettura del file è completata
    reader.readAsDataURL(input.files[0]); // avvia la lettura (prima fa questo, poi reader.onload)
  }

  // metodo che salva le modifiche al profilo
  salva() {
    const v = this.form.value;

    if (v.password_nuova && v.password_nuova !== v.password_conferma) {
      this.toast.warn('Password diversa', 'Le due password non coincidono.', '⚠️');
      return;
    }

    const quartiere = this.quartieriList.find(
      (q: any) => q.id_quartiere === Number(v.id_quartiere)
    );

    // costruisce il body con solo i campi modificati
    const dati: any = {};
    if (v.indirizzo)        dati.indirizzo = v.indirizzo;
    if (quartiere)          dati.quartiere = quartiere;
    if (v.password_nuova)   dati.password = v.password_nuova;

    dati.foto_profilo = this.fotoPreview() || null; // foto profilo aggionrnata, se presente, altrimenti null

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

  iniziali(nome?: string): string {
    return (nome || '').split(' ').map((p: string) => p[0]).join('').substring(0, 2).toUpperCase();
  }
}