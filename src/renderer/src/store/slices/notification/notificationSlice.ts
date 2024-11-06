import { showNotification } from '@mantine/notifications'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// Tipe untuk notifikasi
type Notification = {
  id: string
  message: string
  title?: string
  color?: string
}

// Tipe untuk state
export type NotificationState = {
  notifications: Notification[]
}

// Inisialisasi state
const initialState: NotificationState = {
  notifications: []
}

// Membuat slice untuk notifikasi
const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      const notification = action.payload
      state.notifications.push(notification)

      // Menampilkan notifikasi dengan Mantine
      showNotification({
        id: notification.id,
        title: notification.title,
        message: notification.message,
        color: notification.color || 'blue', // Default color
        position: 'top-right',
        autoClose: 3000 // Menghapus notifikasi setelah 3 detik
      })
    }
  }
})

// Ekspor aksi dan reducer
export const { addNotification } = notificationSlice.actions
export default notificationSlice.reducer
