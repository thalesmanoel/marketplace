import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export async function connectDatabase(): Promise<void> {
  const uri = process.env.MONGO_URI
  if (!uri) {
    throw new Error('MONGO_URI não está definida no .env')
  }

  try {
    await mongoose.connect(uri)
    console.log('MongoDB conectado com sucesso')
  } catch (error) {
    console.error('Erro ao conectar no MongoDB:', error)
    process.exit(1)
  }
}
