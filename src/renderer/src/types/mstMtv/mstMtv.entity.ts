import { EntityLinkZMchInterface } from "../linkZMch/linkZMch.entity";

export interface EntityMstMtvInterface {
  mtId: number;
  mtCd: string;
  mtMac: string | null;
  mtBle: string | null;
  linkZmch?: EntityLinkZMchInterface[];
}
