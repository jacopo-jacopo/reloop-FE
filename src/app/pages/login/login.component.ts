import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../shared/toast/toast.service';
import { QuartiereService } from '../../core/services/quartiere.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

  quartieri: any[]          = [];
  citta: string[]           = [];
  quartieriFiltrarti: any[] = [];
  stats = signal<any>(null);

  formLogin: FormGroup = this.fb.group({
    email:    ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  // Almeno 8 caratteri, 1 maiuscola, 1 minuscola, 1 numero, 1 carattere speciale tra !?#-_
  static readonly PASSWORD_PATTERN = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!?#\-_]).{8,}$/;

  // Il dominio @reloop.it è riservato agli amministratori
  static emailNonRiservata(control: AbstractControl): ValidationErrors | null {
    const value = (control.value || '').toLowerCase();
    return value.endsWith('@reloop.it') ? { email: true } : null;
  }

  formReg: FormGroup = this.fb.group({
    nome_completo: ['', Validators.required],
    email:         ['', [Validators.required, Validators.email, LoginComponent.emailNonRiservata]],
    password:      ['', [Validators.required, Validators.pattern(LoginComponent.PASSWORD_PATTERN)]],
    password2:     ['', Validators.required],
    indirizzo:     ['', Validators.required],
    citta:         ['', Validators.required],
    id_quartiere:  ['', Validators.required]
  });

  ngOnInit() {
    // Carica quartieri dal backend per il form di registrazione
    this.quartiereService.getAll().subscribe({
      next: (q) => {
        this.quartieri = q;
        this.citta     = [...new Set(q.map((x: any) => x.citta))];
      },
      error: () => this.toast.err('Errore', 'Impossibile caricare i quartieri.', '❌')
    });

    // Carica le statistiche pubbliche dal backend
    this.http.get<any>(`${this.API}/stats/pubbliche`).subscribe({
      next: (s) => this.stats.set(s),
      error: () => {}
    });
  }

  switchTab(t: 'accedi' | 'reg') { this.tabAttiva = t; }

  onCittaChange(event: Event) {
    const citta = (event.target as HTMLSelectElement).value;
    this.formReg.get('id_quartiere')?.setValue('');
    this.quartieriFiltrarti = this.quartieri.filter((q: any) => q.citta === citta);
  }

  doLogin() {
    if (this.formLogin.invalid) { this.formLogin.markAllAsTouched(); return; }
    this.loading = true;
    const { email, password } = this.formLogin.value;
    this.auth.login(email, password).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.tipo === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.toast.ok('Benvenuto su reloop!', 'Buono scambio 👋', '🌿');
          this.router.navigate(['/home']);
        }
      },
      error: () => {
        this.loading = false;
        this.toast.err('Errore login', 'Credenziali non valide.', '❌');
      }
    });
  }

  doRegister() {
    if (this.formReg.invalid) { this.formReg.markAllAsTouched(); return; }
    const v = this.formReg.value;
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
        this.toast.ok('Account creato!', 'Benvenuto in reloop 🌿', '✅');
        this.router.navigate(['/home']);
      },
      error: () => {
        this.loading = false;
        this.toast.err('Errore', 'Email già in uso o dati non validi.', '❌');
      }
    });
  }

  invalid(form: FormGroup, field: string): boolean {
    const c = form.get(field);
    return !!(c?.invalid && c?.touched);
  }

  formatNum(n: number): string {
    if (n >= 1000) return (n / 1000).toFixed(1).replace('.', ',') + 'k';
    return n.toString();
  }

  formatCo2(kg: number): string {
    if (kg >= 1000) return (kg / 1000).toFixed(1) + ' t';
    return kg + ' kg';
  }
}