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
  apiPrefix: '',
  authenticatedEntryPath: '/dashboard',
  unAuthenticatedEntryPath: '/sign-in',
  enableMock: true,
  locale: 'en'
}

export default appConfig
