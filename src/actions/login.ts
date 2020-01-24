import { ActionTypes, Action } from '../model'
import { ResponseLoginDataType } from '../api/responseType'

export type LoginActionType = Action<ResponseLoginDataType>

export function login(payload: ResponseLoginDataType): LoginActionType {
  return {
    type: ActionTypes.LOGIN,
    payload,
  }
}

export function logout(): Action<undefined>{
  return {
    type: ActionTypes.LOGOUT,
    payload: undefined,
  }
}
