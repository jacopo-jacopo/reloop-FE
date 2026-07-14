import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SegnalazioneService } from '../../core/services/segnalazione.service';
import { AnnuncioService } from '../../core/services/annuncio.service';
import { UtenteService } from '../../core/services/utente.service';
import { QuartiereService } from '../../core/services/quartiere.service';
import { ToastService } from '../../shared/toast/toast.service';
import { AuthService } from '../../core/services/auth.service';

type Tab = 'segnalazioni' | 'utenti' | 'quartieri'; // definisce un tipo di dato Tab che può assumere uno dei tre valori indicati

// Component per la pagina di amministrazione, permette di gestire le segnalazioni, gli utenti e i quartieri.

// inizia il decoratore, @Component definisce un componente Angular, con selettore 'app-admin'
@Component({
  selector: 'app-admin',
  standalone: true, // stabilisce che il componente è standalone, cioè non fa parte di un modulo Angular e usa le dipendenze dichiarate in imports
  imports: [CommonModule], // importa il modulo CommonModule, che fornisce direttive comuni come @if e @for
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private segnalazioneService = inject(SegnalazioneService);
  private annuncioService     = inject(AnnuncioService);
  private utenteService       = inject(UtenteService);
  private quartiereService    = inject(QuartiereService);
  private toast               = inject(ToastService);
  private auth                = inject(AuthService);
  private http                = inject(HttpClient);
  private readonly API        = 'http://localhost:8080/api';

  // segnalazioni
  segnalazioni       = signal<any[]>([]);
  segnalazioneAttiva = signal<any | null>(null);
  annuncioAttivo     = signal<any | null>(null);
  fotoAnnuncio       = signal<string[]>([]);
  loading            = signal(true);

  // tab e stats
  tabAttiva = signal<Tab>('segnalazioni');
  stats     = signal<any | null>(null);

  // utenti
  utenti        = signal<any[]>([]);
  loadingUtenti = signal(true);

  // quartieri
  quartieri           = signal<any[]>([]);
  quartiereInModifica = signal<any | null>(null);
  formNuovo           = signal({ nome_quartiere: '', citta: '' });

  // logout
  confermaLogoutAperta = signal(false);

  // metodo chiamato all'inizializzazione del componente
  ngOnInit() {
    this.caricaSegnalazioni();
    this.caricaStats();
  }

  // metodo per cambiare il tab attivo nella pagina di amministrazione
  cambiaTab(t: Tab) {
    this.tabAttiva.set(t);
    if (t === 'utenti'    && this.utenti().length === 0)    this.caricaUtenti();
    if (t === 'quartieri' && this.quartieri().length === 0) this.caricaQuartieri();
  }



  // --- STATS ---

  // carica le statistiche dal backend e aggiorna lo stato del componente
  caricaStats() {
    this.http.get<any>(`${this.API}/stats/admin`).subscribe({
      next: (data) => this.stats.set(data),
      error: () => {}
    });
  }

  // --- SEGNALAZIONI ---
  caricaSegnalazioni() {
    this.segnalazioneService.getTutte().subscribe({
      next: (data) => { this.segnalazioni.set(data); this.loading.set(false); },
      error: () => { this.toast.err('Errore', 'Impossibile caricare le segnalazioni.', '❌'); this.loading.set(false); }
    });
  }

  // ispezione e risoluzione segnalazione
  ispeziona(s: any) {
    this.segnalazioneAttiva.set(s);
    this.fotoAnnuncio.set([]);
    const idAnnuncio = s.annuncio_segnalato?.id_annuncio;
    if (idAnnuncio) {
      this.annuncioService.getById(idAnnuncio).subscribe({
        next: (ann) => this.annuncioAttivo.set(ann),
        error: () => {}
      });
      this.annuncioService.getFoto(idAnnuncio).subscribe({
        next: (f) => this.fotoAnnuncio.set(f),
        error: () => {}
      });
    }
    if (s.stato_segnalazione === 'in_attesa') {
      this.segnalazioneService.prendiInCarico(s.id_segnalazione).subscribe({
        next: (aggiornata) => {
          this.segnalazioni.update(list =>
            list.map(x => x.id_segnalazione === aggiornata.id_segnalazione ? aggiornata : x)
          );
          this.segnalazioneAttiva.set(aggiornata);
          this.toast.ok('Presa in carico', `Segnalazione #${s.id_segnalazione} assegnata a te.`, '📂');
        },
        error: () => {}
      });
    }
  }

  // risolvi la segnalazione, se oscura è true l'annuncio viene oscurato, altrimenti la segnalazione viene respinta
  risolvi(oscura: boolean) {
    const s = this.segnalazioneAttiva();
    if (!s) return;
    this.segnalazioneService.chiudi(s.id_segnalazione, oscura).subscribe({
      next: (aggiornata) => {
        this.segnalazioni.update(list =>
          list.map(x => x.id_segnalazione === aggiornata.id_segnalazione ? aggiornata : x)
        );
        this.segnalazioneAttiva.set(aggiornata);
        this.annuncioAttivo.set(aggiornata?.annuncio_segnalato || null);
        this.caricaStats();
        if (oscura) this.toast.err('Annuncio rimosso', 'L\'annuncio è stato oscurato.', '🗑️');
        else        this.toast.ok('Segnalazione respinta', 'Annuncio conforme.', '🟢');
      },
      error: () => this.toast.err('Errore', 'Impossibile risolvere.', '❌')
    });
  }



  // --- UTENTI ---

  // carica gli admin dal backend e aggiorna lo stato del componente
  caricaUtenti() {
    this.loadingUtenti.set(true);
    this.utenteService.getAllAdmin().subscribe({
      next: (data) => { this.utenti.set(data); this.loadingUtenti.set(false); },
      error: () => { this.toast.err('Errore', 'Impossibile caricare gli utenti.', '❌'); this.loadingUtenti.set(false); }
    });
  }

  // toggla lo stato di blocco di un utente, se è bloccato lo sblocca e viceversa
  toggleBlocca(u: any) {
    this.utenteService.blocca(u.id_utente_reg, !u.bloccato).subscribe({
      next: (aggiornato) => {
        this.utenti.update(list =>
          list.map(x => x.id_utente_reg === aggiornato.id_utente_reg ? aggiornato : x)
        );
        this.caricaStats();
        this.toast.ok(
          aggiornato.bloccato ? 'Utente bloccato' : 'Utente sbloccato',
          aggiornato.nome_completo,
          aggiornato.bloccato ? '🔒' : '🔓'
        );
      },
      error: () => this.toast.err('Errore', 'Impossibile modificare lo stato.', '❌')
    });
  }



  // --- QUARTIERI ---
  
  // carica i quartieri dal backend e aggiorna lo stato del componente
  caricaQuartieri() {
    this.quartiereService.getAll().subscribe({
      next: (data) => this.quartieri.set(data),
      error: () => this.toast.err('Errore', 'Impossibile caricare i quartieri.', '❌')
    });
  }

  // metodi per gestire la modifica dei quartieri
  iniziaModifica(q: any) { this.quartiereInModifica.set({ ...q }); }
  annullaModifica()       { this.quartiereInModifica.set(null); }

  aggiornaModifica(campo: string, valore: string) {
    this.quartiereInModifica.update(q => q ? { ...q, [campo]: valore } : q);
  }

  salvaModifica() {
    const q = this.quartiereInModifica();
    if (!q) return;
    this.quartiereService.aggiorna(q.id_quartiere, q.nome_quartiere, q.citta).subscribe({
      next: (aggiornato) => {
        this.quartieri.update(list =>
          list.map(x => x.id_quartiere === aggiornato.id_quartiere ? aggiornato : x)
        );
        this.quartiereInModifica.set(null);
        this.toast.ok('Salvato', 'Quartiere aggiornato.', '✅');
      },
      error: () => this.toast.err('Errore', 'Impossibile aggiornare il quartiere.', '❌')
    });
  }

  // formNuovo è un segnale che contiene i dati del nuovo quartiere da creare
  aggiornaFormNuovo(campo: string, valore: string) {
    this.formNuovo.update(f => ({ ...f, [campo]: valore }));
  }

  creaQuartiere() {
    const f = this.formNuovo();
    if (!f.nome_quartiere.trim() || !f.citta.trim()) return;
    this.quartiereService.crea(f.nome_quartiere.trim(), f.citta.trim()).subscribe({
      next: (nuovo) => {
        this.quartieri.update(list => [...list, nuovo]);
        this.formNuovo.set({ nome_quartiere: '', citta: '' });
        this.toast.ok('Creato', 'Nuovo quartiere aggiunto.', '✅');
      },
      error: () => this.toast.err('Errore', 'Impossibile creare il quartiere.', '❌')
    });
  }



  // --- LOGOUT ---
  apriConfermaLogout()   { this.confermaLogoutAperta.set(true); }
  chiudiConfermaLogout() { this.confermaLogoutAperta.set(false); }
  logout() { this.confermaLogoutAperta.set(false); this.auth.logout(); }



  // --- HELPERS ---

  // restituisce la classe CSS da applicare al badge in base allo stato della segnalazione
  badgeClass(stato: string): string {
    if (stato === 'presa_in_carico') return 'badge-stato badge-carico';
    if (stato === 'chiusa')          return 'badge-stato badge-chiusa';
    return 'badge-stato badge-attesa';
  }

  // restituisce il testo leggibile da visualizzare nel badge in base allo stato della segnalazione (rimuove lo snake_case)
  testoStato(stato: string): string {
    return (stato || '').replace(/_/g, ' '); // g indica di sostituire tutte le occorrenze di "_", non solo la prima
  }

  idAdminCorrente(): number | null {
    return this.auth.utenteCorrente()?.id_utente_adm ?? null;
  }

  segnalazioniInAttesa() {
    return this.segnalazioni().filter(s => s.stato_segnalazione === 'in_attesa');
  }

  segnalazioniMie() {
    const id = this.idAdminCorrente();
    return this.segnalazioni().filter(s =>
      s.stato_segnalazione !== 'in_attesa' && s.amministratore?.id_utente_adm === id
    );
  }

  segnalazioniAltri() {
    const id = this.idAdminCorrente();
    return this.segnalazioni().filter(s =>
      s.stato_segnalazione !== 'in_attesa' && s.amministratore?.id_utente_adm !== id
    );
  }

  puoAgire(s: any): boolean {
    if (!s) return false;
    if (s.stato_segnalazione === 'chiusa') return false;
    if (s.stato_segnalazione === 'presa_in_carico') {
      return s.amministratore?.id_utente_adm === this.idAdminCorrente();
    }
    return true;
  }

  iniziali(nome?: string): string {
    return (nome || '').split(' ').map((p: string) => p[0]).join('').substring(0, 2).toUpperCase();
  }
}
