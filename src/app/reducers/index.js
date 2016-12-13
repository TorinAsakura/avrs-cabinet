import { compose, combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'
import { mergePersistedState } from 'redux-localstorage'
import client from '../api/client'
import user from './user'
import intl from './intl'
import remote from './remote'
import config from './config'
import security from './security'
import stat from './stat'
import auth from '../pages/auth/reducers'
import servicePlans from '../pages/ServicePlans/reducers'
import money from '../pages/money/reducers'
import network from '../pages/network/reducers'
import support from '../pages/support/reducers'

const reducers = combineReducers({
  apollo: client.reducer(),
  router,
  security,
  user,
  intl,
  remote,
  config,
  auth,
  stat,
  servicePlans,
  money,
  network,
  support,
})

export default compose(
  mergePersistedState(),
)(reducers)
