import { CreateMstKindMchPartInterface } from "../mstKindMchPart/create-mstKindMchPart.dto";
import { ConnectMstKindMchPartInterface } from "../mstKindMchPart/connect-mstKindMchPart.dto";

interface CreateMstTypeMchPartMstKindMchPartRelationInputInterface {
  create?: CreateMstKindMchPartInterface;
  connect?: ConnectMstKindMchPartInterface;
}

export interface CreateMstTypeMchPartInterface {
  typeNm: string;
  kindNm: string;
  mstKindMchPart: CreateMstTypeMchPartMstKindMchPartRelationInputInterface;
  typeMemo?: string | null;
  createdBy?: string;
  updatedBy?: string;
}
