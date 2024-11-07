import { apiSlice as api } from '@renderer/store/slices/apiSlice'
import {
  CreatePdApqInterface,
  EntityPdApqLeaderDailyProgresInterface,
  EntityPdApqLeaderMonthlyProgresInterface,
  EntityPdApqLeaderWeeklyProgresInterface,
  EntityPdApqSectionMonthlyInterface,
  EntityPdApqSectionWeeklyInterface,
  EntityPdApqUserDailyProgresInterface,
  EntityPdApqUserDailyWorstAndBestInterface,
  EntityPdApqUserMonthlyProgresInterface,
  EntityPdApqUserMonthlyWorstAndBestInterface,
  EntityPdApqUserWeeklyProgresInterface,
  EntityPdApqUserWeeklyWorstAndBestInterface
} from '@renderer/types'
import { BaseResponse } from '@renderer/types/base'

export const addTagTypes = [
  'APQ_USERS',
  'APQ_LEADERS',
  'APQ_USERS_PROGRES',
  'APQ_USERS_WORST_AND_BEST',
  'APQ_LEADERS_PROGRES',
  'APQ_CHART_DATA'
]

const ApqApi = api.enhanceEndpoints({ addTagTypes }).injectEndpoints({
  endpoints: (build) => ({
    fetchUsersProgress: build.query<
      | BaseResponse<EntityPdApqUserDailyProgresInterface[]>
      | BaseResponse<EntityPdApqUserWeeklyProgresInterface[]>
      | BaseResponse<EntityPdApqUserMonthlyProgresInterface[]>,
      { timeRange: string; section: string }
    >({
      query: ({ timeRange, section }) => {
        const urlMap = {
          daily: '/pdapq/user/daily',
          weekly: '/pdapq/user/weekly',
          monthly: '/pdapq/user/monthly'
        }
        let url = urlMap[timeRange]

        return {
          url,
          params: section !== 'All' ? { section } : undefined
        }
      },
      transformResponse: (
        response:
          | BaseResponse<EntityPdApqUserDailyProgresInterface[]>
          | BaseResponse<EntityPdApqUserWeeklyProgresInterface[]>
          | BaseResponse<EntityPdApqUserMonthlyProgresInterface[]>
      ) => {
        return {
          ...response,
          data: response.data.map(
            (
              item:
                | EntityPdApqUserDailyProgresInterface
                | EntityPdApqUserWeeklyProgresInterface
                | EntityPdApqUserMonthlyProgresInterface
            ) => ({
              ...item,
              avaibility: Math.round(item.avaibility * 100), // Correct spelling
              performance: Math.round(item.performance * 100),
              quality: Math.round(item.quality * 100),
              oee: Math.round(item.oee * 100)
            })
          )
        }
      },
      // Tagging this query for cache invalidation
      providesTags: ['APQ_USERS_PROGRES']
    }),

    fetchUsersWorstAndBest: build.query<
      | BaseResponse<EntityPdApqUserDailyWorstAndBestInterface[]>
      | BaseResponse<EntityPdApqUserMonthlyWorstAndBestInterface[]>
      | BaseResponse<EntityPdApqUserWeeklyWorstAndBestInterface[]>,
      { timeRange: string; section: string }
    >({
      query: ({ timeRange, section }) => {
        const urlMap = {
          daily: '/pdapq/user/daily/worst-and-best',
          weekly: '/pdapq/user/weekly/worst-and-best',
          monthly: '/pdapq/user/monthly/worst-and-best'
        }
        let url = urlMap[timeRange]

        return {
          url,
          params: section !== 'All' ? { section } : undefined
        }
      },
      transformResponse: (
        response:
          | BaseResponse<EntityPdApqUserDailyWorstAndBestInterface[]>
          | BaseResponse<EntityPdApqUserMonthlyWorstAndBestInterface[]>
          | BaseResponse<EntityPdApqUserWeeklyWorstAndBestInterface[]>
      ) => {
        return {
          ...response,
          data: response.data.map(
            (
              item:
                | EntityPdApqUserDailyWorstAndBestInterface
                | EntityPdApqUserMonthlyWorstAndBestInterface
                | EntityPdApqUserWeeklyWorstAndBestInterface
            ) => ({
              ...item,
              avaibility: Math.round(item.avaibility * 100), // Correct spelling
              performance: Math.round(item.performance * 100),
              quality: Math.round(item.quality * 100),
              oee: Math.round(item.oee * 100)
            })
          )
        }
      },
      // Tagging this query for cache invalidation
      providesTags: ['APQ_USERS_WORST_AND_BEST']
    }),

    fetchLeadersProgress: build.query<
      | BaseResponse<EntityPdApqLeaderDailyProgresInterface[]>
      | BaseResponse<EntityPdApqLeaderMonthlyProgresInterface[]>
      | BaseResponse<EntityPdApqLeaderWeeklyProgresInterface[]>,
      { timeRange: string; section: string }
    >({
      query: ({ timeRange, section }) => {
        const urlMap = {
          daily: '/pdapq/leader/daily',
          weekly: '/pdapq/leader/weekly',
          monthly: '/pdapq/leader/monthly'
        }
        let url = urlMap[timeRange]

        return {
          url,
          params: section !== 'All' ? { section } : undefined
        }
      },
      transformResponse: (
        response:
          | BaseResponse<EntityPdApqLeaderDailyProgresInterface[]>
          | BaseResponse<EntityPdApqLeaderMonthlyProgresInterface[]>
          | BaseResponse<EntityPdApqLeaderWeeklyProgresInterface[]>
      ) => {
        return {
          ...response,
          data: response.data.map(
            (
              item:
                | EntityPdApqLeaderDailyProgresInterface
                | EntityPdApqLeaderMonthlyProgresInterface
                | EntityPdApqLeaderWeeklyProgresInterface
            ) => ({
              ...item,
              avaibility: Math.round(item.avaibility * 100), // Correct spelling
              performance: Math.round(item.performance * 100),
              quality: Math.round(item.quality * 100),
              oee: Math.round(item.oee * 100)
            })
          )
        }
      },
      // Tagging this query for cache invalidation
      providesTags: ['APQ_LEADERS_PROGRES']
    }),

    fetchChartData: build.query<
      | BaseResponse<EntityPdApqSectionMonthlyInterface[]>
      | BaseResponse<EntityPdApqSectionWeeklyInterface[]>,
      { timeRange: string; section: string }
    >({
      query: ({ timeRange, section }) => {
        const urlMap = {
          weekly: '/pdapq/section/weekly',
          monthly: '/pdapq/section/monthly'
        }
        let url = timeRange !== 'daily' ? urlMap[timeRange] : urlMap.monthly
        // Add section filter to the query if section is not 'all' and timeRange is not 'daily'
        return {
          url,
          params: section !== 'All' ? { section } : undefined
        }
      },
      transformResponse: (
        response:
          | BaseResponse<EntityPdApqSectionMonthlyInterface[]>
          | BaseResponse<EntityPdApqSectionWeeklyInterface[]>
      ) => {
        return {
          ...response,
          data: response.data.map((item) => {
            const cleanedName = item.name.replace(/\s+/g, '')

            // Memangkas 3 karakter pertama jika tidak mengandung 'Avg'
            const finalName =
              cleanedName.includes('Avg') || cleanedName.length < 6
                ? cleanedName
                : cleanedName.slice(0, 3)
            return {
              ...item,
              avaibility: Math.round(item.avaibility * 100),
              performance: Math.round(item.performance * 100),
              quality: Math.round(item.quality * 100),
              oee: Math.round(item.oee * 100),
              name: finalName
            }
          })
        }
      },
      // Tagging this query for cache invalidation
      providesTags: ['APQ_CHART_DATA']
    }),

    Apq: build.mutation<BaseResponse<unknown>, { data: CreatePdApqInterface[]; cancel?: boolean }>({
      query: ({ data, cancel }) => {
        const controller = cancel ? new AbortController() : undefined
        const signal = controller?.signal
        return {
          url: '/pdapq/upsert',
          method: 'POST',
          data,
          signal
        }
      }
    })
  }),
  overrideExisting: false
})

export default ApqApi
export const {
  useFetchChartDataQuery,
  useFetchLeadersProgressQuery,
  useFetchUsersProgressQuery,
  useFetchUsersWorstAndBestQuery,
  useApqMutation
} = ApqApi
