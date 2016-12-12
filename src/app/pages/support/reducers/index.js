import { combineReducers } from 'redux'
import list from './list'
import create from './create'
import detail from './detail'

export default combineReducers({
  list,
  create,
  detail,
})
