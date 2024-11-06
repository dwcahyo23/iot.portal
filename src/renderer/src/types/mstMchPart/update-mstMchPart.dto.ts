import { ConnectMstMchInterface } from "../mstMch/connect-mstMch.dto";
import { CreateMstTypeMchPartInterface } from "../mstTypeMchPart/create-mstTypeMchPart.dto";
import { ConnectMstTypeMchPartInterface } from "../mstTypeMchPart/connect-mstTypeMchPart.dto";

interface UpdateMstMchPartMstMchRelationInputInterface {
  connect: ConnectMstMchInterface;
}
interface UpdateMstMchPartMstPartCombinationRelationInputInterface {
  create?: CreateMstTypeMchPartInterface;
  connect?: ConnectMstTypeMchPartInterface;
}

export interface UpdateMstMchPartInterface {
  bom?: string;
  label?: string;
  mcCd?: string;
  mstMch?: UpdateMstMchPartMstMchRelationInputInterface;
  partCombination?: string;
  mstPartCombination?: UpdateMstMchPartMstPartCombinationRelationInputInterface;
  createdBy?: string;
  updatedBy?: string;
}
