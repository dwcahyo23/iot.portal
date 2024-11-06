import { Status } from "../enums";

export interface MnWoInterface {
  woId: string;
  comId: string;
  mcCd: string;
  woDep: string | null;
  woShif: string | null;
  woPri: string;
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
}
