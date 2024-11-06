import { EntityUserDeptInterface } from "../userDept/userDept.entity";
import { EntityPdScwInterface } from "../pdScw/pdScw.entity";

export interface EntityMstDeptInterface {
  deptId: number;
  deptNm: string;
  userDept?: EntityUserDeptInterface[];
  pdScw?: EntityPdScwInterface[];
}
