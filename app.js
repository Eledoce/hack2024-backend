import express from 'express'
import cors from 'cors'
import RouterApiV1 from './src/v1/Router.js'

const app = express()

// Use cors middleware
app.use(cors())
app.use(express.json())

app.use('/api/v1', RouterApiV1)

app.get('/', (req, res) => {
  res.send(`
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f8f9fa; flex-direction: column;">
  <h1 style="color: #343a40; margin-bottom: 20px;">Backend</h1>
  <a href="/api/v1/docs/" style="color: #007bff; text-decoration: none; padding: 10px 20px; border: 1px solid #007bff; border-radius: 5px;">Docs</a>
</div>
  `)
})

export default app
