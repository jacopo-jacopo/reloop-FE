export type StatoSegnalazione = 'in_attesa' | 'presa_in_carico' | 'chiusa';

export interface Segnalazione {
  id_segnalazione: number;
  motivazione: string;
  stato_segnalazione: StatoSegnalazione;
  annuncio_segnalato?: {
    id_annuncio: number;
    titolo: string;
  };
  segnalante?: { id_utente_reg: number };
  timestamp_segnalazione: string;
  amministratore?: { id_utente_adm: number };
}