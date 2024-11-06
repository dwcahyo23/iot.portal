import { CreateMstVenMchPartInterface } from "../mstVenMchPart/create-mstVenMchPart.dto";
import { ConnectMstVenMchPartInterface } from "../mstVenMchPart/connect-mstVenMchPart.dto";

interface UpdateMstKindMchPartMstVenMchPartRelationInputInterface {
  create?: CreateMstVenMchPartInterface;
  connect?: ConnectMstVenMchPartInterface;
}

export interface UpdateMstKindMchPartInterface {
  kindNm?: string;
  venNm?: string;
  mstVenMchPart?: UpdateMstKindMchPartMstVenMchPartRelationInputInterface;
  createdBy?: string;
  updatedBy?: string;
}
