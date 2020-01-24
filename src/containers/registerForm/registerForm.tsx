import React, { useState, ChangeEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Input, CheckboxItem, Button, Divider, FormItem, createMessage } from '../../components'
import Classes from './registerForm.module.scss'
import { checkUserName, checkEmail, sendVerificationCode, verifyCode, register } from '../../api/register'
import useActions, * as Actions from '../../actions'

const RegisterForm: React.FC = () => {
  const [agree, setAgree] = useState(false)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [userNameMessage, setUserNameMessage] = useState('')
  const [getCodeLoading, setGetCodeLoading] = useState(false)
  const login = useActions<typeof Actions.login>(Actions.login)
  const history = useHistory()

  function handleAgree() {
    setAgree(!agree)
  }

  async function handleUserNameChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setUserName(value)
    const data = await checkUserName(value)
    if (data.code !== 0) {
      setUserNameMessage('invalid user name')
      return
    }
    setUserNameMessage('')
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setPassword(value)
  }

  async function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setEmail(value)
    const data = await checkEmail(value)
    if (data.code !== 0) {
      setEmailMessage('invalid email')
      return
    }
    setEmailMessage('')
  }

  function handleVerificatonCodeChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setVerificationCode(value)
  }

  async function requestCode() {
    setGetCodeLoading(true)
    const data = await sendVerificationCode(email)
    if (data.code === 0) {
      createMessage('发送验证码成功！')
      return
    }

    createMessage('发送验证码失败，请稍后再试')
  }

  async function handleVerifyCode(): Promise<string> {
    const data = await verifyCode(email, verificationCode)
    if (data.code !== 0) {
      createMessage('验证码错误')
      return ''
    }

    return data.data.authToken
  }

  async function handleRegister() {
    // first verify code
    const token = await handleVerifyCode()
    if (!token) {
      return
    }

    const data = await register({
      uname: userName,
      password,
      openId: email,
      authToken: token,
      authType: 'email',
    })

    if (data.code !== 0) {
      createMessage('注册失败，请稍后再试')
      return
    }

    login(data.data)
    createMessage('注册成功 正在登录...')
    history.push('/')
  }

  return (
    <form onSubmit={event => event.preventDefault()}>
      <FormItem error={userNameMessage}>
        <Input
          placeholder="please input user name"
          onChange={handleUserNameChange}
          error={!!userNameMessage}
        />
      </FormItem>

      <FormItem>
        <Input placeholder="please input password" onChange={handlePasswordChange} />
      </FormItem>

      <FormItem error={emailMessage}>
        <Input
          placeholder="please input email address"
          onChange={handleEmailChange}
          error={!!emailMessage}
        />
      </FormItem>

      <FormItem>
        <Input
          placeholder="verification code"
          className={Classes['verification-code']}
          onChange={handleVerificatonCodeChange}
        />
        <Button onClick={requestCode} disabled={!!emailMessage || getCodeLoading}>
          Get Code
        </Button>
      </FormItem>

      <FormItem>
        <CheckboxItem checked={agree} onChange={handleAgree}>
          I agree the user proxy
      </CheckboxItem>
      </FormItem>

      <FormItem>
        <Button type="gradient" size="auto" onClick={handleRegister} disabled={!agree}>
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
