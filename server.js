const express = require('express')
const setupMongo = require('./setupMongo')
require('dotenv').config()
const { PORT = 4000 } = process.env

setupMongo()
const app = express()

app.use(express.json()) // add middleware for json data

app.use('/api/sights', require('./routes/sights'))
app.use(require('./routes/error'))

app.listen(PORT, () => {
  console.log(`Server listen at http://localhost:${PORT}`)
})
