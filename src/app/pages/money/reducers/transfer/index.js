import { combineReducers } from 'redux'
import internal from './internal'
import external from './external'

export default combineReducers({
  internal,
  external,
})
