import React, { useState } from 'react'
import { Input, CheckboxItem, Button, Divider, FormItem } from '../../components'
import Classes from './loginForm.module.scss'

const LoginForm: React.FC = () => {
  const [checked, setChecked] = useState(false)

  function handleChange() {
    setChecked(!checked)
  }
  return (
    <form>
      <FormItem>
        <Input placeholder="user name or email" />
      </FormItem>
      <FormItem>
        <Input placeholder="password" />
      </FormItem>

      <FormItem>
        <CheckboxItem checked={checked} onChange={handleChange}>
          Remember Password
      </CheckboxItem>
      </FormItem>

      <FormItem>
        <Button type="gradient" size="auto">
          Login
      </Button>
      </FormItem>

      <Divider className={Classes.divider}>
        OR
      </Divider>

      <FormItem>
        <Button type="normal" size="auto">Login with WeChat</Button>
      </FormItem>
      <FormItem>
        <Button type="normal" size="auto">Login with QQ</Button>
      </FormItem>

    </form>

  )
}

export default LoginForm
