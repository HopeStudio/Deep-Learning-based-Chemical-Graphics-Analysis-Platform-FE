import { ActionTypes, State, Action } from '../model'
import { LoginActionType } from '../actions/login'

function setAccessTokenToLocalStorage(token: string, isRemember = false) {
  if (isRemember) {
    localStorage.token = token
    return
  }
  sessionStorage.token = token
}

function getAccessToken() {
  return localStorage.token || sessionStorage.token || ''
}

function clearToken() {
  localStorage.token = sessionStorage.token = ''
}

export default function login(state: State['login'] = getAccessToken(), action: Action<any>) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      const { payload } = action as LoginActionType
      setAccessTokenToLocalStorage(payload.accessToken, payload.remember)
      return payload.accessToken
    case ActionTypes.LOGOUT:
      clearToken()
      return ''
  }
  return state
}
