import { EntityMstMchInterface } from "../mstMch/mstMch.entity";
import { EntityMstTypeMchPartInterface } from "../mstTypeMchPart/mstTypeMchPart.entity";
import { EntityMnLiveMchPartInterface } from "../mnLiveMchPart/mnLiveMchPart.entity";
import { EntityMnWoPpInterface } from "../mnWoPp/mnWoPp.entity";

export interface EntityMstMchPartInterface {
  partId: string;
  bom: string;
  isActive: boolean;
  label: string;
  mcCd: string;
  mstMch?: EntityMstMchInterface;
  partCombination: string;
  mstPartCombination?: EntityMstTypeMchPartInterface;
  mnLiveMchPart?: EntityMnLiveMchPartInterface[];
  mnWoPP?: EntityMnWoPpInterface[];
}
