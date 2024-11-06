import { ConnectMstMchInterface } from "../mstMch/connect-mstMch.dto";
import { ConnectMstDeptInterface } from "../mstDept/connect-mstDept.dto";
import { ConnectMstComInterface } from "../mstCom/connect-mstCom.dto";
import { ConnectUserInterface } from "../user/connect-user.dto";
import { Status } from "../enums";

interface CreatePdScwMstMchRelationInputInterface {
  connect: ConnectMstMchInterface;
}
interface CreatePdScwMstDeptRelationInputInterface {
  connect: ConnectMstDeptInterface;
}
interface CreatePdScwMstComRelationInputInterface {
  connect: ConnectMstComInterface;
}
interface CreatePdScwUserRelationInputInterface {
  connect: ConnectUserInterface;
}

export interface CreatePdScwInterface {
  id: string;
  mcCd: string;
  mstMch: CreatePdScwMstMchRelationInputInterface;
  scwTo: string;
  mstDept: CreatePdScwMstDeptRelationInputInterface;
  scwCom: string;
  mstCom: CreatePdScwMstComRelationInputInterface;
  scwFrom: string;
  user: CreatePdScwUserRelationInputInterface;
  scwMemo: string;
  scwRemarks: string;
  scwDrw?: string | null;
  scwPrd?: string | null;
  scwStatus?: Status;
  scwStartAt?: Date | null;
  scwProgresAt?: Date | null;
  scwCloseAt?: Date | null;
  createdBy?: string;
  updatedBy?: string;
}
