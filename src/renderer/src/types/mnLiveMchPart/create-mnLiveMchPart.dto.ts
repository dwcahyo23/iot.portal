import { ConnectMstMchPartInterface } from "../mstMchPart/connect-mstMchPart.dto";
import { LiveLimit } from "../enums";

interface CreateMnLiveMchPartMstMchPartRelationInputInterface {
  connect: ConnectMstMchPartInterface;
}

export interface CreateMnLiveMchPartInterface {
  mstMchPart: CreateMnLiveMchPartMstMchPartRelationInputInterface;
  startDate: Date;
  stopDate: Date;
  limit: LiveLimit;
  memoRecal?: string | null;
  recalDate?: Date | null;
  memoForceStop?: string | null;
  forceDate?: Date | null;
  createdBy?: string;
  updatedBy?: string;
}
