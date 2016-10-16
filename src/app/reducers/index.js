import { compose, combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'
import { mergePersistedState } from 'redux-localstorage'
import user from './user'
import intl from './intl'
import remote from './remote'
import auth from '../pages/auth/reducers'

const reducers = combineReducers({
  router,
  user,
  intl,
  remote,
  auth,
})

export default compose(
  mergePersistedState()
)(reducers)
