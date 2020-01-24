import axios from 'axios'
import api from './apimap'
import { ResponseDataBaseType } from './responseType'

export const deleteAccount = async (userName: string) => {
  const data = await axios.post<ResponseDataBaseType>(api.deleteAccount, {
    uname: userName,
  })

  return data.data
}
