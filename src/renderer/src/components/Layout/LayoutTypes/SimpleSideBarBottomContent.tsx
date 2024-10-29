import useAuth from '@renderer/utils/hooks/useAuth'
import { IconLogout } from '@tabler/icons-react'
import UserPopOver from '../../UserPopOver/UserPopOver'
import classes from './SimpleSideBar.module.css'

export default function SimpleSideBarBottomContent() {
  const { signOut } = useAuth()

  return (
    <>
      <UserPopOver />
      <div
        className={classes.link}
        onClick={(_event) => {
          signOut()
        }}
      >
        <IconLogout className={classes.icon} />
        <span>Exit</span>
      </div>
    </>
  )
}
