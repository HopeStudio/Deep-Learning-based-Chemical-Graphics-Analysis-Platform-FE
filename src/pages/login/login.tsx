import React from 'react'
import { LoginForm } from '../../containers'
import Classes from './login.module.scss'

const Login: React.FC = () => {
  return (
      <div className={Classes.container}>
        <LoginForm />
      </div>
  )
}

export default Login
