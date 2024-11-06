import { PortalState } from '@renderer/store'

export const portalNavigationConfig: Record<string, PortalState> = {
  oeeinsight: {
    navigation: [
      {
        key: 'OEEInsight',
        path: '/app/apq/dashboard',
        title: 'OEEInsight',
        translateKey: 'oeeInsight',
        type: 'title',
        authority: []
      },
      {
        key: 'OEEUpload',
        path: '/app/apq/upload',
        title: 'OEEUpload',
        translateKey: 'oeeUpload',
        type: 'title',
        authority: []
      }
    ]
  },
  mnworkorder: {
    navigation: [
      {
        key: 'MNWorkOrder',
        path: '/maintenance-workorder',
        title: 'MN WorkOrder',
        translateKey: 'mnWorkOrder',
        type: 'title',
        authority: ['user', 'admin']
      }
    ]
  },
  toolmonitor: {
    navigation: [
      {
        key: 'ToolMonitor',
        path: '/app/tools/table',
        title: 'ToolMonitor',
        translateKey: 'mnWorkOrder',
        type: 'title',
        authority: ['user', 'admin']
      }
    ]
  },
  qsense: {
    navigation: [
      {
        key: 'QSense',
        path: '/app/qsense/quality/guard',
        title: 'QSense',
        translateKey: 'QSense',
        type: 'title',
        authority: ['user', 'admin']
      }
    ]
  }
  // Add other configurations as needed
}
