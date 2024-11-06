import { LiveLimit } from "../enums";

export interface MnLiveMchPartInterface {
  liveId: string;
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
