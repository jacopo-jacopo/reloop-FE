import { Injectable, inject, signal } from '@angular/core';
import { Annuncio } from '../../models/annuncio.model';
import { UtenteService } from './utente.service';

// @Injectable({ providedIn: 'root' }) crea un singleton di OverlayService, cioè solo un'istanza in tutta l'app 
// in modo che i signal leggano e scrivano sempre sugli stessi valori (globalmente)
@Injectable({ providedIn: 'root' })
export class OverlayService {
  private utenteService = inject(UtenteService);

  // ANNUNCIO OVERLAY
  annOverlayAperto = signal(false);
  annuncioSelezionato = signal<Annuncio | null>(null);

  // apre l'overlay dell'annuncio selezionato
  apriAnnuncio(ann: Annuncio) {
    this.annuncioSelezionato.set(ann);
    this.annOverlayAperto.set(true);
  }

  // chiude l'overlay dell'annuncio selezionato
  chiudiAnnuncio() {
    this.annOverlayAperto.set(false);
    this.annuncioSelezionato.set(null);
  }


  // USER OVERLAY
  userOverlayAperto = signal(false);
  idUtenteSelezionato = signal<number | null>(null);
  utenteSelezionato = signal<any>(null);
  recensioniUtente = signal<any[]>([]);

  // apre l'overlay dell'utente selezionato, recuperando i dati dell'utente e le recensioni
  apriUtente(idUtente: number) {
    this.idUtenteSelezionato.set(idUtente);
    this.utenteSelezionato.set(null);
    this.recensioniUtente.set([]);
    this.userOverlayAperto.set(true);

    this.utenteService.getById(idUtente).subscribe({
      next: (u) => this.utenteSelezionato.set(u),
      error: () => {}
    });
    this.utenteService.getRecensioni(idUtente).subscribe({
      next: (r) => this.recensioniUtente.set(r),
      error: () => {}
    });
  }

  // chiude l'overlay dell'utente selezionato
  chiudiUtente() {
    this.userOverlayAperto.set(false);
    this.idUtenteSelezionato.set(null);
    this.utenteSelezionato.set(null);
    this.recensioniUtente.set([]);
  }


  // MODAL RECENSIONE
  recensioneAperta = signal(false);
  idUtenteRecensito = signal<number | null>(null);
  idChatCompletata = signal<number | null>(null);

  // apre il modal della recensione, impostando l'id dell'utente recensito e l'id della chat completata
  apriRecensione(idUtente: number, idChat: number) {
    this.idUtenteRecensito.set(idUtente);
    this.idChatCompletata.set(idChat);
    this.recensioneAperta.set(true);
  }

  // chiude il modal della recensione, resettando l'id dell'utente recensito e l'id della chat completata
  chiudiRecensione() {
    this.recensioneAperta.set(false);
    this.idUtenteRecensito.set(null);
    this.idChatCompletata.set(null);
  }


  // MODAL PROPOSTA
  propostaAperta = signal(false);
  annuncioTarget = signal<Annuncio | null>(null);

  // apre il modal della proposta, impostando l'annuncio target
  apriProposta(ann: Annuncio) {
    this.annuncioTarget.set(ann);
    this.propostaAperta.set(true);
  }

  // chiude il modal della proposta, resettando l'annuncio target
  chiudiProposta() {
    this.propostaAperta.set(false);
    this.annuncioTarget.set(null);
  }


  // MODAL MODIFICA PROFILO
  modificaProfiloAperta = signal(false);
  apriModificaProfilo() { this.modificaProfiloAperta.set(true); } // apre il modal della modifica del profilo
  chiudiModificaProfilo() { this.modificaProfiloAperta.set(false); } // chiude il modal della modifica del profilo

}
