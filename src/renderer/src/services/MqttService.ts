import MqttConfig from '@renderer/configs/mqtt.config'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const createMqttService = (): AxiosInstance => {
  // Membuat instance Axios dengan konfigurasi dasar
  const axiosInstance = axios.create({
    // baseURL: MqttConfig.apiPrefix, // MqttConfig.apiPrefix akan berisi '/mqtt'
    baseURL: 'http://localhost:5173',
    headers: {
      Accept: '*/*', // Menambahkan header Accept
      'Content-Type': 'application/json' // Menambahkan header Content-Type
    },
    auth: {
      username: MqttConfig.username,
      password: MqttConfig.password
    }
  })

  // Menambahkan interceptor untuk response
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      // Menangani kesalahan pada response
      console.error('Error in API call:', error.response || error.message)
      return Promise.reject(error)
    }
  )

  return axiosInstance
}

// Fungsi untuk GET request
export const mqttGet = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const axiosInstance = createMqttService()
  const response = await axiosInstance.get<T>(url, config)
  return response.data
}

// Fungsi untuk POST request
export const mqttPost = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const axiosInstance = createMqttService()
  const response = await axiosInstance.post<T>(url, data, config)
  return response.data
}

// Fungsi untuk DELETE request
export const mqttDelete = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const axiosInstance = createMqttService()
  const response = await axiosInstance.delete<T>(url, config)
  return response.data
}

// Fungsi untuk PUT request
export const mqttPut = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const axiosInstance = createMqttService()
  const response = await axiosInstance.put<T>(url, data, config)
  return response.data
}
