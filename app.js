import express from 'express'
import RouterApiV1 from './src/v1/Router.js'

const app = express()

app.use('/api/v1', RouterApiV1)

app.get('/', (req, res) => {
  res.send('Hello World')
})

export default app
