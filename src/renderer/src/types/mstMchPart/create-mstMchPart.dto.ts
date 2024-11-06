import { ConnectMstMchInterface } from "../mstMch/connect-mstMch.dto";
import { CreateMstTypeMchPartInterface } from "../mstTypeMchPart/create-mstTypeMchPart.dto";
import { ConnectMstTypeMchPartInterface } from "../mstTypeMchPart/connect-mstTypeMchPart.dto";

interface CreateMstMchPartMstMchRelationInputInterface {
  connect: ConnectMstMchInterface;
}
interface CreateMstMchPartMstPartCombinationRelationInputInterface {
  create?: CreateMstTypeMchPartInterface;
  connect?: ConnectMstTypeMchPartInterface;
}

export interface CreateMstMchPartInterface {
  bom: string;
  label: string;
  mcCd: string;
  mstMch: CreateMstMchPartMstMchRelationInputInterface;
  partCombination: string;
  mstPartCombination: CreateMstMchPartMstPartCombinationRelationInputInterface;
  createdBy?: string;
  updatedBy?: string;
}
