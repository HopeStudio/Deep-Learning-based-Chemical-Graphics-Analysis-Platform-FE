import React from 'react'
import { UserPage } from '../../containers'
import Classes from './setting.module.scss'
import { FormItem, Input, Button, createMessage } from '../../components'
import { deleteAccount } from '../../api/user'

const Setting: React.FC = props => {
  async function handleDeleteAccount() {
    const data = await deleteAccount('everbrez')
    if (data.code === 0) {
      createMessage('删除账号成功')
    }
  }
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
        <Button type="danger" size="medium" onClick={handleDeleteAccount}>
          Delete Account
        </Button>
      </FormItem>
    </UserPage>
  )
}

export default Setting
