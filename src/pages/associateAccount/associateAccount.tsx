import React from 'react'
import { Title } from '../../components'
import { AssociateAccountForm } from '../../containers'
import Classes from './associateAccount.module.scss'

const AssociateAccount: React.FC = props => {

  return (
    <div className={Classes.page}>
      <Title
        sub="enjoy the power of technology"
      >
        Associate Your Account
      </Title>
      <div className={Classes.container}>
        <AssociateAccountForm />
      </div>
    </div>
  )
}

export default AssociateAccount
