import { EntityUserInterface } from "../user/user.entity";
import { EntityMnWoReportInterface } from "../mnWoReport/mnWoReport.entity";
import { OperatePosition } from "../enums";

export interface EntityMnWoOperateInterface {
  nik: string;
  user?: EntityUserInterface;
  mnWoReport?: EntityMnWoReportInterface;
  opPos: OperatePosition;
  opPoint: number;
}
