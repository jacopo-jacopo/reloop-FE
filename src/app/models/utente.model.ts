export interface UtenteRegistrato {
  id_utente_reg: number;
  nome_completo: string;
  email: string;
  indirizzo: string;
  punteggio: number;
  co2_totale: number;
  quartiere: {
    id_quartiere: number;
    nome_quartiere: string;
    citta: string;
  };
}

export interface Amministratore {
  id_utente_adm: number;
  nome_completo: string;
  email: string;
}