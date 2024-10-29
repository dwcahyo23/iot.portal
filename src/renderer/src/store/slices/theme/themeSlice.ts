import { createSlice } from '@reduxjs/toolkit'
import { LayoutTypes } from '@renderer/@types/layout'
import appConfig from '@renderer/configs/app.config'

export type ThemeState = {
  currentLayout: LayoutTypes
}

const initialState: ThemeState = {
  currentLayout: appConfig.layoutType
}

export const localeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLayout: (state, action) => {
      state.currentLayout = action.payload
    }
  }
})

export const { setLayout } = localeSlice.actions

export default localeSlice.reducer
