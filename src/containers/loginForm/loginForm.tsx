import React, { useState } from 'react'
import { Input, CheckboxItem, Button } from '../../components'

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
    </form>
  )
}

export default LoginForm
