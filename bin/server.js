/* eslint-disable no-console */
import path from 'path'
import Express from 'express'
import serveStatic from 'serve-static'

const app = new Express()

app.use(serveStatic(path.resolve(__dirname, '../public')))

app.listen(3000, (error) => {
  if (error) {
    throw error
  }

  console.info('Server listening on port %s', 3000)
})
