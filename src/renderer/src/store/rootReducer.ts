import { AnyAction, Reducer, combineReducers } from 'redux'
import apiSlice from './slices/apiSlice'
import auth, { AuthState } from './slices/auth'
import base, { BaseState } from './slices/base'
import locale, { LocaleState } from './slices/locale/localeSlice'
import notification, { NotificationState } from './slices/notification/notificationSlice'
import portal, { PortalState } from './slices/portal/portalSlice'
import theme, { ThemeState } from './slices/theme/themeSlice'

export type RootState = {
  auth: AuthState
  base: BaseState
  locale: LocaleState
  theme: ThemeState
  notification: NotificationState
  portal: PortalState
  [apiSlice.reducerPath]: ReturnType<typeof apiSlice.reducer>
}
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AsyncReducers {
  [key: string]: Reducer<any, AnyAction>
}

const staticReducers = {
  auth,
  base,
  locale,
  theme,
  notification,
  portal
}

const dynamicReducers = {
  [apiSlice.reducerPath]: apiSlice.reducer
}

const rootReducer = (asyncReducers?: AsyncReducers) => (state: RootState, action: AnyAction) => {
  const combinedReducer = combineReducers({
    ...staticReducers,
    ...dynamicReducers,
    ...asyncReducers
  })
  return combinedReducer(state, action)
}

export default rootReducer
