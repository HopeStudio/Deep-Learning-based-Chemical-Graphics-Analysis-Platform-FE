import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input, CheckboxItem, Button, Divider, FormItem } from '../../components'

const LoginForm: React.FC = () => {
  const [checked, setChecked] = useState(false)

  function handleChange() {
    setChecked(!checked)
  }
  return (
    <form>
      <FormItem>
        <Input placeholder="please input user name or email" />
      </FormItem>

      <FormItem>
        <Input placeholder="please input password" />
      </FormItem>

      <FormItem>
        <CheckboxItem checked={checked} onChange={handleChange}>
          Remember Password
      </CheckboxItem>
        <Link to="/forgotpassword" className="hover">forgot password?</Link>
      </FormItem>

      <FormItem>
        <Button type="gradient" size="auto">
          Login
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
        dont't have an account? click here to&nbsp;<Link to="register" className="hover">register</Link>
      </FormItem>

    </form>

  )
}

export default LoginForm
