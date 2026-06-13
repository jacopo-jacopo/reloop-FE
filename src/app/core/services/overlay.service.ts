import { Injectable, signal } from '@angular/core';
import { Annuncio } from '../../models/annuncio.model';

@Injectable({ providedIn: 'root' })
export class OverlayService {

  // ── Ann Overlay ──
  annOverlayAperto = signal(false);
  annuncioSelezionato = signal<Annuncio | null>(null);

  apriAnnuncio(ann: Annuncio) {
    this.annuncioSelezionato.set(ann);
    this.annOverlayAperto.set(true);
  }

  chiudiAnnuncio() {
    this.annOverlayAperto.set(false);
    this.annuncioSelezionato.set(null);
  }

  // ── User Overlay ──
  userOverlayAperto = signal(false);
  idUtenteSelezionato = signal<number | null>(null);

  apriUtente(idUtente: number) {
    this.idUtenteSelezionato.set(idUtente);
    this.userOverlayAperto.set(true);
  }

  chiudiUtente() {
    this.userOverlayAperto.set(false);
    this.idUtenteSelezionato.set(null);
  }

  // ── Recensione Modal ──
  recensioneAperta = signal(false);
  idUtenteRecensito = signal<number | null>(null);
  idChatCompletata = signal<number | null>(null);

  apriRecensione(idUtente: number, idChat: number) {
    this.idUtenteRecensito.set(idUtente);
    this.idChatCompletata.set(idChat);
    this.recensioneAperta.set(true);
  }

  chiudiRecensione() {
    this.recensioneAperta.set(false);
    this.idUtenteRecensito.set(null);
    this.idChatCompletata.set(null);
  }

  // ── Proposta Modal ──
  propostaAperta = signal(false);
  annuncioTarget = signal<Annuncio | null>(null);

  apriProposta(ann: Annuncio) {
    this.annuncioTarget.set(ann);
    this.propostaAperta.set(true);
  }

  chiudiProposta() {
    this.propostaAperta.set(false);
    this.annuncioTarget.set(null);
  }

  // ── Modifica Profilo ──
modificaProfiloAperta = signal(false);
apriModificaProfilo() { this.modificaProfiloAperta.set(true); }
chiudiModificaProfilo() { this.modificaProfiloAperta.set(false); }



}
