interface PdDelayedCustNoPartNoDwgNoDateUniqueInputInterface {
  cust_no: string;
  part_no: string;
  dwg_no: string;
  date: string;
}

export interface ConnectPdDelayedInterface {
  cust_no_part_no_dwg_no_date: PdDelayedCustNoPartNoDwgNoDateUniqueInputInterface;
}
