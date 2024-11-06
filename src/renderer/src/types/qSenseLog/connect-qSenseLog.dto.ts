interface QSenseLogIdTimeUniqueInputInterface {
  id: number;
  time: Date;
}

export interface ConnectQSenseLogInterface {
  id_time: QSenseLogIdTimeUniqueInputInterface;
}
