import { combineReducers } from 'redux'
import direct from './direct'
import top from './top'
import hierarchy from './hierarchy'

export default combineReducers({
  direct,
  top,
  hierarchy,
})
