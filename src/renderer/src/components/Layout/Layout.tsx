import { LayoutTypes } from '@renderer/@types/layout'
import { useAppSelector } from '@renderer/store'
import useAuth from '@renderer/utils/hooks/useAuth'
import useLocale from '@renderer/utils/hooks/useLocale'
import { lazy, Suspense, useMemo } from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen'

const layouts: any = {
  [LayoutTypes.SimpleSideBar]: lazy(() => import('./LayoutTypes/SimpleSideBar')),
  [LayoutTypes.DeckedSideBar]: lazy(() => import('./LayoutTypes/DeckedSideBar')),
  [LayoutTypes.CollapsedSideBar]: lazy(() => import('./LayoutTypes/CollapsedSideBar'))
}

export function Layout() {
  const { authenticated } = useAuth()
  const layoutType = useAppSelector((state) => state.theme.currentLayout)

  useLocale()

  const AppLayout = useMemo(() => {
    if (authenticated) {
      return layouts[layoutType]
    }
    return lazy(() => import('./AuthLayout'))
  }, [authenticated])

  return (
    <Suspense
      fallback={
        <div className="flex flex-auto flex-col h-[100vh]">
          <LoadingScreen />
        </div>
      }
    >
      <AppLayout />
    </Suspense>
  )
}
