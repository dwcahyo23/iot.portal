import { Status } from "../enums";

export interface PdScwInterface {
  id: string;
  mcCd: string;
  scwTo: string;
  scwCom: string;
  scwFrom: string;
  scwMemo: string;
  scwRemarks: string;
  scwDrw: string | null;
  scwPrd: string | null;
  scwStatus: Status;
  scwStartAt: Date | null;
  scwProgresAt: Date | null;
  scwCloseAt: Date | null;
}
