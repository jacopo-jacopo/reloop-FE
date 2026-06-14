export type CondizioneAnnuncio = 'scarso' | 'discreto' | 'buono' | 'ottimo' | 'come_nuovo';
export type StatoAnnuncio = 'attivo' | 'sospeso' | 'chiuso';

export interface Annuncio {
  id_annuncio: number;
  titolo: string;
  descrizione_annuncio: string;
  categoria: string;
  prezzo_stimato: number;
  condizioni: CondizioneAnnuncio;
  stato_annuncio: StatoAnnuncio;
  pubblicante?: {
    id_utente_reg: number;
    nome_completo: string;
    email?: string;
    indirizzo?: string;
    punteggio?: number;
    co2_totale?: number;
    foto_profilo?: string;
    quartiere?: {
      id_quartiere: number;
      nome_quartiere: string;
      citta: string;
    };
  };
}