import { EntityUserMnMchInterface } from "../userMnMch/userMnMch.entity";
import { EntityMstMchInterface } from "../mstMch/mstMch.entity";

export interface EntityMstMtnLocInterface {
  mtnLocId: string;
  mtnLocNm: string;
  userMch?: EntityUserMnMchInterface[];
  mstMch?: EntityMstMchInterface[];
}
