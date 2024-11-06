interface MnLiveMchPartLiveIdBomUniqueInputInterface {
  liveId: string;
  bom: string;
}

export interface ConnectMnLiveMchPartInterface {
  liveId?: string;
  liveId_bom?: MnLiveMchPartLiveIdBomUniqueInputInterface;
}
