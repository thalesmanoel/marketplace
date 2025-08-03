import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API funcionando!')
})

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/meubanco')
  .then(() => {
    console.log('MongoDB conectado')
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error('Erro ao conectar no MongoDB:', err)
  })
