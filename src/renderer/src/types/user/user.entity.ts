import { EntityUserRoleInterface } from "../userRole/userRole.entity";
import { EntityPdApqInterface } from "../pdApq/pdApq.entity";
import { EntityUserMnMchInterface } from "../userMnMch/userMnMch.entity";
import { EntityPdScwInterface } from "../pdScw/pdScw.entity";
import { EntityUserMnPrioInterface } from "../userMnPrio/userMnPrio.entity";
import { EntityUserDeptInterface } from "../userDept/userDept.entity";
import { EntityMnWoOperateInterface } from "../mnWoOperate/mnWoOperate.entity";

export interface EntityUserInterface {
  id: string;
  nik: string;
  password: string;
  firstName: string;
  lastName: string | null;
  job: string | null;
  data: { [key: string]: any } | null;
  roles?: EntityUserRoleInterface[];
  pdApqs?: EntityPdApqInterface[];
  sectionHeadPdApqs?: EntityPdApqInterface[];
  userMch?: EntityUserMnMchInterface[];
  pdScw?: EntityPdScwInterface[];
  userPrio?: EntityUserMnPrioInterface[];
  userDept?: EntityUserDeptInterface[];
  parentUser?: EntityUserDeptInterface[];
  mnWoOperate?: EntityMnWoOperateInterface[];
}
