import { Status } from "../enums";

export interface MnWoPpInterface {
  woId: string;
  slug: string | null;
  bom: string;
  ppQty: number;
  ppUom: string;
  ppAppr: Status;
  ppApprAt: Date | null;
  ppReady: Status;
  ppReadyAt: Date | null;
  ppClosed: Status;
  ppClosedAt: Date | null;
  ppMemo: string | null;
  prId: string | null;
}
