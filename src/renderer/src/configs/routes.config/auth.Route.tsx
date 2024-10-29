import type { Routes } from '@renderer/@types/routes'
import { lazy } from 'react'

const authRoute: Routes = [
  {
    key: 'signIn',
    path: `/sign-in`,
    component: lazy(() => import('@renderer/pages/auth/SignIn')),
    authority: []
  }
  // {
  //   key: 'signUp',
  //   path: `/sign-up`,
  //   component: lazy(() => import('@/views/auth/SignUp')),
  //   authority: []
  // },
]

export default authRoute
