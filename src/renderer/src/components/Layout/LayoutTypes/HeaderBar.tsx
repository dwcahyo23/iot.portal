import { Group, Text } from '@mantine/core'
import { ColorSchemeToggle } from '@renderer/components/ColorSchemeToggle/ColorSchemeToggle'
import AuthorityCheck from '@renderer/route/AuthorityCheck'
import { RootState, selectNavigationPortal } from '@renderer/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import classes from './HeaderBar.module.css'

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const navigate = useNavigate()
  const location = useLocation()
  const [active, setActive] = useState('')

  // Access navigation data from portalSlice
  const navigation = useSelector((state: RootState) => selectNavigationPortal(state))

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Handle active link styling
  useEffect(() => {
    const currentPath = location.pathname.split('/')[1]
    setActive(currentPath)
  }, [location.pathname])

  // Render navigation links
  const links = navigation.map((item) => (
    <AuthorityCheck key={item.key} userAuthority={['user', 'admin']} authority={item.authority}>
      <Link
        className={classes.link}
        data-active={item.path.split('/')[1] === active ? 'true' : undefined}
        to={item.path}
        onClick={(event) => {
          event.preventDefault()
          setActive(item.path)
          navigate(item.path)
        }}
      >
        {item.title}
      </Link>
    </AuthorityCheck>
  ))

  return (
    <div className={classes.header}>
      <div className={classes.titleLinksContainer}>
        <div className={classes.links}>{links}</div>
      </div>
      <Group gap="md" className={classes.timeGroup}>
        <ColorSchemeToggle />
        <Text>{currentTime.toLocaleTimeString()}</Text>
      </Group>
    </div>
  )
}
