/* eslint-disable no-param-reassign */
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { start, end } from '../actions/remote'
import { logout } from '../actions/user'

const networkInterface = createNetworkInterface({ uri: process.env.API_URL })

const client = new ApolloClient({
  networkInterface,
})

networkInterface.use([{
  applyMiddleware(req, next) {
    const security = client.store.getState().security

    if (!req.options.headers) {
      req.options.headers = {}
    }

    if (security && security.token) {
      req.options.headers.authorization = security.token
    }

    client.store.dispatch(start())

    next()
  },
}])

networkInterface.useAfter([{
  applyAfterware({ response }, next) {
    client.store.dispatch(end())

    if (response.status === 401) {
      client.store.dispatch(logout())
    }

    next()
  },
}])

export default client
