import { createStore, compose, applyMiddleware } from 'redux'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import api from './middleware/api'
import intl from './middleware/intl'
import persistStorage from './persistStorage'
import rootReducer from '../reducers'
import client from '../api/client'

const enhancer = compose(
  reduxReactRouter({ createHistory }),
  applyMiddleware(client.middleware(), api(client), intl),
  persistStorage,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  store.history.listenBefore((location) => {
    if (!/^\/auth/.test(location.pathname)) {
      if (!store.getState().security.token) {
        store.history.push('/auth/login')
      }
    }
  })

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(rootReducer), // eslint-disable-line global-require
    )
  }

  return store
}
