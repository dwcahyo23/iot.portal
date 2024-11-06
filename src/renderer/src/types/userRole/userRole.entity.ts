import { Roles } from "../enums";
import { EntityUserInterface } from "../user/user.entity";

export interface EntityUserRoleInterface {
  id: number;
  role: Roles;
  userId: string;
  user?: EntityUserInterface;
}
