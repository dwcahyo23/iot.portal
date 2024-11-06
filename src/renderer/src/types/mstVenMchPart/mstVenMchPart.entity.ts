import { EntityMstKindMchPartInterface } from "../mstKindMchPart/mstKindMchPart.entity";
import { EntityMstCatMchPartInterface } from "../mstCatMchPart/mstCatMchPart.entity";

export interface EntityMstVenMchPartInterface {
  venId: string;
  venNm: string;
  mstKindMchPart?: EntityMstKindMchPartInterface[];
  catNm: string;
  mstCatMchPart?: EntityMstCatMchPartInterface;
}
