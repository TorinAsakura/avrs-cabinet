/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import path from 'path'
import Express from 'express'
import webpack from 'webpack'
import serveStatic from 'serve-static'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import * as config from '../config/webpack/dev'

const app = new Express()
const compiler = webpack([config])

const middleware = devMiddleware(compiler, { noInfo: true })

app.use(middleware)
app.use(hotMiddleware(compiler))

app.use(serveStatic(path.resolve(__dirname, '../public')))

app.get('*', (req, res, next) => {
  if (!path.extname(req.originalUrl)) {
    res.end(middleware.fileSystem.readFileSync(`${config.output.path}index.html`))
  } else {
    const parts = req.originalUrl.split('/')

    if (parts.length > 2) {
      res.redirect(`http://${req.header('host')}/${parts[parts.length - 1]}`)
    } else {
      next()
    }
  }
})

app.listen(3030, (error) => {
  if (error) {
    throw error
  }

  console.info('Development server listening on port %s', 3030)
})
