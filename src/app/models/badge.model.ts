export interface Badge {
  nome_badge: string;
  soglia_punti: number | null;
  descrizione_badge: string;
  icona_badge: string;
  colore: string;
}

export interface BadgeOttenuto {
  id?: {
    id_utente_reg: number;
    nome_badge: string;
  };
  badge?: Badge;
  data_ottenimento: string;
}