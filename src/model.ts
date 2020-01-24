export enum ActionTypes {
  PLUS_ONE,
  LOGIN,
  LOGOUT,
}

export interface Action<T> {
  type: ActionTypes,
  payload: T,
}

export interface State {
  plus: number,
  login: string
}
