import { EntityUserMnMchInterface } from "../userMnMch/userMnMch.entity";
import { EntityUserMnPrioInterface } from "../userMnPrio/userMnPrio.entity";
import { EntityPdApqInterface } from "../pdApq/pdApq.entity";
import { EntityMstMchInterface } from "../mstMch/mstMch.entity";
import { EntityMnWoInterface } from "../mnWo/mnWo.entity";
import { EntityPdScwInterface } from "../pdScw/pdScw.entity";

export interface EntityMstComInterface {
  comId: string;
  comNm: string;
  userMch?: EntityUserMnMchInterface[];
  userPrio?: EntityUserMnPrioInterface[];
  pdApq?: EntityPdApqInterface[];
  mstMch?: EntityMstMchInterface[];
  mnWo?: EntityMnWoInterface[];
  pdScw?: EntityPdScwInterface[];
}
