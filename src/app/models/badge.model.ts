export interface Badge {
  nome_badge: string;
  soglia_punti: number;
  descrizione_badge: string;
  emoji: string;
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