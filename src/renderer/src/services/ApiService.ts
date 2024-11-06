import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import BaseService from './BaseService'

export type BaseResponse<T> = {
  success: boolean
  data: T
  meta?: Meta
  error?: Error
}

type Error = {
  code: number
  message: string
}

type Meta = {
  total: number
  lastPage: number
  currentPage: number
  perPage: number
  prev: number | null
  next: number | null
}

const ApiService = {
  fetchData<TReq, TRes>(config: AxiosRequestConfig<TReq>): Promise<BaseResponse<TRes>> {
    return new Promise((resolve, reject) => {
      BaseService(config)
        .then((response: AxiosResponse<BaseResponse<TRes>>) => resolve(response.data))
        .catch((error: AxiosError) => reject(error))
    })
  }
}

export default ApiService
