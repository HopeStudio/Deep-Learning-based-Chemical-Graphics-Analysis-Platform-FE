import React from 'react'
import { Link } from 'react-router-dom'
import useActions, * as Actions from '../../actions'
import { Divider } from '../../components'
import Classes from './userMenu.module.scss'

const UserMenu: React.FC = props => {
  const logout = useActions<typeof Actions.logout>(Actions.logout)

  return (
    <ul className={Classes.container}>
      <li>signed in as everbrez</li>

      <Divider type="line" className={Classes.line}/>

      <li>
        <Link to="/profile">Your Profile</Link>
      </li>

      <li>
        <Link to="/history">Your History</Link>
      </li>

      <Divider type="line" className={Classes.line}/>

      <li>
        <Link to="/setting">Setting</Link>
      </li>

      <li>
        <Link to="" onClick={logout}>Logout</Link>
      </li>

    </ul>
  )
}

export default UserMenu
