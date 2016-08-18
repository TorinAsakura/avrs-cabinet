import { combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'
import user from './user'
import intl from './intl'
import auth from '../pages/auth/reducers'

export default combineReducers({
  router,
  user,
  intl,
  auth,
})
