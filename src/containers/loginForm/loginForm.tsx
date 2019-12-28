import React, { useState } from 'react'
import { Input, CheckboxItem } from '../../components'

const LoginForm: React.FC = () => {
  const [checked, setChecked] = useState(false)

  function handleChange() {
    setChecked(!checked)
  }
  return (
    <form>
      <Input />
      <CheckboxItem checked={checked} onChange={handleChange}/>
    </form>
  )
}

export default LoginForm
