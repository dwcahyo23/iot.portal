import { ConnectUserRoleInterface } from "../userRole/connect-userRole.dto";
import { ConnectUserMnMchInterface } from "../userMnMch/connect-userMnMch.dto";
import { ConnectPdScwInterface } from "../pdScw/connect-pdScw.dto";
import { ConnectUserMnPrioInterface } from "../userMnPrio/connect-userMnPrio.dto";
import { ConnectUserDeptInterface } from "../userDept/connect-userDept.dto";
import { ConnectMnWoOperateInterface } from "../mnWoOperate/connect-mnWoOperate.dto";

interface CreateUserRolesRelationInputInterface {
  connect: ConnectUserRoleInterface[];
}
interface CreateUserUserMchRelationInputInterface {
  connect: ConnectUserMnMchInterface[];
}
interface CreateUserPdScwRelationInputInterface {
  connect: ConnectPdScwInterface[];
}
interface CreateUserUserPrioRelationInputInterface {
  connect: ConnectUserMnPrioInterface[];
}
interface CreateUserUserDeptRelationInputInterface {
  connect: ConnectUserDeptInterface[];
}
interface CreateUserParentUserRelationInputInterface {
  connect: ConnectUserDeptInterface[];
}
interface CreateUserMnWoOperateRelationInputInterface {
  connect: ConnectMnWoOperateInterface[];
}

export interface CreateUserInterface {
  nik: string;
  password: string;
  firstName: string;
  lastName?: string | null;
  job?: string | null;
  data?: { [key: string]: any } | null;
  roles?: CreateUserRolesRelationInputInterface;
  userMch?: CreateUserUserMchRelationInputInterface;
  pdScw?: CreateUserPdScwRelationInputInterface;
  userPrio?: CreateUserUserPrioRelationInputInterface;
  userDept?: CreateUserUserDeptRelationInputInterface;
  parentUser?: CreateUserParentUserRelationInputInterface;
  mnWoOperate?: CreateUserMnWoOperateRelationInputInterface;
  createdBy?: string;
  updatedBy?: string;
}
