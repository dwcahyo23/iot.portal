import { EntityMnWoInterface } from "../mnWo/mnWo.entity";
import { EntityMstMchPartInterface } from "../mstMchPart/mstMchPart.entity";
import { Status } from "../enums";
import { EntityMnWoPrInterface } from "../mnWoPr/mnWoPr.entity";

export interface EntityMnWoPpInterface {
  woId: string;
  mnWo?: EntityMnWoInterface;
  slug: string | null;
  bom: string;
  mstMchPart?: EntityMstMchPartInterface;
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
  mnWoPr?: EntityMnWoPrInterface | null;
}
