import React from 'react'
import { Provider } from 'react-redux'
import storeShape from 'react-redux/lib/utils/storeShape'
import { AppContainer } from 'react-hot-loader'
import IntlProvider from './IntlProvider'
import ReduxRouter from './ReduxRouter'
import Preload from './Preload'
import getRoutes from '../routes'

const Root = ({ store }) => (
  <AppContainer>
    <Provider store={store}>
      <Preload>
        <IntlProvider>
          <ReduxRouter routes={getRoutes(store)} />
        </IntlProvider>
      </Preload>
    </Provider>
  </AppContainer>
)

Root.propTypes = {
  store: storeShape,
}

export default Root
