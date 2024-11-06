import { ConnectMstComInterface } from "../mstCom/connect-mstCom.dto";
import { ConnectUserInterface } from "../user/connect-user.dto";
import { ConnectMstMtnLocInterface } from "../mstMtnLoc/connect-mstMtnLoc.dto";

interface UpdateUserMnMchMstComRelationInputInterface {
  connect: ConnectMstComInterface;
}
interface UpdateUserMnMchUserRelationInputInterface {
  connect: ConnectUserInterface;
}
interface UpdateUserMnMchMtnLocRelationInputInterface {
  connect: ConnectMstMtnLocInterface;
}

export interface UpdateUserMnMchInterface {
  com?: string;
  mstCom?: UpdateUserMnMchMstComRelationInputInterface;
  nik?: string;
  user?: UpdateUserMnMchUserRelationInputInterface;
  mtnLocId?: string;
  mtnLoc?: UpdateUserMnMchMtnLocRelationInputInterface;
  createdBy?: string;
  updatedBy?: string;
}
