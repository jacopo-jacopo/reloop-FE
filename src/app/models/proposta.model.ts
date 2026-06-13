export type StatoProposta = 'in_attesa' | 'accettata' | 'rifiutata';

export interface Proposta {
  id_proposta: number;
  stato_proposta: StatoProposta;
  annuncio_interesse?: {
    id_annuncio: number;
    titolo: string;
    pubblicante?: { id_utente_reg: number; nome_completo: string };
  };
  proponente?: {
    id_utente_reg: number;
    nome_completo: string;
  };
  timestamp_proposta: string;
  annunci_offerti?: AnnuncioIncluso[];
}

export interface AnnuncioIncluso {
  id: { id_proposta: number; id_annuncio_offerto: number };
  flag_selezionato: boolean;
  annuncio_offerto?: { id_annuncio: number; titolo: string; prezzo_stimato?: number };
}