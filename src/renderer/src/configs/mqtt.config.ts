export type MqttConfig = {
  apiPrefix: string
  username: string
  password: string
}

const MqttConfig: MqttConfig = {
  apiPrefix: import.meta.env.VITE_EMQX_API_URL,
  username: import.meta.env.VITE_EMQX_API_KEY,
  password: import.meta.env.VITE_EMQX_API_SECRET
}

export default MqttConfig
