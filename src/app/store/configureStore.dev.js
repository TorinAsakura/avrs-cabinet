import { createStore, compose, applyMiddleware } from 'redux'
import { reduxReactRouter } from 'redux-router'
import api from './middleware/api'
import intl from './middleware/intl'
import createHistory from './createHistory'
import persistStorage from './persistStorage'
import rootReducer from '../reducers'

const enhancer = compose(
  reduxReactRouter({ createHistory }),
  applyMiddleware(api, intl),
  persistStorage,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  store.history.listen(location => {
    if (!/^\/auth/.test(location.pathname)) {
      if (!store.getState().user.token) {
        store.history.push('/auth/login')
      }
    }
  })

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default) // eslint-disable-line global-require
    )
  }

  return store
}
