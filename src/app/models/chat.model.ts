export type StatoChat = 'aperta' | 'completata' | 'annullata';

interface UtenteBase {
  id_utente_reg: number;
  nome_completo: string;
  foto_profilo?: string;
}

interface AnnuncioBase {
  id_annuncio: number;
  titolo: string;
  prezzo_stimato?: number;
  pubblicante?: UtenteBase;
}

interface AnnuncioIncluso {
  id: { id_proposta: number; id_annuncio_offerto: number };
  flag_selezionato: boolean;
  annuncio_offerto?: AnnuncioBase;
}

export interface Chat {
  id_chat: number;
  stato_chat: StatoChat;
  data_completamento?: string;
  timestamp_chat: string;
  proposta_generante?: {
    id_proposta: number;
    proponente?: UtenteBase;
    annuncio_interesse?: AnnuncioBase;
    annunci_offerti?: AnnuncioIncluso[];
  };
}
