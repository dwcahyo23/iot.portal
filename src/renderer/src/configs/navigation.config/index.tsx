import type { NavigationTree } from '@renderer/@types/navigation'
import { IconHome } from '@tabler/icons-react'

const navigationConfig: NavigationTree[] = [
  {
    key: 'Portal',
    path: '/portal',
    title: 'Portal',
    translateKey: '',
    icon: IconHome,
    authority: [],
    subMenu: []
  }
]

export default navigationConfig
