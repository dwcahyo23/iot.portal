import { CreateMstCatMchPartInterface } from "../mstCatMchPart/create-mstCatMchPart.dto";
import { ConnectMstCatMchPartInterface } from "../mstCatMchPart/connect-mstCatMchPart.dto";

interface CreateMstVenMchPartMstCatMchPartRelationInputInterface {
  create?: CreateMstCatMchPartInterface;
  connect?: ConnectMstCatMchPartInterface;
}

export interface CreateMstVenMchPartInterface {
  venNm: string;
  catNm: string;
  mstCatMchPart: CreateMstVenMchPartMstCatMchPartRelationInputInterface;
  createdBy?: string;
  updatedBy?: string;
}
