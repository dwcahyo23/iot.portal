import { EntityUserInterface } from "../user/user.entity";
import { EntityMstComInterface } from "../mstCom/mstCom.entity";

export interface EntityPdApqInterface {
  nik: string;
  user?: EntityUserInterface;
  date: Date;
  comId: string;
  com?: EntityMstComInterface;
  section: string;
  avaibility: number;
  performance: number;
  quality: number;
  sectionHead: string;
  sectionHeadUser?: EntityUserInterface;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}
