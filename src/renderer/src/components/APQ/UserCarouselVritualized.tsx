import {
  Badge,
  Card,
  Center,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
  useMantineColorScheme
} from '@mantine/core'
import {
  EntityPdApqUserDailyProgresInterface,
  EntityPdApqUserMonthlyProgresInterface,
  EntityPdApqUserWeeklyProgresInterface
} from '@renderer/types'
import { IconArrowDown, IconArrowUp, IconMinus } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { AutoSizer, CellMeasurerCache, List } from 'react-virtualized'
import 'react-virtualized/styles.css'

interface UserCarouselVirtualizedProps {
  users:
    | EntityPdApqUserDailyProgresInterface[]
    | EntityPdApqUserWeeklyProgresInterface[]
    | EntityPdApqUserMonthlyProgresInterface[]
}

interface UserCardProps extends EntityPdApqUserDailyProgresInterface {}

const trendStyles = {
  up: { color: 'green', icon: <IconArrowUp size={16} /> },
  down: { color: 'red', icon: <IconArrowDown size={16} /> },
  no_change: { color: 'gray', icon: <IconMinus size={16} /> }
}

function UserCard({
  firstname,
  lastname,
  nik,
  avaibility,
  performance,
  quality,
  oee,
  trend,
  change_percent
}: UserCardProps) {
  const { color, icon } = trendStyles[trend] || trendStyles.no_change

  const abbreviateLastname = (lastname?: string) => {
    if (!lastname) return '' // Return empty string or handle it however you prefer
    const maxLength = 10
    return lastname.length > maxLength ? `${lastname.substring(0, maxLength)}...` : lastname
  }

  return (
    <Card padding="sm" withBorder aria-label={`${firstname} ${lastname} Overview`}>
      <Card.Section
        style={{
          backgroundColor: '#f0f8ff',
          padding: '10px',
          borderTopLeftRadius: 'md',
          borderTopRightRadius: 'md',
          textAlign: 'center'
        }}
      >
        <Text fw={700} size="lg" color="blue">
          {`${firstname} ${abbreviateLastname(lastname)}`}
        </Text>
        <Text size="sm" color="dimmed">
          NIK: {nik}
        </Text>
      </Card.Section>

      <Stack mt="md">
        <Group gap="xs" justify="space-between">
          <Badge color="blue" variant="light">
            A: {avaibility}%
          </Badge>
          <Badge color="green" variant="light">
            P: {performance}%
          </Badge>
          <Badge color="orange" variant="light">
            Q: {quality}%
          </Badge>
        </Group>
        <Center>
          <Text fw={700} size="lg">
            OEE: {Math.round(oee)} %
          </Text>
          <Text fw={600} size="sm" color={color}>
            {icon} {change_percent?.toFixed(2)}%
          </Text>
        </Center>
      </Stack>
    </Card>
  )
}

const UserCarouselVirtualized = ({ users }: UserCarouselVirtualizedProps) => {
  const { colorScheme } = useMantineColorScheme()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const autoplayInterval = 5000

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined

    if (!isHovered) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length)
      }, autoplayInterval)
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [isHovered, users.length, autoplayInterval])

  if (!users || users.length === 0) return <Text size="md">No users to display!</Text>

  const paperHeight = 250 // Set the height of the Paper component
  const titleHeight = 40 // Estimated height for the title (you can adjust this)
  const cardListHeight = paperHeight - titleHeight // Calculate height for the card list

  return (
    <Paper
      shadow="lg"
      radius="lg"
      p="md"
      style={{
        width: '100%',
        height: `${paperHeight}px`, // Set height here
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
          Overview Operator
        </Text>
      </Flex>
      <div
        style={{ height: `${cardListHeight}px`, width: '100%', overflow: 'hidden' }} // Set dynamic height here
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AutoSizer>
          {({ width }) => {
            const cardsPerRow = Math.floor(width / 300)
            const cache = new CellMeasurerCache({
              defaultHeight: 200,
              fixedWidth: true
            })

            return (
              <List
                deferredMeasurementCache={cache}
                rowHeight={cache.rowHeight}
                rowRenderer={({ key, style }) => (
                  <animated.div key={key} style={{ ...style, overflow: 'hidden' }}>
                    <Group gap="md" justify="center">
                      {Array.from({ length: cardsPerRow }).map((_, cardIndex) => {
                        const userIndex = (currentIndex * cardsPerRow + cardIndex) % users.length
                        return <UserCard key={userIndex} {...users[userIndex]} />
                      })}
                    </Group>
                  </animated.div>
                )}
                rowCount={Math.ceil(users.length / cardsPerRow)}
                width={width}
                height={cardListHeight} // Set dynamic height here
                style={{ overflow: 'hidden' }}
              />
            )
          }}
        </AutoSizer>
      </div>
    </Paper>
  )
}

export default UserCarouselVirtualized
