export interface Messaggio {
  id: {
    id_messaggio: number;
    id_chat: number;
  };
  contenuto: string;
  data_invio: string;
  flag_lettura: boolean;
  mittente?: {
    id_utente_reg: number;
    nome_completo: string;
  };
}