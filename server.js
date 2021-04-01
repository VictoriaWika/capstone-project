const express = require('express')
const path = require('path')
const setupMongo = require('./setupMongo')
require('dotenv').config()
const { PORT = 4000 } = process.env

const app = express()
setupMongo()

app.use(express.json())
app.use(express.static('./client/build'))
app.use('/api/sights', require('./routes/sights'))
app.use('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
)
app.use(require('./routes/error'))

app.listen(PORT, () => {
  console.log(`Server listen at http://localhost:${PORT}`)
})
