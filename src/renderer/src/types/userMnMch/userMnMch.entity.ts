import { EntityMstComInterface } from "../mstCom/mstCom.entity";
import { EntityUserInterface } from "../user/user.entity";
import { EntityMstMtnLocInterface } from "../mstMtnLoc/mstMtnLoc.entity";

export interface EntityUserMnMchInterface {
  com: string;
  mstCom?: EntityMstComInterface;
  nik: string;
  user?: EntityUserInterface;
  mtnLocId: string;
  mtnLoc?: EntityMstMtnLocInterface;
}
