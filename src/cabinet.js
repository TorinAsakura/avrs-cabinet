import React from 'react'
import { render } from 'react-dom'
import configureStore from './app/store/configureStore'
import Root from './app/containers/Root'
import 'reset.css'
import 'flex-layouts/lib/flex-layouts.css'
import './cabinet.css'

const store = configureStore()

store.dispatch({ type: '@@avrs-cabinet/intl/INIT' })

render(
  <Root store={store} />,
  document.getElementById('container')
)

if (module.hot) {
  module.hot.accept('./app/containers/Root', () => {
    const HotRoot = require('./app/containers/Root').default // eslint-disable-line global-require

    render(
      <HotRoot store={store} />,
      document.getElementById('container')
    )
  })
}
