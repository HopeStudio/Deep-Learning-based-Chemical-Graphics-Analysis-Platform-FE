import {ActionTypes, Action} from '../model'

export function plus(): Action<undefined> {
  return {
    type: ActionTypes.PLUS_ONE,
    payload: undefined,
  }
}
