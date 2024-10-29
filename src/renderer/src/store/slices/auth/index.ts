import { combineReducers } from '@reduxjs/toolkit'
import session, { SessionState } from './sessionSlice'
import userInfo, { UserInfoState } from './userInfoSlice'
import user, { UserState } from './userSlice'

const reducer = combineReducers({
  session,
  user,
  userInfo
})

export type AuthState = {
  session: SessionState
  user: UserState
  userInfo: UserInfoState
}

export * from './sessionSlice'
export * from './userInfoSlice'
export * from './userSlice'

export default reducer
