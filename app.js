import express from 'express'
import RouterApiV1 from './src/v1/Router.js'

const app = express()

app.use('/api/v1', RouterApiV1)

app.get('/', (req, res) => {
  res.send(`
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
  <h1>Backend</h1>

  
  <a href="/api/v1/docs/">Docs</a>

  </div>
  
  `)
})

export default app
