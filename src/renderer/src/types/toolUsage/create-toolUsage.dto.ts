export interface CreateToolUsageInterface {
  toolName: string;
  usageCount?: number;
  usageLimit: number;
  mstMchId: string;
  mstMchComId: string;
  isLock?: boolean;
  createdBy?: string;
  updatedBy?: string;
}
