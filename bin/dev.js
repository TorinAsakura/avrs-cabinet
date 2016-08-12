/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import path from 'path'
import Express from 'express'
import webpack from 'webpack'
import serveStatic from 'serve-static'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import { serverConfig } from 'docsnow/lib/webpack/config'
import * as config from '../config/webpack/dev'

const app = new Express()

const docsConfig = serverConfig('src/ui/Readme.md', '/ui/')
docsConfig.module.loaders.push(config.module.loaders[0])
docsConfig.module.loaders.push(config.module.loaders[1])

const compiler = webpack([config, docsConfig])

app.use(devMiddleware(compiler, { noInfo: true }))
app.use(hotMiddleware(compiler))

app.use(serveStatic(path.resolve(__dirname, '../public')))

app.listen(3030, error => {
  if (error) {
    throw error
  }

  console.info('Development server listening on port %s', 3030)
})
