// tipo di dato per lo stato della segnalazione, può essere 'in_attesa', 'presa_in_carico' o 'chiusa'
export type StatoSegnalazione = 'in_attesa' | 'presa_in_carico' | 'chiusa';

// interfaccia typescript per la segnalazione, corrisponde al DTO SegnalazioneResponse del backend
export interface Segnalazione {
  id_segnalazione: number;
  motivazione: string;
  stato_segnalazione: StatoSegnalazione;
  annuncio_segnalato?: {
    id_annuncio: number;
    titolo: string;
  };
  timestamp_segnalazione: string;
  amministratore?: { id_utente_adm: number };
}