export interface ResponseDataBaseType<T = object> {
  data: T
  code: number
  message: 'string'
}

export interface LoginDataType {
  openId: string,
  password: string,
  remember?: boolean
}

export interface ResponseLoginDataType {
  accessToken: string,
  remember: boolean,
}
