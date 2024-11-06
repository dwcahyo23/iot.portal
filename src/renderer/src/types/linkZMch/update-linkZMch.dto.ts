import { CreateMstZ20Interface } from "../mstZ20/create-mstZ20.dto";
import { ConnectMstZ20Interface } from "../mstZ20/connect-mstZ20.dto";
import { ConnectMstMchInterface } from "../mstMch/connect-mstMch.dto";
import { CreateMstMtvInterface } from "../mstMtv/create-mstMtv.dto";
import { ConnectMstMtvInterface } from "../mstMtv/connect-mstMtv.dto";

interface UpdateLinkZMchMstZ20RelationInputInterface {
  create?: CreateMstZ20Interface;
  connect?: ConnectMstZ20Interface;
}
interface UpdateLinkZMchMstMchRelationInputInterface {
  connect: ConnectMstMchInterface;
}
interface UpdateLinkZMchMstMtvRelationInputInterface {
  create?: CreateMstMtvInterface;
  connect?: ConnectMstMtvInterface;
}

export interface UpdateLinkZMchInterface {
  mstZ20?: UpdateLinkZMchMstZ20RelationInputInterface;
  mstMch?: UpdateLinkZMchMstMchRelationInputInterface;
  mstMtv?: UpdateLinkZMchMstMtvRelationInputInterface;
  createdBy?: string;
  updatedBy?: string;
}
