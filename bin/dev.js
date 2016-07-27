/* eslint-disable no-console */
import Express from 'express'
import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import * as config from '../config/webpack/dev'

const app = new Express()
const compiler = webpack(config)

app.use(devMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(hotMiddleware(compiler))

app.listen(3030, error => {
  if (error) {
    throw error
  }

  console.info('Development server listening on port %s', 3030)
})
