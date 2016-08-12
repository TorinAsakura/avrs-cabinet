import { createStore, compose, applyMiddleware } from 'redux'
import { reduxReactRouter } from 'redux-router'
import { createHashHistory } from 'history'
import api from './middleware/api'
import persistStorage from './persistStorage'
import rootReducer from '../reducers'

const createHistory = () => createHashHistory({ queryKey: false })

const enhancer = compose(
  persistStorage,
  reduxReactRouter({ createHistory }),
  applyMiddleware(api),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default) // eslint-disable-line global-require
    )
  }

  return store
}