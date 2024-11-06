import { ConnectMstComInterface } from "../mstCom/connect-mstCom.dto";
import { ConnectUserInterface } from "../user/connect-user.dto";
import { ConnectMstMtnPrioInterface } from "../mstMtnPrio/connect-mstMtnPrio.dto";

interface CreateUserMnPrioMstComRelationInputInterface {
  connect: ConnectMstComInterface;
}
interface CreateUserMnPrioUserRelationInputInterface {
  connect: ConnectUserInterface;
}
interface CreateUserMnPrioMtnPrioRelationInputInterface {
  connect: ConnectMstMtnPrioInterface;
}

export interface CreateUserMnPrioInterface {
  com: string;
  mstCom: CreateUserMnPrioMstComRelationInputInterface;
  nik: string;
  user: CreateUserMnPrioUserRelationInputInterface;
  prioId: string;
  mtnPrio: CreateUserMnPrioMtnPrioRelationInputInterface;
  createdBy?: string;
  updatedBy?: string;
}
