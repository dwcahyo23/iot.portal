import appConfig from '@renderer/configs/app.config'
import { REDIRECT_URL_KEY } from '@renderer/constants/app.constant'
import useAuth from '@renderer/utils/hooks/useAuth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const { unAuthenticatedEntryPath } = appConfig

const ProtectedRoute = () => {
  const { authenticated } = useAuth()

  const location = useLocation()

  if (!authenticated) {
    return (
      <Navigate
        replace
        to={`${unAuthenticatedEntryPath}?${REDIRECT_URL_KEY}=${location.pathname}`}
      />
    )
  }

  return <Outlet />
}

export default ProtectedRoute
