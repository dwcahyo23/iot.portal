export interface CreatePdDelayedCustInterface {
  id: string;
  month: number;
  year: number;
  count: number;
  cust_no: string;
  cust_nm: string;
  avg_delay_td: number;
  avg_delay_yd: number;
  avg_delay_tm: number;
  sum_delay_td: number;
  sum_delay_yd: number;
  sum_delay_tm: number;
}
