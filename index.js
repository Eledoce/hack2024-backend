import app from './app.js'
import createConnection from './src/mongo.js'

const PORT = process.env.PORT || 3000

createConnection()

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
