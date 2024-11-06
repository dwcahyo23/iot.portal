import { ConnectMnWoInterface } from "../mnWo/connect-mnWo.dto";
import { ConnectMstMchPartInterface } from "../mstMchPart/connect-mstMchPart.dto";
import { Status } from "../enums";
import { ConnectMnWoPrInterface } from "../mnWoPr/connect-mnWoPr.dto";

interface CreateMnWoPpMnWoRelationInputInterface {
  connect: ConnectMnWoInterface;
}
interface CreateMnWoPpMstMchPartRelationInputInterface {
  connect: ConnectMstMchPartInterface;
}
interface CreateMnWoPpMnWoPrRelationInputInterface {
  connect: ConnectMnWoPrInterface;
}

export interface CreateMnWoPpInterface {
  woId: string;
  mnWo: CreateMnWoPpMnWoRelationInputInterface;
  slug?: string | null;
  bom: string;
  mstMchPart: CreateMnWoPpMstMchPartRelationInputInterface;
  ppQty: number;
  ppUom: string;
  ppAppr?: Status;
  ppApprAt?: Date | null;
  ppApprBy?: string | null;
  ppReady?: Status;
  ppReadyAt?: Date | null;
  ppReadyBy?: string | null;
  ppClosed?: Status;
  ppClosedAt?: Date | null;
  ppClosedBy?: string | null;
  ppMemo?: string | null;
  prId?: string | null;
  mnWoPr?: CreateMnWoPpMnWoPrRelationInputInterface | null;
  createdBy?: string;
  updatedBy?: string;
}
