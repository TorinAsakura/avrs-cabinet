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
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  return store
}
