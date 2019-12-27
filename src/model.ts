export enum ActionTypes {
  PLUS_ONE,
}

export interface Action<T> {
  type: ActionTypes,
  payload: T,
}

export interface State {
  plus: number
}
