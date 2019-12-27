import { combineReducers } from 'redux'
import plusone from './plusone'

const reducers = { plus: plusone }

export default combineReducers(reducers)
