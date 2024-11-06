import { Grid } from '@mantine/core'
import OkNgCard from '@renderer/components/QSense/OkNgCard'
import { mqttGet, mqttPost } from '@renderer/services/MqttService'
import { useEffect, useState } from 'react'

const QualityGuard = () => {
  const [subscriptions, setSubscriptions] = useState<MqttSubscription[]>([]) // State to store subscriptions

  const fetchSubscriptions = async () => {
    const params = {
      qos: 2,
      match_topic: 'qSense/+',
      page: 1,
      limit: 10,
      node: 'emqx@172.17.0.3'
    }

    try {
      const response = await mqttGet<MqttGetSubscriptionsResponse>('mqtt/api/v5/subscriptions', {
        params: params
      })
      console.log('Subscriptions:', response)
      setSubscriptions(response.data)
    } catch (error) {
      console.error('Error fetching subscriptions:', error)
    }
  }

  useEffect(() => {
    fetchSubscriptions()

    const intervalId = setInterval(() => {
      fetchSubscriptions()
    }, 15000)

    return () => clearInterval(intervalId)
  }, [])

  const handleOkClick = async (topic: string, message: string) => {
    const payload = {
      payload_encoding: 'plain',
      topic,
      qos: 2,
      payload: JSON.stringify({
        judge: [true],
        msg: [message]
      }),
      retain: false
    }

    try {
      const response = await mqttPost('/mqtt/api/v5/publish', payload)
      console.log('Response from MQTT Publish OK:', response)
    } catch (error) {
      console.error('Error publishing OK message:', error)
    }
  }

  const handleNgClick = async (topic: string, message: string) => {
    const payload = {
      payload_encoding: 'plain',
      topic,
      qos: 2,
      payload: JSON.stringify({
        judge: [false],
        msg: [message]
      }),
      retain: false
    }

    try {
      const response = await mqttPost('/mqtt/api/v5/publish', payload)
      console.log('Response from MQTT Publish NG:', response)
    } catch (error) {
      console.error('Error publishing NG message:', error)
    }
  }

  const isOnline = (topic: string) => {
    return (
      Array.isArray(subscriptions) &&
      subscriptions.some((subscription) => subscription.topic === topic)
    )
  }

  // Get unique machine codes from subscriptions
  const uniqueTopics = Array.from(new Set(subscriptions.map((subscription) => subscription.topic)))

  return (
    <Grid
      type="container"
      breakpoints={{ xs: '100px', sm: '200px', md: '300px', lg: '400px', xl: '500px' }}
    >
      {uniqueTopics.map((topic) => {
        const machineCode = topic.split('/')[1] // Get machine code from topic
        return (
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <OkNgCard
              key={machineCode}
              machineCode={machineCode}
              machineName="Forming" // Assuming machine name is static for now, adjust if dynamic
              online={isOnline(topic)}
              topic={topic}
              onNgClick={handleNgClick}
              onOkClick={handleOkClick}
            />
          </Grid.Col>
        )
      })}
    </Grid>
  )
}

export default QualityGuard
