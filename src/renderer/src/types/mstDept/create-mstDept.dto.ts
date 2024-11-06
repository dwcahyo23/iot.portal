import { ConnectUserDeptInterface } from "../userDept/connect-userDept.dto";
import { ConnectPdScwInterface } from "../pdScw/connect-pdScw.dto";

interface CreateMstDeptUserDeptRelationInputInterface {
  connect: ConnectUserDeptInterface[];
}
interface CreateMstDeptPdScwRelationInputInterface {
  connect: ConnectPdScwInterface[];
}

export interface CreateMstDeptInterface {
  deptNm: string;
  createdBy?: string;
  updatedBy?: string;
  userDept?: CreateMstDeptUserDeptRelationInputInterface;
  pdScw?: CreateMstDeptPdScwRelationInputInterface;
}
