import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SegnalazioneService } from '../../core/services/segnalazione.service';
import { AnnuncioService } from '../../core/services/annuncio.service';
import { UtenteService } from '../../core/services/utente.service';
import { QuartiereService } from '../../core/services/quartiere.service';
import { ToastService } from '../../shared/toast/toast.service';
import { AuthService } from '../../core/services/auth.service';

type Tab = 'segnalazioni' | 'utenti' | 'quartieri';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
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
  utenti = signal<any[]>([]);

  // quartieri
  quartieri           = signal<any[]>([]);
  quartiereInModifica = signal<any | null>(null);
  formNuovo           = signal({ nome_quartiere: '', citta: '' });

  // logout
  confermaLogoutAperta = signal(false);

  ngOnInit() {
    this.caricaSegnalazioni();
    this.caricaStats();
  }

  cambiaTab(t: Tab) {
    this.tabAttiva.set(t);
    if (t === 'utenti'    && this.utenti().length === 0)    this.caricaUtenti();
    if (t === 'quartieri' && this.quartieri().length === 0) this.caricaQuartieri();
  }

  // --- STATS ---
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
  caricaUtenti() {
    this.utenteService.getAllAdmin().subscribe({
      next: (data) => this.utenti.set(data),
      error: () => this.toast.err('Errore', 'Impossibile caricare gli utenti.', '❌')
    });
  }

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
  caricaQuartieri() {
    this.quartiereService.getAll().subscribe({
      next: (data) => this.quartieri.set(data),
      error: () => this.toast.err('Errore', 'Impossibile caricare i quartieri.', '❌')
    });
  }

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
  badgeClass(stato: string): string {
    if (stato === 'presa_in_carico') return 'badge-stato badge-carico';
    if (stato === 'chiusa')          return 'badge-stato badge-chiusa';
    return 'badge-stato badge-attesa';
  }

  testoStato(stato: string): string {
    return (stato || '').replace(/_/g, ' ');
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
}
