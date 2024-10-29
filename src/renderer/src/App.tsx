import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Layout } from './components/Layout/Layout'
import appConfig from './configs/app.config'
import { mockServer } from './mock/mock'
import store, { persistor } from './store'
export default function App() {
  if (appConfig.enableMock) {
    mockServer()
  }

  return (
    <MantineProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </MantineProvider>
  )
}
