import { EntityToolUsageInterface } from "../toolUsage/toolUsage.entity";

export interface EntityToolQurantineInterface {
  id: number;
  toolUsageId: number;
  toolUsage?: EntityToolUsageInterface;
  reason: string;
}
