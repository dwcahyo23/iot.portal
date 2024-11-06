import { ConnectMstMchInterface } from "../mstMch/connect-mstMch.dto";
import { ConnectMstDeptInterface } from "../mstDept/connect-mstDept.dto";
import { ConnectMstComInterface } from "../mstCom/connect-mstCom.dto";
import { ConnectUserInterface } from "../user/connect-user.dto";
import { Status } from "../enums";

interface UpdatePdScwMstMchRelationInputInterface {
  connect: ConnectMstMchInterface;
}
interface UpdatePdScwMstDeptRelationInputInterface {
  connect: ConnectMstDeptInterface;
}
interface UpdatePdScwMstComRelationInputInterface {
  connect: ConnectMstComInterface;
}
interface UpdatePdScwUserRelationInputInterface {
  connect: ConnectUserInterface;
}

export interface UpdatePdScwInterface {
  mcCd?: string;
  mstMch?: UpdatePdScwMstMchRelationInputInterface;
  scwTo?: string;
  mstDept?: UpdatePdScwMstDeptRelationInputInterface;
  scwCom?: string;
  mstCom?: UpdatePdScwMstComRelationInputInterface;
  scwFrom?: string;
  user?: UpdatePdScwUserRelationInputInterface;
  scwMemo?: string;
  scwRemarks?: string;
  scwDrw?: string | null;
  scwPrd?: string | null;
  scwStatus?: Status;
  scwStartAt?: Date | null;
  scwProgresAt?: Date | null;
  scwCloseAt?: Date | null;
  createdBy?: string;
  updatedBy?: string;
}
