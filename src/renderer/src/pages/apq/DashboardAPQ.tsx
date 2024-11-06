import { Grid, Group, Select } from '@mantine/core'
import CardList from '@renderer/components/APQ/CardList'
import Chart from '@renderer/components/APQ/Chart'
import UserCarouselVirtualized from '@renderer/components/APQ/UserCarouselVritualized'
import LoadingScreen from '@renderer/components/LoadingScreen/LoadingScreen'
import { useEffect, useState } from 'react'
import {
  useFetchChartDataQuery,
  useFetchLeadersProgressQuery,
  useFetchUsersProgressQuery,
  useFetchUsersWorstAndBestQuery
} from './apq.api'

// Komponen DashboardAPQ
const DashboardAPQ = () => {
  const [timeRange, setTimeRange] = useState('monthly') // Default to 'monthly'
  const [section, setSection] = useState<'Machining' | 'Forming' | 'Heat Treatment' | 'All'>('All') // Default to 'all'

  const {
    data: { data: users = [] } = {},
    refetch: refetchUsers,
    isLoading: isLoadingUsers
  } = useFetchUsersProgressQuery({ timeRange, section })

  const {
    data: { data: usersWorstAndBest = [] } = {},
    refetch: refetchWorstAndBest,
    isLoading: isLoadingWorstAndBest
  } = useFetchUsersWorstAndBestQuery({ timeRange, section })

  const {
    data: { data: leaders = [] } = {},
    refetch: refetchLeaders,
    isLoading: isLoadingLeader
  } = useFetchLeadersProgressQuery({ timeRange, section })

  const {
    data: { data: chartData = [] } = {},
    refetch: refetchChartData,
    isLoading: isLoadingChartData
  } = useFetchChartDataQuery({ timeRange, section })

  console.log(chartData)

  const bars = [
    {
      dataKey: 'avaibility',
      name: 'Availability',
      fill: '#2196f3',
      label: true,
      yAxisId: 'left'
    },
    {
      dataKey: 'performance',
      name: 'Performance',
      fill: '#36BA98',
      label: true,
      yAxisId: 'left'
    },
    {
      dataKey: 'quality',
      name: 'Quality',
      fill: '#ff9800',
      label: true,
      yAxisId: 'left'
    }
  ]

  const lines = [
    {
      dataKey: 'oee',
      name: 'OEE',
      stroke: '#E4003A',
      type: 'monotone' as const,
      yAxisId: 'right',
      strokeWidth: 3
    }
  ]

  const yAxes = [
    {
      yAxisId: 'left',
      orientation: 'left' as const,
      stroke: '#0C1844',
      domain: [0, 100]
    },
    {
      yAxisId: 'right',
      orientation: 'right' as const,
      stroke: '#E4003A',
      domain: [0, 100]
    }
  ]

  useEffect(() => {
    refetchUsers()
    refetchWorstAndBest()
    refetchLeaders()
    if (timeRange !== 'daily') refetchChartData()
  }, [section, timeRange])

  if (isLoadingUsers || isLoadingWorstAndBest || isLoadingLeader || isLoadingChartData) {
    return <LoadingScreen />
  }

  return (
    <>
      <Group align="center" justify="flex-start" mb="lg">
        <Select
          label="Time Range"
          placeholder="Select time range"
          data={['daily', 'weekly', 'monthly']}
          value={timeRange}
          onChange={(value) => setTimeRange(value || 'daily')}
        />
        <Select
          label="Section Name"
          placeholder="Select section"
          data={['Machining', 'Forming', 'Heat Treatment', 'All']}
          value={section}
          onChange={(value) =>
            setSection(value as 'Machining' | 'Forming' | 'Heat Treatment' | 'All')
          }
        />
      </Group>

      <Grid>
        <Grid.Col span={2}>
          <CardList data={leaders} title="Overview Leader" />
        </Grid.Col>

        <Grid.Col span={7}>
          <Chart
            data={chartData}
            bars={bars}
            lines={lines}
            xAxisKey="name"
            chartTitle={`${section} Dashboard`}
            yAxes={yAxes}
          />
        </Grid.Col>

        <Grid.Col span={3}>
          <CardList data={usersWorstAndBest} title="Operator Worst And Best" />
        </Grid.Col>

        <Grid.Col span={12}>
          <UserCarouselVirtualized users={users} />
        </Grid.Col>
      </Grid>
    </>
  )
}

export default DashboardAPQ
