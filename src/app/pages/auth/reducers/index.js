import { combineReducers } from 'redux'
import login from './login'
import registration from './registration'
import resetPassword from './resetPassword'
import updatePassword from './updatePassword'

export default combineReducers({
  login,
  registration,
  resetPassword,
  updatePassword,
})
