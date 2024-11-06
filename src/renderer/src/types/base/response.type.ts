export interface BaseResponse<T> {
  success: boolean
  data: T
  meta?: Meta
}

export interface Meta {
  total: number
  lastPage: number
  currentPage: number
  perPage: number
  prev: null
  next: null
}
