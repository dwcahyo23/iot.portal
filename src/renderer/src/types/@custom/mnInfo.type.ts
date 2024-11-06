export interface MnInfoType {
  key: string
  com: string
  prio: string
  year: string
  month: string
  locNm: string
  open: number
  close: number
  total: number
}

export interface Prio {
  com: string
  mtnPrio: MtnPrio
}

export interface MtnPrio {
  prioColor: string
  prioNm: string
  id: string
}

export interface SummaryMnInfoInterface {
  overviewYearly?: string[] | MnInfoType[]
  userPrio: Prio[]
  overview: MnInfoType[]
}
