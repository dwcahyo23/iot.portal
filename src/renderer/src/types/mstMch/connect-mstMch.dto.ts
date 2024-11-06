interface MstMchMcCdMcComIdUniqueInputInterface {
  mcCd: string;
  mcComId: string;
}

export interface ConnectMstMchInterface {
  mcCd?: string;
  mcCd_mcComId?: MstMchMcCdMcComIdUniqueInputInterface;
}
