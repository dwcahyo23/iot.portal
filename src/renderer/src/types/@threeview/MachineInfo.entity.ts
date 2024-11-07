export type EntityMachineInfo = {
  mchId: string
  mchCode: string
  mchName: string
  mchNo: string | null
  mchGrade: string
  mchForm: string
  mchStd: string
  procType: string
  procCode: string
  procName: string
  ftrCode: string
  lineCode: string
  prdtionYN: number
  makeComp: string | null
  makeDate: Date | null
  purchaseComp: string | null
  purchasDate: Date | null
  purchasPrice: number | null
  priceUnit: string | null
  disposalDate: Date | null
  operationRateStd: number
  rpmStd: number
  prdtionType: string
  mchGradeName: string
  mchFormName: string
  mchStdName: string
  procTypeName: string
  ftrCodeName: string
  lineCodeName: string
  priceUnitName: string | null
  description: string | null
  planCode: string | null
  workOrderYN: number
  autoChangeYN: number
  workerCorrectionYN: number
}

export type EntityMachineInfoResponse = {
  success: boolean
  code: string
  msg: string
  rowSize: number
  fieldType: string[]
  fieldName: string[]
  list: EntityMachineInfo[]
}
