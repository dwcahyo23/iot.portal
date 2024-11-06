import { ConnectUserMnPrioInterface } from "../userMnPrio/connect-userMnPrio.dto";
import { ConnectMnWoInterface } from "../mnWo/connect-mnWo.dto";

interface CreateMstMtnPrioUserPrioRelationInputInterface {
  connect: ConnectUserMnPrioInterface[];
}
interface CreateMstMtnPrioMnWoRelationInputInterface {
  connect: ConnectMnWoInterface[];
}

export interface CreateMstMtnPrioInterface {
  prioId: string;
  prioNm: string;
  prioColor: string;
  userPrio?: CreateMstMtnPrioUserPrioRelationInputInterface;
  mnWo?: CreateMstMtnPrioMnWoRelationInputInterface;
  createdBy?: string;
  updatedBy?: string;
}
