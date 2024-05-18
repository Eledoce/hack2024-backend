import app from './app.js'
import createConnection from './src/mongo.js'
import { swaggerDocs as docV1 } from './src/v1/swagger.js'

const PORT = process.env.PORT || 3000

createConnection()

app.listen(PORT, () => {
  docV1(app, PORT)
  console.log(`Server is running on http://localhost:${PORT}`)
})
