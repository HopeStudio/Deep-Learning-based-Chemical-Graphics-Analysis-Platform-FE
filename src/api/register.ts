import axios from 'axios'
import api from './apimap'
import { ResponseDataBaseType, ResponseLoginDataType } from './responseType'

interface RegisterType {
  uname: string
  password: string
  authType: 'email'
  authToken: string
  openId: string
}

export const register = async (data: RegisterType) => {
  const { data: resData } = await axios.post<ResponseDataBaseType<ResponseLoginDataType>>(api.register, data)

  return resData
}

export const checkUserName = async (userName: string) => {
  const { data } = await axios.post<ResponseDataBaseType>(api.checkUserName, { uname: userName })

  return data
}

export const checkEmail = async (email: string) => {
  const { data } = await axios.post<ResponseDataBaseType>(api.checkEmail, { email })
  return data
}

export const sendVerificationCode = async (email: string) => {
  const { data } = await axios.post<ResponseDataBaseType>(api.verification,
    {
      authType: 'email',
      authId: email,
    })
  return data
}

export const verifyCode = async (email: string, code: string | number) => {
  const { data } = await axios.post<ResponseDataBaseType<{authToken: string}>>(api.verifyCode, {
    authType: 'email',
    authId: email,
    authCode: code,
  })

  return data
}
