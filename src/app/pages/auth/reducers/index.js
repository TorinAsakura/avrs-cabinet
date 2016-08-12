import { combineReducers } from 'redux'
import signIn from './signIn'
import signUp from './signUp'

export default combineReducers({
  signIn,
  signUp,
})
