import { EntityMstComInterface } from "../mstCom/mstCom.entity";
import { EntityUserInterface } from "../user/user.entity";
import { EntityMstMtnPrioInterface } from "../mstMtnPrio/mstMtnPrio.entity";

export interface EntityUserMnPrioInterface {
  com: string;
  mstCom?: EntityMstComInterface;
  nik: string;
  user?: EntityUserInterface;
  prioId: string;
  mtnPrio?: EntityMstMtnPrioInterface;
}
