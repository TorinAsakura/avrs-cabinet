import React from 'react'
import { Provider } from 'react-redux'
import storeShape from 'react-redux/lib/utils/storeShape'
import { ReduxRouter } from 'redux-router'
import { AppContainer } from 'react-hot-loader'
import IntlProvider from './IntlProvider'
import getRoutes from '../routes'

const Root = ({ store }) => (
  <AppContainer>
    <Provider store={store}>
      <IntlProvider>
        <ReduxRouter routes={getRoutes(store)} />
      </IntlProvider>
    </Provider>
  </AppContainer>
)

Root.propTypes = {
  store: storeShape,
}

export default Root
