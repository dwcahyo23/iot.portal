import { EntityMstMchInterface } from "../mstMch/mstMch.entity";
import { EntityToolQurantineInterface } from "../toolQurantine/toolQurantine.entity";

export interface EntityToolUsageInterface {
  id: number;
  toolName: string;
  usageCount: number;
  usageLimit: number;
  mstMchId: string;
  mstMchComId: string;
  mstMch?: EntityMstMchInterface;
  toolQurantine?: EntityToolQurantineInterface | null;
  isLock: boolean;
}
