import { ConnectUserRoleInterface } from "../userRole/connect-userRole.dto";
import { ConnectUserMnMchInterface } from "../userMnMch/connect-userMnMch.dto";
import { ConnectPdScwInterface } from "../pdScw/connect-pdScw.dto";
import { ConnectUserMnPrioInterface } from "../userMnPrio/connect-userMnPrio.dto";
import { ConnectUserDeptInterface } from "../userDept/connect-userDept.dto";
import { ConnectMnWoOperateInterface } from "../mnWoOperate/connect-mnWoOperate.dto";

interface UpdateUserRolesRelationInputInterface {
  connect: ConnectUserRoleInterface[];
}
interface UpdateUserUserMchRelationInputInterface {
  connect: ConnectUserMnMchInterface[];
}
interface UpdateUserPdScwRelationInputInterface {
  connect: ConnectPdScwInterface[];
}
interface UpdateUserUserPrioRelationInputInterface {
  connect: ConnectUserMnPrioInterface[];
}
interface UpdateUserUserDeptRelationInputInterface {
  connect: ConnectUserDeptInterface[];
}
interface UpdateUserParentUserRelationInputInterface {
  connect: ConnectUserDeptInterface[];
}
interface UpdateUserMnWoOperateRelationInputInterface {
  connect: ConnectMnWoOperateInterface[];
}

export interface UpdateUserInterface {
  nik?: string;
  password?: string;
  firstName?: string;
  lastName?: string | null;
  job?: string | null;
  data?: { [key: string]: any } | null;
  roles?: UpdateUserRolesRelationInputInterface;
  userMch?: UpdateUserUserMchRelationInputInterface;
  pdScw?: UpdateUserPdScwRelationInputInterface;
  userPrio?: UpdateUserUserPrioRelationInputInterface;
  userDept?: UpdateUserUserDeptRelationInputInterface;
  parentUser?: UpdateUserParentUserRelationInputInterface;
  mnWoOperate?: UpdateUserMnWoOperateRelationInputInterface;
  createdBy?: string;
  updatedBy?: string;
}
