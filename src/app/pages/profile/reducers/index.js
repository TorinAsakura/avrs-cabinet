import { combineReducers } from 'redux'
import common from './common'
import general from './general'
import withdraw from './withdraw'

export default combineReducers({
  common,
  general,
  withdraw,
})
