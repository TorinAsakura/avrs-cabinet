import { combineReducers } from 'redux'
import payments from './payments'
import network from './network'

export default combineReducers({
  payments,
  network,
})
