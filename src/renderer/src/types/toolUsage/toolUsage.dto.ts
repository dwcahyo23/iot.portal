export interface ToolUsageInterface {
  id: number;
  toolName: string;
  usageCount: number;
  usageLimit: number;
  mstMchId: string;
  mstMchComId: string;
  isLock: boolean;
}
