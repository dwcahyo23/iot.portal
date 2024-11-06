interface PdApqNikDateUniqueInputInterface {
  nik: string;
  date: Date;
}

export interface ConnectPdApqInterface {
  nik_date: PdApqNikDateUniqueInputInterface;
}
