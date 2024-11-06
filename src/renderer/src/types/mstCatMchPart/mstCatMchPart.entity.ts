import { EntityMstVenMchPartInterface } from "../mstVenMchPart/mstVenMchPart.entity";

export interface EntityMstCatMchPartInterface {
  catId: string;
  catNm: string;
  mstVenMchPart?: EntityMstVenMchPartInterface[];
}
