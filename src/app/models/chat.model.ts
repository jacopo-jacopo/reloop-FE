// tipo di dato per lo stato della chat, può essere 'aperta', 'completata' o 'annullata
export type StatoChat = 'aperta' | 'completata' | 'annullata';

// interfaccia typescript per l'utente base, corrisponde al DTO UtenteChatSummary del backend
interface UtenteBase {
  id_utente_reg: number;
  nome_completo: string;
  foto_profilo?: string;
  indirizzo?: string;
}

// corrisponde a una combinazione di AnnuncioInteresseSummary e AnnuncioOffertoSummary nel BE
interface AnnuncioBase {
  id_annuncio: number;
  titolo: string;
  prezzo_stimato?: number;
  pubblicante?: UtenteBase;
}

// interfaccia typescript per l'annuncio incluso nella chat, corrisponde al DTO AnnuncioInclusoSummary del backend
interface AnnuncioIncluso {
  id: { id_proposta: number; id_annuncio_offerto: number };
  flag_selezionato: boolean;
  annuncio_offerto?: AnnuncioBase;
}

// interfaccia typescript per la chat, corrisponde al DTO ChatResponse del backend

export interface Chat {
  id_chat: number;
  stato_chat: StatoChat;
  data_completamento?: string;
  timestamp_chat: string;
  confermato_pubblicante: boolean;
  confermato_proponente: boolean;
  proposta_generante?: {
    id_proposta: number;
    proponente?: UtenteBase;
    annuncio_interesse?: AnnuncioBase;
    annunci_offerti?: AnnuncioIncluso[];
  };
}
