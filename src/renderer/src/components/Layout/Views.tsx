import appConfig from '@renderer/configs/app.config'
import { protectedRoutes, publicRoutes } from '@renderer/configs/routes.config'
import AppRoute from '@renderer/route/AppRoute'
import AuthorityGuard from '@renderer/route/AuthorityGuard'
import ProtectedRoute from '@renderer/route/ProtectedRoute'
import PublicRoute from '@renderer/route/PublicRoute'
import { useAppSelector } from '@renderer/store'
import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoadingScreen from '../LoadingScreen/LoadingScreen'

interface ViewsProps {
  pageContainerType?: 'default' | 'gutterless' | 'contained'
  // layout?: LayoutType
}

type AllRoutesProps = ViewsProps

const { authenticatedEntryPath } = appConfig

const AllRoutes = (_props: AllRoutesProps) => {
  const userAuthority = useAppSelector((state) => state.auth.user.role)

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate replace to={authenticatedEntryPath} />} />
        {protectedRoutes.map((route, index) => {
          return (
            <Route
              key={route.key + index}
              path={route.path}
              element={
                <AuthorityGuard userAuthority={userAuthority} authority={route.authority}>
                  <AppRoute routeKey={route.key} component={route.component} {...route.authority} />
                </AuthorityGuard>
              }
            />
          )
        })}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
      <Route path="/" element={<PublicRoute />}>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<AppRoute routeKey={route.key} component={route.component} />}
          />
        ))}
      </Route>
    </Routes>
  )
}

const Views = (props: ViewsProps) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AllRoutes {...props} />
    </Suspense>
  )
}

export default Views
