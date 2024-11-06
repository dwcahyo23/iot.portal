import { LayoutTypes } from '@renderer/@types/layout'

export type AppConfig = {
  apiPrefix: string
  authenticatedEntryPath: string
  unAuthenticatedEntryPath: string
  enableMock: boolean
  locale: string
  layoutType: LayoutTypes
}

const appConfig: AppConfig = {
  layoutType: LayoutTypes.CollapsedSideBar,
  apiPrefix: import.meta.env.VITE_API_URL,
  authenticatedEntryPath: '/portal',
  unAuthenticatedEntryPath: '/sign-in',
  enableMock: false,
  locale: 'en'
}

export default appConfig
