import { EntityMstMchPartInterface } from "../mstMchPart/mstMchPart.entity";
import { LiveLimit } from "../enums";

export interface EntityMnLiveMchPartInterface {
  liveId: string;
  bom: string;
  mstMchPart?: EntityMstMchPartInterface;
  startDate: Date;
  stopDate: Date;
  limit: LiveLimit;
  isRecal: boolean;
  memoRecal: string | null;
  recalDate: Date | null;
  isForceStop: boolean;
  memoForceStop: string | null;
  forceDate: Date | null;
}
