import React from 'react'
import { UserPage } from '../../containers'
import Classes from './setting.module.scss'
import { FormItem, Input, Button } from '../../components'

const Setting: React.FC = props => {
  return (
    <UserPage title="Setting">
      <FormItem label="New Password">
        <Input type="password" size="large" placeholder="please input new password"/>
      </FormItem>

      <FormItem>
        <Button size="medium">
          Update Password
        </Button>
      </FormItem>

      <FormItem space="large">
        <Button type="danger" size="medium">
          Delete Account
        </Button>
      </FormItem>
    </UserPage>
  )
}

export default Setting
