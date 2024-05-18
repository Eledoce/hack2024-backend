import express from 'express'
import cors from 'cors'
import RouterApiV1 from './src/v1/Router.js'

const app = express()

// Use cors middleware
app.use(cors())

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
