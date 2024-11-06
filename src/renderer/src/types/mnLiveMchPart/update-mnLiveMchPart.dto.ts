import { ConnectMstMchPartInterface } from "../mstMchPart/connect-mstMchPart.dto";
import { LiveLimit } from "../enums";

interface UpdateMnLiveMchPartMstMchPartRelationInputInterface {
  connect: ConnectMstMchPartInterface;
}

export interface UpdateMnLiveMchPartInterface {
  mstMchPart?: UpdateMnLiveMchPartMstMchPartRelationInputInterface;
  startDate?: Date;
  stopDate?: Date;
  limit?: LiveLimit;
  memoRecal?: string | null;
  recalDate?: Date | null;
  memoForceStop?: string | null;
  forceDate?: Date | null;
  createdBy?: string;
  updatedBy?: string;
}
