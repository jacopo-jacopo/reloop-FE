// tipo di dato per la condizione dell'annuncio, può essere 'scarso', 'discreto', 'buono', 'ottimo' o 'come_nuovo'
export type CondizioneAnnuncio = 'scarso' | 'discreto' | 'buono' | 'ottimo' | 'come_nuovo';
// tipo di dato per lo stato dell'annuncio, può essere 'attivo', 'sospeso', 'chiuso' o 'oscurato'
export type StatoAnnuncio = 'attivo' | 'sospeso' | 'chiuso' | 'oscurato';

// interfaccia typescript per l'annuncio, corrisponde al DTO AnnuncioResponse del backend

export interface Annuncio {
  id_annuncio: number;
  titolo: string;
  descrizione_annuncio: string;
  categoria: string;
  prezzo_stimato: number;
  condizioni: CondizioneAnnuncio;
  stato_annuncio: StatoAnnuncio;
  notifica_oscuramento_letta: boolean;
  pubblicante?: {
    id_utente_reg: number;
    nome_completo: string;
    foto_profilo?: string;
    quartiere?: {
      id_quartiere: number;
      nome_quartiere: string;
      citta: string;
    };
  };
}