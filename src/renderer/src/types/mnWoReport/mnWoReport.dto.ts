import { Status } from "../enums";

export interface MnWoReportInterface {
  woId: string;
  repCh: string;
  repAn: string;
  repCr: string;
  repPr: string;
  repClosed: Status;
  repClosedAt: Date;
  repWorkStartAt: Date;
  repWorkCloseAt: Date;
  reportBy: string;
}
