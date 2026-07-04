import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../shared/toast/toast.service';
import { QuartiereService } from '../../core/services/quartiere.service';

// Component per la pagina di login e registrazione, gestisce sia il login che la registrazione degli utenti;
// Contiene due form reattivi, uno per il login e uno per la registrazione, con validazioni appropriate, 
// inoltre, carica i quartieri dal backend per il form di registrazione e mostra le statistiche pubbliche

// inizia il decoratore, @Component definisce un componente Angular, con selettore 'app-login'
@Component({
  selector: 'app-login',
  standalone: true,  // stabilisce che il componente è standalone, cioè non fa parte di un modulo Angular e usa le dipendenze dichiarate in imports
  imports: [CommonModule, ReactiveFormsModule],  // importa il modulo CommonModule, che fornisce direttive comuni come @if e @for
                                                 // e ReactiveFormsModule, che fornisce funzionalità per i form reattivi
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {  
  private auth             = inject(AuthService);        
  private router           = inject(Router);
  private fb               = inject(FormBuilder);
  private toast            = inject(ToastService);
  private quartiereService = inject(QuartiereService);
  private http             = inject(HttpClient);

  private readonly API = 'http://localhost:8080/api';

  tabAttiva: 'accedi' | 'reg' = 'accedi';
  loading = false;

  quartieri: any[]         = [];
  citta: string[]          = [];
  quartieriFiltrati: any[] = [];
  stats = signal<any>(null);  

  // form reattivo per il login, con campi email e password, entrambi obbligatori, con validazione dell'email
  formLogin: FormGroup = this.fb.group({
    email:    ['', [Validators.required, Validators.email]],  // stato iniziale e validatori asincroni
    password: ['', Validators.required]                       // stato iniziale e validatore sincrono
  });

  // regular expression: almeno 8 caratteri di cui almeno 1 maiuscola, 1 minuscola, 1 numero, 1 carattere speciale tra !?#-_
  static readonly PASSWORD_PATTERN = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!?#\-_]).{8,}$/;

  // controllo sul dominio @reloop.it, riservato agli amministratori
  static emailNonRiservata(control: AbstractControl): ValidationErrors | null {
    const value = (control.value || '').toLowerCase();
    return value.endsWith('@reloop.it') ? { email: true } : null;
  }

  // form reattivo per la registrazione, con campi tutti obbligatori, validazione dell'email e della password
  formReg: FormGroup = this.fb.group({
    nome_completo: ['', Validators.required],
    email:         ['', [Validators.required, Validators.email, LoginComponent.emailNonRiservata]],
    password:      ['', [Validators.required, Validators.pattern(LoginComponent.PASSWORD_PATTERN)]],
    password2:     ['', Validators.required],
    indirizzo:     ['', Validators.required],
    citta:         ['', Validators.required],
    id_quartiere:  ['', Validators.required]
  });

  // metodo ngOnInit, viene eseguito al momento dell'inizializzazione del componente
  ngOnInit() {
    // carica quartieri dal backend per il form di registrazione
    this.quartiereService.getAll().subscribe({
      next: (q) => {
        this.quartieri = q;
        this.citta     = [...new Set(q.map((x: any) => x.citta))];  // crea un nuovo array di città mappando i quaritieri, rimuove i duplicati con Set
                                                                    // e lo ritrasforma in un array con l'operatore spread
      },
      error: () => this.toast.err('Errore', 'Impossibile caricare i quartieri.', '❌')  // in caso di errore chiama ToastService
    });

    // carica le statistiche pubbliche dal backend
    this.http.get<any>(`${this.API}/stats/pubbliche`).subscribe({
      next: (s) => this.stats.set(s),
      error: () => {}
    });
  }

  // metodo per cambiare il tab attivo tra login e registrazione
  switchTab(t: 'accedi' | 'reg') { this.tabAttiva = t; }

  // metodo per filtrare i quartieri in base alla città selezionata nel form di registrazione
  onCittaChange(event: Event) {
    const citta = (event.target as HTMLSelectElement).value;  // ottiene il valore della città selezionata dall'evento
    this.formReg.get('id_quartiere')?.setValue('');  // resetta il valore del campo id_quartiere nel form di registrazione;
                                                     // ?. controlla che il valore non sia null o undefined prima di chiamare il metodo setValue
    this.quartieriFiltrati = this.quartieri.filter((q: any) => q.citta === citta); // recupera i quariteri filtrati per città
  }

  // metodo per eseguire il login, controlla la validità del form, chiama il servizio AuthService e gestisce la risposta
  doLogin() {
    if (this.formLogin.invalid) { this.formLogin.markAllAsTouched(); return; } // se il form non è valido, marca tutti i campi come toccati in modo
                                                                               // da rendere visibili gli errori, poi termina subito l'esecuzione
    this.loading = true;  
    const { email, password } = this.formLogin.value;
    this.auth.login(email, password).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.tipo === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.toast.ok('Benvenuto su reloop!', 'Buono scambio :)', '🌿');
          this.router.navigate(['/home']);
        }
      },
      error: () => {
        this.loading = false;
        this.toast.err('Errore login', 'Credenziali non valide.', '❌');
      }
    });
  }

  // metodo per eseguire la registrazione, controlla la validità del form, chiama il servizio AuthService e gestisce la risposta
  doRegister() {
    if (this.formReg.invalid) { this.formReg.markAllAsTouched(); return; } // se il form non è valido, marca tutti i campi come toccati in modo 
                                                                           // da rendere visibili gli errori, poi termina subito l'esecuzione
    const v = this.formReg.value;  // ottiene i valori del form di registrazione
    if (v.password !== v.password2) {
      this.toast.warn('Password diversa', 'Le due password non coincidono.', '⚠️');
      return;
    }
    const quartiere = this.quartieri.find((q: any) => q.id_quartiere === Number(v.id_quartiere)); 
    this.loading = true;
    this.auth.registra({
      nome_completo: v.nome_completo,
      email:         v.email,
      password:      v.password,
      indirizzo:     v.indirizzo,
      quartiere
    }).subscribe({
      next: () => {
        this.loading = false;
        this.toast.ok('Account creato!', 'Benvenuto in reloop :)', '🌿');
        this.router.navigate(['/home']);
      },
      error: () => {
        this.loading = false;
        this.toast.err('Errore', 'Email già in uso o dati non validi.', '❌');
      }
    });
  }

  // metodo per verificare se un campo del form è invalido e toccato, utile per mostrare messaggi di errore (usato nel template html)
  invalid(form: FormGroup, field: string): boolean {
    const c = form.get(field); // controllo sul campo del form (con tutti i metodi e proprietà del controllo)
    return !!(c?.invalid && c?.touched);
  }

  // metodo per formattare il numero di scambi, se maggiore di 1000 lo converte in formato "k"
  formatNum(n: number): string {
    if (n >= 1000) return (n / 1000).toFixed(1).replace('.', ',') + 'k';
    return n.toString();
  }

  // metodo per formattare la quantità di CO2, se maggiore di 1000 lo converte in formato "t"
  formatCo2(kg: number): string {
    if (kg >= 1000) return (kg / 1000).toFixed(1) + ' t';
    return kg + ' kg';
  }
}