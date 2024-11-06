export type DelayedToday = {
  cust_no?: string
  cust_nm?: string
  part_no?: string
  dwg_no?: string
  part_nm?: string
  pltg?: string
  date?: string
  delay_td?: number
  delay_yd?: number
  delay_tm?: number
  status?: string
  memo_estimasi?: string
  delay_check?: string
  user_check?: string
  to_user?: string
  user_memo?: string
  createdBy?: string
  updatedBy?: string
  createdAt?: Date
  updatedAt?: Date
}

export type DelayApiResponse = {
  data: DelayedToday[]
  success: boolean
}

export type DelayedInfoCust = {
  id?: string
  month?: number
  year?: number
  count?: number
  cust_no?: string
  cust_nm?: string
  avg_delay_td?: number
  avg_delay_yd?: number
  avg_delay_tm?: number
  sum_delay_td?: number
  sum_delay_yd?: number
  sum_delay_tm?: number
}

export type DelayApiInfoCustResponse = {
  data: DelayedInfoCust[]
  success: boolean
}

export type DelayApiInfoCustArg = {
  year?: number
  month?: number
  cust_no?: string
}

export type DelayedInfoUser = {
  id?: string
  month?: number
  year?: number
  count?: number
  open?: number
  close?: number
  user?: string
}

export type DelayedApiInfoUserResponse = {
  data: DelayedInfoUser[]
  success: boolean
}

export type DelayApiInfoUserArg = {
  year?: number
  month?: number
  user?: string
}
