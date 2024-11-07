import { apiSlice as api } from '@renderer/store/slices/apiSlice'
import { EntityEquipmentDailyInspectionInfoResponse } from '@renderer/types/@threeview/EquipmentDailyInspectionInfo'

export const addTagTypes = ['Machine_Info']

const MachineThreeViewApi = api.enhanceEndpoints({ addTagTypes }).injectEndpoints({
  endpoints: (build) => ({
    fetchEquipmentDailyInspectionInfo: build.query<
      EntityEquipmentDailyInspectionInfoResponse,
      { mchId: string }
    >({
      query: ({ mchId }) => ({
        url: '/threeview/api/machine/equipmentDailyInspectionInfo',
        method: 'POST',
        data: { mchId }
      }),
      providesTags: ['Machine_Info']
    })
  }),
  overrideExisting: false
})

export default MachineThreeViewApi
export const { useLazyFetchEquipmentDailyInspectionInfoQuery } = MachineThreeViewApi
