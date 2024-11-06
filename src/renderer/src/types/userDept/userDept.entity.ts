import { EntityMstDeptInterface } from "../mstDept/mstDept.entity";
import { EntityUserInterface } from "../user/user.entity";

export interface EntityUserDeptInterface {
  deptId: number;
  mstDept?: EntityMstDeptInterface;
  userId: string;
  user?: EntityUserInterface;
  parentId: string | null;
  parentUser?: EntityUserInterface | null;
}
