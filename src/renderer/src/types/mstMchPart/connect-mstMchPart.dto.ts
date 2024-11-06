interface MstMchPartPartIdBomUniqueInputInterface {
  partId: string;
  bom: string;
}

export interface ConnectMstMchPartInterface {
  partId?: string;
  bom?: string;
  partId_bom?: MstMchPartPartIdBomUniqueInputInterface;
}
