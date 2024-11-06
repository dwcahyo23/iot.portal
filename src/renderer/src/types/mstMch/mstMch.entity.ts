import { EntityLinkZMchInterface } from "../linkZMch/linkZMch.entity";
import { EntityMstMchPartInterface } from "../mstMchPart/mstMchPart.entity";
import { EntityMstComInterface } from "../mstCom/mstCom.entity";
import { EntityMstMtnLocInterface } from "../mstMtnLoc/mstMtnLoc.entity";
import { EntityMnWoInterface } from "../mnWo/mnWo.entity";
import { EntityPdScwInterface } from "../pdScw/pdScw.entity";
import { EntityQSenseLogInterface } from "../qSenseLog/qSenseLog.entity";
import { EntityToolUsageInterface } from "../toolUsage/toolUsage.entity";

export interface EntityMstMchInterface {
  mcCd: string;
  mcNm: string;
  mcTp: string | null;
  linkZmch?: EntityLinkZMchInterface[];
  mstMchPart?: EntityMstMchPartInterface[];
  mcComId: string;
  mstCom?: EntityMstComInterface;
  mtnLocId: string;
  mtnLoc?: EntityMstMtnLocInterface;
  mnWO?: EntityMnWoInterface[];
  pdScw?: EntityPdScwInterface[];
  qSenseLog?: EntityQSenseLogInterface[];
  toolUsages?: EntityToolUsageInterface[];
}
