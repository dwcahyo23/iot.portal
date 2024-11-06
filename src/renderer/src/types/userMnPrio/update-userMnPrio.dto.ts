import { ConnectMstComInterface } from "../mstCom/connect-mstCom.dto";
import { ConnectUserInterface } from "../user/connect-user.dto";
import { ConnectMstMtnPrioInterface } from "../mstMtnPrio/connect-mstMtnPrio.dto";

interface UpdateUserMnPrioMstComRelationInputInterface {
  connect: ConnectMstComInterface;
}
interface UpdateUserMnPrioUserRelationInputInterface {
  connect: ConnectUserInterface;
}
interface UpdateUserMnPrioMtnPrioRelationInputInterface {
  connect: ConnectMstMtnPrioInterface;
}

export interface UpdateUserMnPrioInterface {
  com?: string;
  mstCom?: UpdateUserMnPrioMstComRelationInputInterface;
  nik?: string;
  user?: UpdateUserMnPrioUserRelationInputInterface;
  prioId?: string;
  mtnPrio?: UpdateUserMnPrioMtnPrioRelationInputInterface;
  createdBy?: string;
  updatedBy?: string;
}
