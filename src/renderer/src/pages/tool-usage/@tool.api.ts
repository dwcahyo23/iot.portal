import { apiSlice as api } from '@renderer/store/slices/apiSlice'
import { BaseResponse } from '@renderer/types/base'
import { CreateToolUsageInterface, EntityToolUsageInterface } from '@renderer/types/toolUsage'

export const addTagTypes = ['TOOL_USAGE']

const ToolApi = api.enhanceEndpoints({ addTagTypes }).injectEndpoints({
  endpoints: (build) => ({
    fetchToolUsage: build.query<
      BaseResponse<EntityToolUsageInterface[]>,
      { mcCd: string | undefined; mcComId: string | undefined; page: number; perPage: number }
    >({
      query: ({ mcCd, mcComId, page, perPage }) => ({
        url: '/toolusage',
        params: { mcCd, mcComId, page, perPage }
      }),
      providesTags: ['TOOL_USAGE']
    }),
    CreateToolUsage: build.mutation<BaseResponse<unknown>, CreateToolUsageInterface>({
      query: ({ ...rest }) => ({
        url: '/toolusage',
        method: 'POST',
        data: rest
      }),
      invalidatesTags: ['TOOL_USAGE']
    }),
    UpdateToolUsage: build.mutation<
      BaseResponse<unknown>,
      { data: CreateToolUsageInterface; id: number }
    >({
      query: ({ data, id }) => ({
        url: `/toolusage/${id}`,
        method: 'PUT',
        data: { ...data }
      }),
      invalidatesTags: ['TOOL_USAGE']
    }),
    DeleteToolUsage: build.mutation<BaseResponse<unknown>, { id: number }>({
      query: ({ id }) => ({
        url: `/toolusage/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['TOOL_USAGE']
    })
  }),
  overrideExisting: false
})

export default ToolApi
export const {
  useFetchToolUsageQuery,
  useCreateToolUsageMutation,
  useDeleteToolUsageMutation,
  useUpdateToolUsageMutation
} = ToolApi
