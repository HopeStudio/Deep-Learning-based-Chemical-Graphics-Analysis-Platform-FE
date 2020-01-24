import { ActionTypes, State, Action } from '../model'
import { LoginActionType } from '../actions/login'

export default function login(state: State['login'] = '', action: Action<any>) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      const { payload } = action as LoginActionType
      return payload.accessToken
    case ActionTypes.LOGOUT:
      return ''
  }
  return state
}
