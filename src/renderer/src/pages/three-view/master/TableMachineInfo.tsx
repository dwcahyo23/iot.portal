import { Box, Button } from '@mantine/core'
import LoadingScreen from '@renderer/components/LoadingScreen/LoadingScreen'
import { EntityMachineInfo } from '@renderer/types/@threeview/MachineInfo.entity'
import { IconDownload } from '@tabler/icons-react'
import { download, generateCsv, mkConfig } from 'export-to-csv'
import {
  MRT_ColumnDef,
  MRT_Row,
  MantineReactTable,
  useMantineReactTable
} from 'mantine-react-table'
import { useMemo } from 'react'
import { useFetchMachineInfoQuery } from './@master.three-view.api'

function TableMachineInfo() {
  const { data: { list = [] } = {}, isError, isLoading, isFetching } = useFetchMachineInfoQuery()

  const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true
  })

  const handleExportRows = (rows: MRT_Row<EntityMachineInfo>[]) => {
    const rowData = rows.map((row) => {
      const transformedRow: Record<string, string | number | boolean | null> = {}
      Object.keys(row.original).forEach((key) => {
        const value = row.original[key]
        if (value instanceof Date) {
          transformedRow[key] = value.toISOString()
        } else {
          transformedRow[key] = value
        }
      })
      return transformedRow
    })
    const csv = generateCsv(csvConfig)(rowData)
    download(csvConfig)(csv)
  }

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(
      list.map((item) => ({
        ...item,
        makeDate: item.makeDate ? item.makeDate.toISOString() : '',
        purchasDate: item.purchasDate ? item.purchasDate.toISOString() : '',
        disposalDate: item.disposalDate ? item.disposalDate.toISOString() : ''
        // Transform other Date fields similarly as needed
      }))
    )
    download(csvConfig)(csv)
  }

  const columns = useMemo<MRT_ColumnDef<EntityMachineInfo>[]>(
    () => [
      { accessorKey: 'mchId', header: 'Machine ID' },
      { accessorKey: 'mchCode', header: 'Machine Code' },
      { accessorKey: 'mchName', header: 'Machine Name' },
      { accessorKey: 'mchNo', header: 'Machine No' },
      { accessorKey: 'mchGrade', header: 'Machine Grade' },
      { accessorKey: 'mchForm', header: 'Machine Form' },
      { accessorKey: 'mchStd', header: 'Machine Standard' },
      { accessorKey: 'procType', header: 'Process Type' },
      { accessorKey: 'procCode', header: 'Process Code' },
      { accessorKey: 'procName', header: 'Process Name' },
      { accessorKey: 'ftrCode', header: 'Feature Code' },
      { accessorKey: 'lineCode', header: 'Line Code' },
      { accessorKey: 'prdtionYN', header: 'Production Y/N' },
      { accessorKey: 'makeComp', header: 'Maker Company' },
      { accessorKey: 'makeDate', header: 'Make Date' },
      { accessorKey: 'purchaseComp', header: 'Purchase Company' },
      { accessorKey: 'purchasDate', header: 'Purchase Date' },
      { accessorKey: 'purchasPrice', header: 'Purchase Price' },
      { accessorKey: 'priceUnit', header: 'Price Unit' },
      { accessorKey: 'disposalDate', header: 'Disposal Date' },
      { accessorKey: 'operationRateStd', header: 'Operation Rate Standard' },
      { accessorKey: 'rpmStd', header: 'RPM Standard' },
      { accessorKey: 'prdtionType', header: 'Production Type' },
      { accessorKey: 'mchGradeName', header: 'Machine Grade Name' },
      { accessorKey: 'mchFormName', header: 'Machine Form Name' },
      { accessorKey: 'mchStdName', header: 'Machine Standard Name' },
      { accessorKey: 'procTypeName', header: 'Process Type Name' },
      { accessorKey: 'ftrCodeName', header: 'Feature Code Name' },
      { accessorKey: 'lineCodeName', header: 'Line Code Name' },
      { accessorKey: 'priceUnitName', header: 'Price Unit Name' },
      { accessorKey: 'description', header: 'Description' },
      { accessorKey: 'planCode', header: 'Plan Code' },
      { accessorKey: 'workOrderYN', header: 'Work Order Y/N' },
      { accessorKey: 'autoChangeYN', header: 'Auto Change Y/N' },
      { accessorKey: 'workerCorrectionYN', header: 'Worker Correction Y/N' }
    ],
    []
  )

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
    mantineTableProps: { striped: 'even' },
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        style={(theme) => ({
          display: 'flex',
          gap: theme.spacing.md,
          padding: theme.spacing.sm,
          flexWrap: 'wrap'
        })}
      >
        <Button
          color="lightblue"
          //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
          onClick={handleExportData}
          leftSection={<IconDownload />}
          variant="filled"
        >
          Export All Data
        </Button>
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          //export all rows, including from the next page, (still respects filtering and sorting)
          onClick={() => handleExportRows(table.getPrePaginationRowModel().rows)}
          leftSection={<IconDownload />}
          variant="filled"
        >
          Export All Rows
        </Button>
        <Button
          disabled={table.getRowModel().rows.length === 0}
          //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
          onClick={() => handleExportRows(table.getRowModel().rows)}
          leftSection={<IconDownload />}
          variant="filled"
        >
          Export Page Rows
        </Button>
        <Button
          disabled={!table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
          //only export selected rows
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          leftSection={<IconDownload />}
          variant="filled"
        >
          Export Selected Rows
        </Button>
      </Box>
    )
  })

  if (isLoading) return <LoadingScreen />

  return <MantineReactTable table={table} />
}

export default TableMachineInfo
