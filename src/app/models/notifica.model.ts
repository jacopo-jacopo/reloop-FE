// interfaccia typescript per la notifica, corrisponde al DTO NotificaResponse del backend

export interface Notifica {
  id_notifica: number;
  tipo: string;
  testo: string;
  letta: boolean;
  timestamp_notifica: string;
}
