import { ConnectMstComInterface } from "../mstCom/connect-mstCom.dto";
import { ConnectMstMtnLocInterface } from "../mstMtnLoc/connect-mstMtnLoc.dto";

interface CreateMstMchMstComRelationInputInterface {
  connect: ConnectMstComInterface;
}
interface CreateMstMchMtnLocRelationInputInterface {
  connect: ConnectMstMtnLocInterface;
}

export interface CreateMstMchInterface {
  mcCd: string;
  mcNm: string;
  mcTp?: string | null;
  mcComId: string;
  mstCom: CreateMstMchMstComRelationInputInterface;
  mtnLocId: string;
  mtnLoc: CreateMstMchMtnLocRelationInputInterface;
  createdBy?: string;
  updatedBy?: string;
}
