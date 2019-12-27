import { ActionTypes, State } from '../model'

export default function plus(state: State['plus'] = 1, action: {type: any}) {
  switch (action.type) {
    case ActionTypes.PLUS_ONE:
      return state + 1
  }
  return state
}
