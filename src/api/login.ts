import axios from 'axios'
import api from './apimap'
import { ResponseDataBaseType, LoginDataType, ResponseLoginDataType } from './responseType'

export type ResponseDataType = ResponseDataBaseType<ResponseLoginDataType>

export const login = async (data: LoginDataType) => {
  const { data: responseData } = await axios.post<ResponseDataType>(api.login, data)
  return responseData
}

export const logout = async () => {
  const { data } = await axios.post<ResponseDataBaseType>(api.logout)
  if (data.code === 0) {
    return true
  }

  return false
}
