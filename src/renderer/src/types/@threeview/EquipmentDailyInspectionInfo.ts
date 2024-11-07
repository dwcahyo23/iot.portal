export type EntityEquipmentDailyInspectionInfo = {
  mchChkNo: number | null
  chkPlanNo: number | null
  mchId: string
  dispSeq: number
  attSeq: number
  attName: string
  startDate: Date | null
  endDate: Date | null
  cycleType: string
  chkRev: number
  chkType: string
  chkClass: string
  chkStd: string
  planCode: string | null
  chkTime: Date | null
  chkCycle: number
  cycleUnit: string
  lsl: number
  usl: number
  chkVal: number | null
}

export type EntityEquipmentDailyInspectionInfoResponse = {
  success: boolean
  code: string
  msg: string
  rowSize: number
  fieldType: string[]
  fieldName: string[]
  list: EntityEquipmentDailyInspectionInfo[]
}
