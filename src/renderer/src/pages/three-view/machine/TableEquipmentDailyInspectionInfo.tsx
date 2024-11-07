import { Button, Card, Group, Stack, TextInput } from '@mantine/core'
import { EntityEquipmentDailyInspectionInfo } from '@renderer/types/@threeview/EquipmentDailyInspectionInfo'
import { MRT_ColumnDef, MantineReactTable, useMantineReactTable } from 'mantine-react-table'
import { useMemo, useState } from 'react'
import { useLazyFetchEquipmentDailyInspectionInfoQuery } from './@machine.three-view.api'

function TableEquipmentDailyInspectionInfo() {
  const [mchId, setMchId] = useState('')
  const [fetchData, { data: { list = [] } = {}, isLoading, isFetching }] =
    useLazyFetchEquipmentDailyInspectionInfoQuery()

  const columns = useMemo<MRT_ColumnDef<EntityEquipmentDailyInspectionInfo>[]>(
    () => [
      { accessorKey: 'mchChkNo', header: 'Machine Check No' },
      { accessorKey: 'chkPlanNo', header: 'Check Plan No' },
      { accessorKey: 'mchId', header: 'Machine ID' },
      { accessorKey: 'dispSeq', header: 'Display Sequence' },
      { accessorKey: 'attSeq', header: 'Attribute Sequence' },
      { accessorKey: 'attName', header: 'Attribute Name' },
      { accessorKey: 'startDate', header: 'Start Date' },
      { accessorKey: 'endDate', header: 'End Date' },
      { accessorKey: 'cycleType', header: 'Cycle Type' },
      { accessorKey: 'chkRev', header: 'Check Revision' },
      { accessorKey: 'chkType', header: 'Check Type' },
      { accessorKey: 'chkClass', header: 'Check Class' },
      { accessorKey: 'chkStd', header: 'Check Standard' },
      { accessorKey: 'planCode', header: 'Plan Code' },
      { accessorKey: 'chkTime', header: 'Check Time' },
      { accessorKey: 'chkCycle', header: 'Check Cycle' },
      { accessorKey: 'cycleUnit', header: 'Cycle Unit' },
      { accessorKey: 'lsl', header: 'LSL' },
      { accessorKey: 'usl', header: 'USL' },
      { accessorKey: 'chkVal', header: 'Check Value' }
    ],
    []
  )

  // Handle refetch on button click
  const handleFetchData = () => {
    if (mchId) {
      fetchData({ mchId })
    }
  }

  const table = useMantineReactTable({
    columns,
    data: list,
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableRowSelection: true,
    columnFilterDisplayMode: 'popover',
    initialState: {
      density: 'xs',
      showColumnFilters: true,
      showGlobalFilter: true,
      pagination: {
        pageIndex: 0,
        pageSize: 15
      }
    },
    mantineTableProps: { striped: 'even' }
  })

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack gap="lg">
        <Group justify="flex-start" align="center">
          <TextInput
            label="Machine ID"
            placeholder="Enter Machine ID"
            value={mchId}
            onChange={(event) => setMchId(event.currentTarget.value)}
          />
          <Button
            onClick={handleFetchData}
            disabled={!mchId} // Disable if mchId is empty
            loading={isFetching}
            mt="sm"
          >
            Go
          </Button>
        </Group>

        <MantineReactTable table={table} />
      </Stack>
    </Card>
  )
}

export default TableEquipmentDailyInspectionInfo
