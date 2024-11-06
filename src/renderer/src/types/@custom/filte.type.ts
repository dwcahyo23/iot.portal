export type FileExcel = {
  no?: number
  cust_no?: string
  cust_nm?: string
  part_no?: string
  dwg_no?: string
  part_nm?: string
  pltg?: string
  delay_td?: number
  delay_yd?: number
  delay_tm?: number
  status?: string
  memo_estimasi?: string
  to_user?: string
  user_memo?: string
  createdBy?: string
  updatedBy?: string
  delay_check?: string
  user_check?: string
  date?: Date
}

export type ExcelApq = {
  section: string
  nik_tl: string
  tl: string
  nik_operator: string
  operator: string
  date: Date
  avaibility: number
  performance: number
  quality: number
  oee?: number
  com: number
}
