import React from 'react'
import { Title } from '../../components'
import { VerifyForm } from '../../containers'
import Classes from './verify.module.scss'

const Verify: React.FC = props => {
  return (
    <div className={Classes.page}>
      <Title
        sub="you are doing some dangerous actions"
      >
        Verify Your Account
      </Title>
      <div className={Classes.container}>
        <VerifyForm />
      </div>
    </div>
  )
}

export default Verify
