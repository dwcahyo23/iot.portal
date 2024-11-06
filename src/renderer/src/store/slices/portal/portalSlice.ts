// portalSlice.ts
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { NavigationTree } from '@renderer/@types/navigation'
import { RootState } from '@renderer/store/rootReducer'

// Define the initial state with typed `NavigationTree` array
export type PortalState = {
  navigation: NavigationTree[]
}

const initialState: PortalState = {
  navigation: [
    {
      key: 'home',
      path: '/',
      title: 'Home',
      translateKey: 'home',
      type: 'title',
      authority: ['user', 'admin']
    },
    {
      key: 'settings',
      path: '/settings',
      title: 'Settings',
      translateKey: 'settings',
      type: 'title',
      authority: ['admin']
    }
    // Add more items as needed
  ]
}

const portalSlice = createSlice({
  name: 'portal',
  initialState,
  reducers: {
    // Add `updateNavigationPortal` to handle updates to the navigation array
    updateNavigationPortal: (state, action: PayloadAction<NavigationTree[]>) => {
      state.navigation = action.payload
    }
  }
})

export const selectNavigationPortal = (state: RootState) => state.portal.navigation

export const { updateNavigationPortal } = portalSlice.actions

export default portalSlice.reducer
