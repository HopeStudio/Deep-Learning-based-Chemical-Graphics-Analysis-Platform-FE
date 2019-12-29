import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../container/container'
import Classes from './userPage.module.scss'
import { Divider } from '../../components'

export type UserPageProps = React.ComponentPropsWithRef<'div'> & {
  title?: string | React.ReactElement,
}

const UserPage: React.FC<UserPageProps> = props => {

  const { children, title } = props

  const navigation = [
    { title: 'Profile', link: '/profile' },
    { title: 'History', link: 'history' },
    { title: 'Setting', link: '/setting' }]

  return (
    <Container className={Classes.container}>
      <aside className={Classes.aside}>
        <ul className={Classes['link-container']}>
          {navigation.map(({ title: navTitle, link }, index) => (
            <React.Fragment>
              {index ? <Divider type="line" className={Classes.line} /> : ''}
              <li>
                <Link to={link}>{navTitle}</Link>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </aside>
      <div className={Classes.content}>
        <h3 className={Classes.title}>{title}</h3>
        <Divider type="line" />
        <div className={Classes.detail}>
          {children}
        </div>
      </div>
      <div className={Classes.empty}></div>
    </Container>
  )
}

export default UserPage
