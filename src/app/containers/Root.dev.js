import React from 'react'
import { Provider } from 'react-redux'
import storeShape from 'react-redux/lib/utils/storeShape'
import { ReduxRouter } from 'redux-router'
import { AppContainer } from 'react-hot-loader'
import getRoutes from '../routes'

const Root = ({ store }) => (
  <AppContainer>
    <Provider store={store}>
      <ReduxRouter routes={getRoutes(store)} />
    </Provider>
  </AppContainer>
)

Root.propTypes = {
  store: storeShape,
}

export default Root
