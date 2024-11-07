import { apiSlice as api } from '@renderer/store/slices/apiSlice'
import { EntityMachineInfoResponse } from '@renderer/types/@threeview/MachineInfo.entity'

export const addTagTypes = ['Machine_Info']

const MasterThreeViewApi = api.enhanceEndpoints({ addTagTypes }).injectEndpoints({
  endpoints: (build) => ({
    fetchMachineInfo: build.query<EntityMachineInfoResponse, void>({
      query: () => ({
        url: '/threeview/api/master/machineInfo',
        method: 'POST'
      }),
      providesTags: ['Machine_Info']
    })
  }),
  overrideExisting: false
})

export default MasterThreeViewApi
export const { useFetchMachineInfoQuery } = MasterThreeViewApi
