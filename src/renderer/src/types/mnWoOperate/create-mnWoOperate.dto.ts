import { ConnectUserInterface } from "../user/connect-user.dto";
import { ConnectMnWoReportInterface } from "../mnWoReport/connect-mnWoReport.dto";
import { OperatePosition } from "../enums";

interface CreateMnWoOperateUserRelationInputInterface {
  connect: ConnectUserInterface;
}
interface CreateMnWoOperateMnWoReportRelationInputInterface {
  connect: ConnectMnWoReportInterface;
}

export interface CreateMnWoOperateInterface {
  nik: string;
  user: CreateMnWoOperateUserRelationInputInterface;
  repId: string;
  mnWoReport: CreateMnWoOperateMnWoReportRelationInputInterface;
  opPos: OperatePosition;
  opPoint: number;
  createdBy?: string;
  updatedBy?: string;
}
