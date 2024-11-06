export interface EntityPdDelayedInterface {
  cust_no: string;
  cust_nm: string;
  part_no: string;
  dwg_no: string;
  part_nm: string;
  pltg: string;
  date: string;
  delay_td: number;
  delay_yd: number;
  delay_tm: number;
  status: string;
  memo_estimasi: string | null;
  delay_check: string;
  user_check: string;
  to_user: string;
  user_memo: string;
}
