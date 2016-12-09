/* eslint-disable no-console */
import webpack from 'webpack'
import * as config from '../config/webpack/prod'

webpack(config).run((error, stats) => {
  if (stats.hasErrors()) {
    console.log(stats.toString({ chunks: false }))
  } else if (error) {
    console.log(error)
  }
})
