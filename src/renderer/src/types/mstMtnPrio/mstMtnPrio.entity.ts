import { EntityUserMnPrioInterface } from "../userMnPrio/userMnPrio.entity";
import { EntityMnWoInterface } from "../mnWo/mnWo.entity";

export interface EntityMstMtnPrioInterface {
  prioId: string;
  prioNm: string;
  prioColor: string;
  userPrio?: EntityUserMnPrioInterface[];
  mnWo?: EntityMnWoInterface[];
}
