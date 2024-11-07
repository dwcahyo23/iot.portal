import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react'
import BaseService from '@renderer/services/BaseService'
import ThreeViewService from '@renderer/services/ThreeViewService'
import axios, { AxiosError, AxiosRequestConfig, CancelTokenSource } from 'axios'

// Define the base query function
const axiosBaseQuery =
  (): BaseQueryFn<AxiosRequestConfig, unknown, unknown> =>
  async ({ url, method, data, params, signal }) => {
    const source: CancelTokenSource = axios.CancelToken.source()

    // Attach the abort signal listener
    if (signal && signal.addEventListener) {
      signal.addEventListener('abort', () => {
        source.cancel('Request canceled by the user')
      })
    }

    try {
      const result = await BaseService({
        url,
        method,
        data,
        params,
        cancelToken: source.token
      })
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message
        }
      }
    }
  }

const axiosThreeViewQuery =
  (): BaseQueryFn<AxiosRequestConfig, unknown, unknown> =>
  async ({ url, method, data, params }) => {
    try {
      const result = await ThreeViewService({
        url,
        method,
        data,
        params
      })
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message
        }
      }
    }
  }

// Create the API slice
export const apiSlice = createApi({
  baseQuery: async (args, api, extraOptions) => {
    const url = args.url as string
    if (url.startsWith('/threeview')) {
      return axiosThreeViewQuery()(args, api, extraOptions)
    } else {
      return axiosBaseQuery()(args, api, extraOptions)
    }
  },
  endpoints: () => ({}),
  reducerPath: 'api'
})

export default apiSlice
