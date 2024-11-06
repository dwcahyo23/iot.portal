// Define types for the response data
interface MqttSubscription {
  node: string
  nl: number
  clientid: string
  durable: boolean
  topic: string
  qos: number
  rap: number
  rh: number
}

// Define the response structure
interface MqttGetSubscriptionsResponse {
  data: MqttSubscription[] // Array of subscriptions
  meta: {
    limit: number // Limit of results
    page: number // Current page number
    hasnext: boolean // Whether there is a next page
  }
}
