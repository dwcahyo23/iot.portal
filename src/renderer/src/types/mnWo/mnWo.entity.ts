import { EntityMstComInterface } from "../mstCom/mstCom.entity";
import { EntityMstMchInterface } from "../mstMch/mstMch.entity";
import { EntityMstMtnPrioInterface } from "../mstMtnPrio/mstMtnPrio.entity";
import { Status } from "../enums";
import { EntityMnWoPpInterface } from "../mnWoPp/mnWoPp.entity";
import { EntityMnWoReportInterface } from "../mnWoReport/mnWoReport.entity";

export interface EntityMnWoInterface {
  woId: string;
  comId: string;
  mstCom?: EntityMstComInterface;
  mcCd: string;
  mstMch?: EntityMstMchInterface;
  woDep: string | null;
  woShif: string | null;
  woPri: string;
  mstMtnPrio?: EntityMstMtnPrioInterface;
  woAt: Date | null;
  woStopAt: Date | null;
  woAppendAt: Date | null;
  woClose: Status;
  woCloseAt: Date | null;
  woUser: string | null;
  woAppr: Status;
  woApprBy: string | null;
  woApprAt: Date | null;
  mttf: number | null;
  mtbf: number | null;
  mttr: number | null;
  woMemo: string | null;
  woRemarks: string | null;
  mnWoPp?: EntityMnWoPpInterface[];
  mnWoReport?: EntityMnWoReportInterface;
}
