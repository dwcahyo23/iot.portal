import { Badge, Card, Flex, Paper, Progress, Text, useMantineColorScheme } from '@mantine/core'
import { IconArrowDown, IconArrowUp, IconMinus } from '@tabler/icons-react'
import React from 'react'
import classes from './CardList.module.css'

interface CardItem {
  firstname: string
  lastname: string
  oee: number
  trend: string
  change_percent: number
  section: string
  category?: string // Optional
  last_date?: Date // Optional
}

interface CardListProps {
  data: CardItem[] // Receive data as a prop
  title: string
}

const trendStyles = {
  up: { color: 'green', icon: <IconArrowUp size={16} /> },
  down: { color: 'red', icon: <IconArrowDown size={16} /> },
  no_change: { color: 'gray', icon: <IconMinus size={16} /> }
}

const CardComponent: React.FC<{ item: CardItem; index: number }> = ({ item, index }) => {
  const formattedDate = item.last_date ? new Date(item.last_date).toISOString().split('T')[0] : null

  return (
    <div className={classes.cardComponent}>
      <Card shadow="sm" padding="md">
        <Flex justify="space-between" align="center" style={{ marginBottom: '8px' }}>
          <Text fw={500}>{`${index + 1}. ${item.firstname} ${item.lastname}`}</Text>

          <div>
            <Badge variant="outline" color="blue">
              {item.section}
            </Badge>
            {/* Display category as a badge */}
            {item.category && (
              <Badge color={item.category === 'Worst' ? 'red' : 'green'} variant="filled">
                {item.category.toUpperCase()}
              </Badge>
            )}
          </div>
        </Flex>
        <Progress value={item.oee} size="lg" striped />
        <Flex>
          <Text fw={500} size="md">
            OEE: {Math.round(item.oee)} %
          </Text>
          <Text style={{ color: trendStyles[item.trend].color }}>
            {trendStyles[item.trend].icon} {/* Render the appropriate icon */}
            {item.change_percent.toFixed(2)}% {/* Display the change percent */}
          </Text>
        </Flex>
        {/* Display last_date if available */}
        {formattedDate && (
          <Text size="xs" color="dimmed">
            Last updated: {formattedDate}
          </Text>
        )}
      </Card>
    </div>
  )
}

const CardList: React.FC<CardListProps> = ({ data, title }) => {
  const { colorScheme } = useMantineColorScheme()
  const cardHeight = 120 // Height of each card
  const containerHeight = 600 // Height of the container

  // Calculate total height based on the number of items in the original data
  const totalHeight = data.length * cardHeight

  // Determine if the animation should be applied and whether to duplicate data
  const shouldAnimate = totalHeight > containerHeight
  const displayedData = shouldAnimate ? [...data] : data // Duplicate data only if needed

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
        <Text
          c="dark"
          size="sm"
          style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '1.2rem' }}
        >
          {title} {/* Dynamic title */}
        </Text>
      </Flex>

      <div
        className={classes.cardListContainer}
        style={{ height: containerHeight - 60, overflow: 'hidden' }}
      >
        <div
          className={classes.cardList}
          style={{
            animation: shouldAnimate ? `moveDown ${totalHeight / 20}s linear infinite` : 'none', // Adjust duration based on total height
            marginBottom: '-60px'
          }}
        >
          {displayedData.map((item, index) => (
            <CardComponent key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </Paper>
  )
}

export default CardList
