import { EntityMstTypeMchPartInterface } from "../mstTypeMchPart/mstTypeMchPart.entity";
import { EntityMstVenMchPartInterface } from "../mstVenMchPart/mstVenMchPart.entity";

export interface EntityMstKindMchPartInterface {
  kindId: string;
  kindNm: string;
  mstTypeMchPart?: EntityMstTypeMchPartInterface[];
  venNm: string;
  mstVenMchPart?: EntityMstVenMchPartInterface;
}
