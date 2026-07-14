// interfaccia typescript per il badge, corrisponde all'entità Badge del backend

export interface Badge {
  nome_badge: string;
  soglia_punti: number | null;
  descrizione_badge: string;
  icona_badge: string;
  colore: string;
}

// interfaccia typescript per il badge ottenuto, corrisponde all'entità BadgeOttenuto del backend

export interface BadgeOttenuto {
  id?: {
    id_utente_reg: number;
    nome_badge: string;
  };
  badge?: Badge;
  data_ottenimento: string;
}