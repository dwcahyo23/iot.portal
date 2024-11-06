import { EntityMstMchPartInterface } from "../mstMchPart/mstMchPart.entity";
import { EntityMstKindMchPartInterface } from "../mstKindMchPart/mstKindMchPart.entity";

export interface EntityMstTypeMchPartInterface {
  typeId: string;
  typeNm: string;
  mstMchPart?: EntityMstMchPartInterface[];
  kindNm: string;
  mstKindMchPart?: EntityMstKindMchPartInterface;
  typeMemo: string | null;
}
