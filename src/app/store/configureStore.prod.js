import { createStore, compose, applyMiddleware } from 'redux'
import { reduxReactRouter } from 'redux-router'
import { createHashHistory } from 'history'
import api from './middleware/api'
import intl from './middleware/intl'
import rootReducer from '../reducers'

const createHistory = () => createHashHistory({ queryKey: false })

const enhancer = compose(
  reduxReactRouter({ createHistory }),
  applyMiddleware(api, intl),
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  return store
}
