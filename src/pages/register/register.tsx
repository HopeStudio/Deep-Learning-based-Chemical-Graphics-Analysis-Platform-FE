import React from 'react'
import { Title } from '../../components'
import { RegisterForm } from '../../containers'
import Classes from './register.module.scss'

const Register: React.FC = () => {
  return (
    <div className={Classes['register-page']}>
      <Title
        sub="enjoy the power of technology"
      >
        Welcome to CGAP!
      </Title>
      <div className={Classes.container}>
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
