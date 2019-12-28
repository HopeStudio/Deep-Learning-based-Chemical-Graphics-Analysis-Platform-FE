import React, { useState } from 'react'
import { Input, CheckboxItem, Button, Divider } from '../../components'

const LoginForm: React.FC = () => {
  const [checked, setChecked] = useState(false)

  function handleChange() {
    setChecked(!checked)
  }
  return (
    <form>
      <Input />
      <CheckboxItem checked={checked} onChange={handleChange}>
        Remember Password
      </CheckboxItem>
      <Button type="gradient" size="auto">
        Login
      </Button>

      <Divider>
        OR
      </Divider>

      <Button type="normal" size="auto">Login with Github</Button>
      <Button type="normal" size="auto">Login with QQ</Button>
    </form>

  )
}

export default LoginForm
