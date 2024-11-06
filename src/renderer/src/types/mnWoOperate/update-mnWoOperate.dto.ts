import { ConnectUserInterface } from "../user/connect-user.dto";
import { ConnectMnWoReportInterface } from "../mnWoReport/connect-mnWoReport.dto";
import { OperatePosition } from "../enums";

interface UpdateMnWoOperateUserRelationInputInterface {
  connect: ConnectUserInterface;
}
interface UpdateMnWoOperateMnWoReportRelationInputInterface {
  connect: ConnectMnWoReportInterface;
}

export interface UpdateMnWoOperateInterface {
  nik?: string;
  user?: UpdateMnWoOperateUserRelationInputInterface;
  repId?: string;
  mnWoReport?: UpdateMnWoOperateMnWoReportRelationInputInterface;
  opPos?: OperatePosition;
  opPoint?: number;
  createdBy?: string;
  updatedBy?: string;
}
