import type { Routes } from '@renderer/@types/routes'
import { lazy } from 'react'
import authRoute from './auth.Route'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes = [
  {
    key: 'dashboard',
    path: '/dashboard',
    component: lazy(() => import('@renderer/pages/example/Dashboard')),
    authority: []
  },
  {
    key: 'users',
    path: '/users',
    component: lazy(() => import('@renderer/pages/example/Users')),
    authority: []
  },
  {
    key: 'pages',
    path: '/dashboard/pages',
    component: lazy(() => import('@renderer/pages/example/Pages')),
    authority: []
  },
  {
    key: 'files',
    path: '/dashboard/files',
    component: lazy(() => import('@renderer/pages/example/Files')),
    authority: []
  },
  {
    key: 'manage',
    path: '/users/manage',
    component: lazy(() => import('@renderer/pages/example/Manage')),
    authority: []
  }
]
