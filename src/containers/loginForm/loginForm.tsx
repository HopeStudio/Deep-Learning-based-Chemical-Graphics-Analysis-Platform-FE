import React, { useState, ChangeEvent, MouseEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import useActions, * as Actions from '../../actions'
import { Input, CheckboxItem, Button, Divider, FormItem, createMessage } from '../../components'
import * as api from '../../api'

const LoginForm: React.FC = () => {
  const [isRememberPassword, setIsRememberPassword] = useState(false)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const login = useActions<typeof Actions.login>(Actions.login)
  const history = useHistory()

  function handleRememberPasswordChange() {
    setIsRememberPassword(!isRememberPassword)
  }
  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setPassword(value)
  }

  function handleUserNameChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setUserName(value)
  }

  async function handleLogin(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    event.stopPropagation()
    console.log(userName, password, isRememberPassword)
    const data = await api.login({
      openId: userName,
      password,
      isRememberPassword,
    })
    if (data.code !== 0) {
      createMessage(data.message)
      return
    }

    login(data.data)
    history.push('/')
  }

  return (
    <form>
      <FormItem>
        <Input
          placeholder="please input user name or email"
          onChange={handleUserNameChange}
        />
      </FormItem>

      <FormItem>
        <Input
          placeholder="please input password"
          type="password"
          onChange={handlePasswordChange}
        />
      </FormItem>

      <FormItem>
        <CheckboxItem
          checked={isRememberPassword}
          onChange={handleRememberPasswordChange}
        >
          Remember Password
        </CheckboxItem>
        <Link to="/forgotpassword" className="hover">forgot password?</Link>
      </FormItem>

      <FormItem>
        <Button type="gradient" size="auto" onClick={handleLogin}>
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
