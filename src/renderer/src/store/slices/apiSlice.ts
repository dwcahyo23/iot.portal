import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react'
import BaseService from '@renderer/services/BaseService'
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

// Create the API slice
export const apiSlice = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
  reducerPath: 'api'
})

export default apiSlice
