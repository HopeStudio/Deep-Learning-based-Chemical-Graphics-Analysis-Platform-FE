import { useSelector as useSelectorBase } from 'react-redux'
import { State } from '../model'

function useSelector<T>(
  selector: (state: State) => unknown): T {
  return useSelectorBase(selector) as T
}

export {
  useSelector,
}

export default useSelector
