import React from 'react'
import { UserPage } from '../../containers'
import Upload from '../../components/upload/upload'
import { Avatar, FormItem, Input, Button } from '../../components'
import Classes from './profile.module.scss'

const Profile: React.FC = props => {
  return (
    <UserPage title="Profile">
      <Upload className={Classes.upload}>
        <Avatar size="large" />
        <div className={Classes.mask}>
          Click to Upload
        </div>
      </Upload>

      <FormItem label="user name">
        <Input size="large" value="everbrez" disabled />
      </FormItem>

      <FormItem label="bio">
        <Input size="large" value="everbrez" />
      </FormItem>

      <FormItem label="location">
        <Input size="large" value="everbrez" />
      </FormItem>

      <FormItem>
        <Button>
          Update Profile
        </Button>
      </FormItem>

      <FormItem label="email" space="large">
        <Input size="large" value="everbrez@gmail.com" disabled/>
      </FormItem>
    </UserPage>
  )
}

export default Profile
