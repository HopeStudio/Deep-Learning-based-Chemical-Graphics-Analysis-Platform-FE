import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input, CheckboxItem, Button, Divider, FormItem } from '../../components'
import Classes from './registerForm.module.scss'

const RegisterForm: React.FC = () => {
  const [checked, setChecked] = useState(false)

  function handleChange() {
    setChecked(!checked)
  }

  return (
    <form>
      <FormItem>
        <Input placeholder="please input user name" />
      </FormItem>

      <FormItem>
        <Input placeholder="please input password" />
      </FormItem>

      <FormItem>
        <Input placeholder="please input email address" />
      </FormItem>

      <FormItem>
        <Input placeholder="verification code" className={Classes['verification-code']} />
        <Button>Get Code</Button>
      </FormItem>

      <FormItem>
        <CheckboxItem checked={checked} onChange={handleChange}>
          I agree the user proxy
      </CheckboxItem>
      </FormItem>

      <FormItem>
        <Button type="gradient" size="auto">
          Register
      </Button>
      </FormItem>

      <Divider space>
        OR
      </Divider>

      <FormItem>
        <Button type="normal" size="auto">Login with WeChat</Button>
      </FormItem>

      <FormItem>
        <Button type="normal" size="auto">Login with QQ</Button>
      </FormItem>

      <FormItem align="end">
        already has account? click here to&nbsp;<Link to="login" className="hover">login</Link>
      </FormItem>

    </form>

  )
}

export default RegisterForm
