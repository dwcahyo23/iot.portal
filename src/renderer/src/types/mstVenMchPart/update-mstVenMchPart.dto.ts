import { CreateMstCatMchPartInterface } from "../mstCatMchPart/create-mstCatMchPart.dto";
import { ConnectMstCatMchPartInterface } from "../mstCatMchPart/connect-mstCatMchPart.dto";

interface UpdateMstVenMchPartMstCatMchPartRelationInputInterface {
  create?: CreateMstCatMchPartInterface;
  connect?: ConnectMstCatMchPartInterface;
}

export interface UpdateMstVenMchPartInterface {
  venNm?: string;
  catNm?: string;
  mstCatMchPart?: UpdateMstVenMchPartMstCatMchPartRelationInputInterface;
  createdBy?: string;
  updatedBy?: string;
}
