import app from './app.js'
import createConnection from './src/mongo.js'

createConnection()

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
