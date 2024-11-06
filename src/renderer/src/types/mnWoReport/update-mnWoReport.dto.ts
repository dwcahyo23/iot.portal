import { ConnectMnWoInterface } from "../mnWo/connect-mnWo.dto";
import { Status } from "../enums";
import { CreateMnWoOperateInterface } from "../mnWoOperate/create-mnWoOperate.dto";
import { ConnectMnWoOperateInterface } from "../mnWoOperate/connect-mnWoOperate.dto";

interface UpdateMnWoReportMnWoRelationInputInterface {
  connect: ConnectMnWoInterface;
}
interface UpdateMnWoReportMnWoOperateRelationInputInterface {
  create?: CreateMnWoOperateInterface[];
  connect?: ConnectMnWoOperateInterface[];
}

export interface UpdateMnWoReportInterface {
  mnWo?: UpdateMnWoReportMnWoRelationInputInterface;
  repCh?: string;
  repAn?: string;
  repCr?: string;
  repPr?: string;
  repClosed?: Status;
  repClosedAt?: Date;
  repWorkStartAt?: Date;
  repWorkCloseAt?: Date;
  reportBy?: string;
  mnWoOperate?: UpdateMnWoReportMnWoOperateRelationInputInterface;
  createdBy?: string;
  updatedBy?: string;
}
