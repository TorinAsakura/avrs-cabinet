import { createStore, compose, applyMiddleware } from 'redux'
import { reduxReactRouter } from 'redux-router'
import api from './middleware/api'
import intl from './middleware/intl'
import createHistory from './createHistory'
import persistStorage from './persistStorage'
import rootReducer from '../reducers'
import client from '../api/client'

const enhancer = compose(
  reduxReactRouter({ createHistory }),
  applyMiddleware(client.middleware(), api(client), intl),
  persistStorage,
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  store.history.listenBefore((location) => {
    if (!/^\/auth/.test(location.pathname)) {
      if (!store.getState().security.token) {
        store.history.push('/auth/login')
      }
    }

    if (store.getState().security.token) {
      if (location.pathname === '/' || !/^\/(money|net|beginning|service_plans)/.test(location.pathname)) {
        if (store.getState().user.isNew) {
          if (!/^\/auth/.test(location.pathname)) {
            store.history.push('/beginning')
          }
        }
      }
    }
  })

  return store
}
