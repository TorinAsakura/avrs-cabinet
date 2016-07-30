/* eslint-disable no-console */
import webpack from 'webpack'
import * as config from '../config/webpack/prod'

webpack(config).run(error => {
  if (error) {
    console.log(error)
  }
})
