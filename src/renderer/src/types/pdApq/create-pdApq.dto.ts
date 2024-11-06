import { CreateUserInterface } from "../user/create-user.dto";
import { ConnectUserInterface } from "../user/connect-user.dto";
import { CreateMstComInterface } from "../mstCom/create-mstCom.dto";
import { ConnectMstComInterface } from "../mstCom/connect-mstCom.dto";

interface CreatePdApqUserRelationInputInterface {
  create?: CreateUserInterface;
  connect?: ConnectUserInterface;
}
interface CreatePdApqComRelationInputInterface {
  create?: CreateMstComInterface;
  connect?: ConnectMstComInterface;
}
interface CreatePdApqSectionHeadUserRelationInputInterface {
  create?: CreateUserInterface;
  connect?: ConnectUserInterface;
}

export interface CreatePdApqInterface {
  nik: string;
  user?: CreatePdApqUserRelationInputInterface;
  date: Date;
  comId: string;
  com?: CreatePdApqComRelationInputInterface;
  section: string;
  avaibility: number;
  performance: number;
  quality: number;
  sectionHead: string;
  sectionHeadUser?: CreatePdApqSectionHeadUserRelationInputInterface;
  createdBy?: string;
  updatedBy?: string;
}
