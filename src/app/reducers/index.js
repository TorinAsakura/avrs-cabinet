import { compose, combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'
import { mergePersistedState } from 'redux-localstorage'
import client from '../api/client'
import user from './user'
import intl from './intl'
import remote from './remote'
import config from './config'
import security from './security'
import messages from './messages'
import stat from './stat'
import auth from '../pages/auth/reducers'
import home from '../pages/home/reducers'
import servicePlans from '../pages/ServicePlans/reducers'
import money from '../pages/money/reducers'
import network from '../pages/network/reducers'
import support from '../pages/support/reducers'
import profile from '../pages/profile/reducers'

const reducers = combineReducers({
  apollo: client.reducer(),
  router,
  security,
  messages,
  user,
  intl,
  remote,
  config,
  auth,
  stat,
  home,
  servicePlans,
  money,
  network,
  support,
  profile,
})

export default compose(
  mergePersistedState(),
)(reducers)
