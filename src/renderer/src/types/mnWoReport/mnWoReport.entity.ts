import { EntityMnWoInterface } from "../mnWo/mnWo.entity";
import { Status } from "../enums";
import { EntityMnWoOperateInterface } from "../mnWoOperate/mnWoOperate.entity";

export interface EntityMnWoReportInterface {
  woId: string;
  mnWo?: EntityMnWoInterface;
  repCh: string;
  repAn: string;
  repCr: string;
  repPr: string;
  repClosed: Status;
  repClosedAt: Date;
  repWorkStartAt: Date;
  repWorkCloseAt: Date;
  reportBy: string;
  mnWoOperate?: EntityMnWoOperateInterface[];
}
