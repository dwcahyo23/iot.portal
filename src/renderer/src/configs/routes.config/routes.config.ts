import type { Routes } from '@renderer/@types/routes'
import { lazy } from 'react'
import authRoute from './auth.Route'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes = [
  {
    key: 'portal',
    path: '/portal',
    component: lazy(() => import('@renderer/pages/portal/Portal')),
    authority: []
  },
  {
    key: 'apq-dashboard',
    path: '/app/apq/dashboard',
    component: lazy(() => import('@renderer/pages/apq/DashboardAPQ')),
    authority: []
  },
  {
    key: 'apq-upload',
    path: '/app/apq/upload',
    component: lazy(() => import('@renderer/pages/apq/UploadApq')),
    authority: []
  },
  {
    key: 'tools-table',
    path: '/app/tools/table',
    component: lazy(() => import('@renderer/pages/tool-usage/TableTools')),
    authority: []
  },
  {
    key: 'qsense-quality-guard',
    path: '/app/qsense/quality/guard',
    component: lazy(() => import('@renderer/pages/qsense/QualityGuard')),
    authority: []
  },
  {
    key: 'three-view-machine-info',
    path: 'app/threeview/machine/info',
    component: lazy(() => import('@renderer/pages/three-view/master/TableMachineInfo')),
    authority: []
  },
  {
    key: 'three-view-equipmend-daily-inspection-info',
    path: 'app/threeview/equipment/daily/inspection/info',
    component: lazy(
      () => import('@renderer/pages/three-view/machine/TableEquipmentDailyInspectionInfo')
    ),
    authority: []
  }
]
