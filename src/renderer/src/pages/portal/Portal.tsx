// src/pages/Portal.tsx

import { Card, Flex, Grid, Text, useMantineTheme } from '@mantine/core'
import { portalNavigationConfig } from '@renderer/configs/portal.config/portal.config'
import { updateNavigationPortal } from '@renderer/store'
import { IconChartLine, IconEye, IconTools } from '@tabler/icons-react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from './Portal.module.css'

// RGBA Conversion Function
const hexToRgba = (hex: string, alpha: number) => {
  hex = hex.replace(/^#/, '')
  let r: number, g: number, b: number

  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16)
    g = parseInt(hex[1] + hex[1], 16)
    b = parseInt(hex[2] + hex[2], 16)
  } else {
    r = parseInt(hex.substring(0, 2), 16)
    g = parseInt(hex.substring(2, 4), 16)
    b = parseInt(hex.substring(4, 6), 16)
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

interface PortalCardProps {
  title: string
  description: string
  to: string
  icon: React.ReactNode
  backgroundColor: string
}

const PortalCard: React.FC<PortalCardProps> = ({
  title,
  description,
  to,
  icon,
  backgroundColor
}) => {
  const dispatch = useDispatch()
  const configKey = title.replace(/\s+/g, '').toLowerCase()
  const navigationConfig = portalNavigationConfig[configKey]

  const handleClick = () => {
    if (navigationConfig) {
      // console.log(navigationConfig)
      dispatch(updateNavigationPortal(navigationConfig.navigation))
    }
  }

  return (
    <Card
      component={Link}
      to={to}
      onClick={handleClick}
      padding="lg"
      shadow="sm"
      className={classes.card}
      style={{ backgroundColor }}
      aria-label={`Akses aplikasi ${title}`}
    >
      <Flex direction="column" align="center" justify="center" style={{ height: '100%' }}>
        <div className={classes.cardIcon}>{icon}</div>
        <Text size="lg" fw={500}>
          {title}
        </Text>
        <Text color="white" size="sm">
          {description}
        </Text>
      </Flex>
    </Card>
  )
}

const Portal = () => {
  const theme = useMantineTheme()

  return (
    <div className={classes.container}>
      <Flex direction="column" justify="center" align="center" className={classes.content}>
        <Grid
          justify="center"
          align="flex-start"
          gutter="md"
          style={{ width: '100%', maxWidth: '1200px' }}
        >
          <Grid.Col span={{ xs: 12, sm: 6, md: 4 }}>
            <PortalCard
              title="OEEInsight"
              description="Akses aplikasi OEE"
              to="/app/apq/dashboard"
              icon={<IconChartLine />}
              backgroundColor={hexToRgba(theme.colors.blue[6], 0.8)} // Use the conversion function
            />
          </Grid.Col>

          <Grid.Col span={{ xs: 12, sm: 6, md: 4 }}>
            <PortalCard
              title="MN WorkOrder"
              description="Akses aplikasi maintenance work order"
              // to="/maintenance-workorder"
              to=""
              icon={<IconTools />}
              backgroundColor={hexToRgba(theme.colors.green[6], 0.8)} // Use the conversion function
            />
          </Grid.Col>

          <Grid.Col span={{ xs: 12, sm: 6, md: 4 }}>
            <PortalCard
              title="ToolMonitor"
              description="Akses aplikasi live time tool monitor"
              to="/app/tools/table"
              icon={<IconEye />}
              backgroundColor={hexToRgba(theme.colors.teal[6], 0.8)} // Use the conversion function
            />
          </Grid.Col>

          <Grid.Col span={{ xs: 12, sm: 6, md: 4 }}>
            <PortalCard
              title="QSense"
              description="Akses aplikasi Q-Sense Forming"
              to="/app/qsense/quality/guard"
              icon={<IconTools />}
              backgroundColor={hexToRgba(theme.colors.orange[6], 0.8)} // Use the conversion function
            />
          </Grid.Col>

          <Grid.Col span={{ xs: 12, sm: 6, md: 4 }}>
            <PortalCard
              title="ThreeView"
              description="Akses aplikasi Q-Sense Forming"
              to="/app/threeview/machine/info"
              icon={<IconTools />}
              backgroundColor={hexToRgba(theme.colors.indigo[6], 0.8)} // Use the conversion function
            />
          </Grid.Col>
        </Grid>
      </Flex>
    </div>
  )
}

export default Portal
