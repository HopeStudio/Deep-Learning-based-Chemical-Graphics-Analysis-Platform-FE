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

export interface CheckUserNameType {
  uname: string
}

export interface CheckEmailType {
  email: string
}

export interface VerificationType {
  authType: 'email'
  authId: string
}
