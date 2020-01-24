import React from 'react'
import { useSelector } from '../../selectors'
import useActions, * as Actions from '../../actions'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { State } from '../../model'
import * as plusone from '../../actions/plusone'
import { Button, Logo, Avatar, DropDown } from '../../components'
import { Container, UserMenu } from '../../containers'
import Classes from './header.module.scss'
import { ReactComponent as SearchIcon } from '../../assets/images/search-icon.svg'

const Header: React.FC = () => {
  const isLogin = useSelector<string>(state => state.login)

  return (
    <Container type="flex">
      <header className={Classes.container}>
        <div className={Classes['left-container']}>
          <Link to="/">
            <div className={Classes.logo}>
              <Logo />
              <h1 className={Classes.title}>CGAP</h1>
            </div>
          </Link>

          <nav className={Classes.nav}>
            <Link to="/products">Products</Link>
            <a href="javascript:;">Contact</a>
          </nav>
        </div>

        <div className={Classes['right-container']}>
          <Link to="/search" title="search" className={Classes.search}>
            <SearchIcon className={Classes['search-icon']} />
          </Link>
          {
            isLogin
            ?
              <DropDown dropDown={<UserMenu />}>
                <Link to="/profile" className={Classes.avatar}>
                  <Avatar />
                </Link>
              </DropDown>
            : <>
                <Link to="/login" className={Classes.login}>Login</Link>
                <Link to="/register" className="no-hover">
                  <Button
                    type="gradient"
                    size="normal">
                    Register
                  </Button>
                </Link>
              </>
          }

        </div>

      </header>
    </Container>
  )
}

export default Header
