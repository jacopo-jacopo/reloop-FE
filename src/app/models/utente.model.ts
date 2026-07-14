// interfaccia typescript per l'utente registrato, corrisponde al DTO UtenteSessioneResponse del backend
export interface UtenteRegistrato {
  id_utente_reg: number;
  nome_completo: string;
  foto_profilo?: string;
  indirizzo: string;
  quartiere: {
    id_quartiere: number;
    nome_quartiere: string;
    citta: string;
  };
}

// interfaccia typescript per l'amministratore, corrisponde al DTO AdminSessioneResponse del backend
export interface Amministratore {
  id_utente_adm: number;
  nome_completo: string;
}