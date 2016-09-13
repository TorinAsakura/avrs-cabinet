import React from 'react'
import { Provider } from 'react-redux'
import storeShape from 'react-redux/lib/utils/storeShape'
import { ReduxRouter } from 'redux-router'
import IntlProvider from './IntlProvider'
import getRoutes from '../routes'

const Root = ({ store }) => (
  <Provider store={store}>
    <IntlProvider>
      <ReduxRouter routes={getRoutes(store)} />
    </IntlProvider>
  </Provider>
)

Root.propTypes = {
  store: storeShape,
}

export default Root
