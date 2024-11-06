import { Flex, Paper, Text, useMantineColorScheme } from '@mantine/core'
import dayjs from 'dayjs'
import React from 'react'
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

// Interface untuk prop CustomizeDot
interface CustomizeDotProps {
  x: number
  y: number
  value: number
  showLabels: boolean
}

// Interface untuk Bar dan Line props
interface BarProps {
  dataKey: string
  name: string
  fill: string
  yAxisId?: string
  label?: boolean
}

interface LineProps {
  dataKey: string
  name: string
  stroke: string
  yAxisId?: string
  type?: 'monotone' | 'linear' | 'step' | 'stepBefore' | 'stepAfter'
  strokeWidth?: number
}

interface YAxisProps {
  yAxisId: string
  orientation: 'left' | 'right'
  stroke: string
  tickCount?: number
  tickFormatter?: (value: number) => string
  domain?: number[]
}

interface ChartProps {
  data: any[]
  bars?: BarProps[]
  lines?: LineProps[]
  xAxisKey: string
  chartTitle: string
  width?: string | number
  height?: string | number
  yAxes?: YAxisProps[]
  tooltipFormatter?: (value: number | string) => string
}

// CustomizeDot untuk Line chart dengan background kotak dan sudut melengkung
// CustomizeDot untuk Line chart dengan background kotak dan sudut melengkung
const CustomizeDot: React.FC<CustomizeDotProps> = ({ x, y, value, showLabels }) => {
  // Jika value 0, tidak perlu menampilkan apapun
  if (value === 0 || !showLabels) return null

  const width = 40 // Lebar background kotak
  const height = 25 // Tinggi background kotak
  const radius = 8 // Sudut melengkung

  return (
    <g>
      {/* Background kotak dengan sudut melengkung */}
      <rect
        x={x - width / 2} // Memposisikan kotak agar terpusat di titik data
        y={y - height + 20} // Posisi kotak sedikit di atas titik data
        width={width}
        height={height}
        rx={radius} // Membuat sudut melengkung
        ry={radius}
        fill="#fff" // Warna background putih
        stroke="#0C1844" // Warna border biru gelap
        strokeWidth={2} // Ketebalan border
        opacity={0.8} // Sedikit transparan agar tidak terlalu kontras
      />
      {/* Teks angka */}
      <text
        x={x}
        y={y - height / 2 + 20} // Posisi teks agar berada di tengah kotak
        fill="#0C1844" // Warna teks biru gelap
        fontSize={14} // Ukuran font yang lebih besar
        fontWeight={700} // Tebal font untuk keterbacaan
        textAnchor="middle" // Teks berada di tengah secara horizontal
        alignmentBaseline="middle" // Teks sejajar secara vertikal
      >
        {value.toLocaleString()} {/* Format angka agar lebih mudah dibaca */}
      </text>
    </g>
  )
}

// CustomLabel Component
const CustomLabel: React.FC<any> = ({ x, y, width, value }) => {
  // Tidak menampilkan label jika nilai adalah 0
  if (value === 0) return null

  return (
    <text
      x={x + width / 2} // Posisi label di tengah bar
      y={y - 10} // Sedikit di atas bar (atur jarak dari bar untuk menghindari tabrakan)
      fill="#0C1844" // Warna teks
      fontSize={14} // Ukuran font
      fontWeight={700} // Tebal font
      textAnchor="middle" // Posisikan teks di tengah horizontal
    >
      {value.toLocaleString()} {/* Format nilai */}
    </text>
  )
}

const CustomTooltip: React.FC<{ active?: boolean; payload?: any[]; label?: string }> = ({
  active,
  payload,
  label
}) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '5px' }}>
        <p>{`${label} : ${payload[0].value}`}</p>
        {/* Add more fields as necessary */}
      </div>
    )
  }
  return null
}

// Reusable Chart Component
const Chart: React.FC<ChartProps> = React.memo(function Chart({
  data,
  bars = [],
  lines = [],
  xAxisKey,
  chartTitle,
  yAxes = [
    { yAxisId: 'left', orientation: 'left', stroke: '#0C1844' },
    { yAxisId: 'right', orientation: 'right', stroke: '#E4003A' }
  ],
  tooltipFormatter = (val) => val.toLocaleString()
}) {
  const { colorScheme } = useMantineColorScheme()

  if (!data || data.length === 0) {
    return (
      <Paper
        shadow="sm"
        radius="md"
        withBorder
        p="md"
        style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Text c="dimmed" style={{ fontWeight: 700 }}>
          No Data Available
        </Text>
      </Paper>
    )
  }

  return (
    <Paper
      shadow="lg"
      radius="lg"
      p="md"
      style={{
        width: '100%',
        height: '600px',
        border: '1px solid #e0e0e0',
        backgroundColor: colorScheme === 'dark' ? '#1A1B1E' : '#f9f9f9',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Flex justify="center" mb="md" align="center" direction="row">
        <Text c="dark" style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '1.2rem' }}>
          {chartTitle} ({dayjs().format('YYYY')})
        </Text>
      </Flex>
      <ResponsiveContainer width="100%" height={500}>
        {/* Fixed height set here */}
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="5 5" stroke="#ccc" opacity={0.5} />
          <XAxis dataKey={xAxisKey} tick={{ fontSize: 14, fontWeight: 600 }} />
          {yAxes.map((axis, index) => (
            <YAxis
              key={index}
              yAxisId={axis.yAxisId}
              orientation={axis.orientation}
              stroke={axis.stroke}
              tickCount={axis.tickCount || 3}
              tickFormatter={axis.tickFormatter || ((val) => val.toLocaleString())}
              domain={axis.domain}
            />
          ))}
          <Tooltip content={<CustomTooltip />} formatter={tooltipFormatter} />
          <Legend
            verticalAlign="top"
            wrapperStyle={{ paddingBottom: 20, fontSize: '14px', fontWeight: '600', color: '#333' }}
          />
          {bars.map((bar) => (
            <Bar
              key={bar.dataKey}
              yAxisId={bar.yAxisId || 'left'}
              dataKey={bar.dataKey}
              name={bar.name}
              fill={bar.fill}
              radius={[10, 10, 0, 0]}
              label={<CustomLabel />}
            />
          ))}
          {lines.map((line) => (
            <Line
              key={line.dataKey}
              yAxisId={line.yAxisId || 'right'}
              type={line.type || 'monotone'}
              dataKey={line.dataKey}
              name={line.name}
              stroke={line.stroke}
              strokeWidth={line.strokeWidth || 3}
              dot={false}
              activeDot={{ r: 8, fill: '#fff', stroke: line.stroke, strokeWidth: 3 }}
              label={(props) => <CustomizeDot {...props} showLabels={data.length <= 15} />}
            />
          ))}
        </ComposedChart>
      </ResponsiveContainer>
    </Paper>
  )
})

export default Chart
