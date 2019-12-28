import React from 'react'
import { Title } from '../../components'
import { LoginForm } from '../../containers'
import Classes from './login.module.scss'

const Login: React.FC = () => {
  return (
    <>
      <Title
        sub="enjoy the power of technology"
      >
        Welcome to CGAP!
      </Title>
      <div className={Classes.container}>
        <LoginForm />
      </div>
    </>
  )
}

export default Login
