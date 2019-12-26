import { PLUS_ONE } from '../actionTypes'

export default function(state: number = 1, action: {type: string}) {
  switch (action.type) {
    case PLUS_ONE:
      return state + 1
  }
  return state
}
