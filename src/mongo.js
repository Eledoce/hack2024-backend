import mongoose from 'mongoose'

const createConnection = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb+srv://eslavadev:HiSK8NM80PqL4kdE@cluster0.cpirtlu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    console.log('MongoDB connection successful')
    return connection
  } catch (error) {
    console.log('MongoDB connection error', error)
  }
}

export default createConnection
