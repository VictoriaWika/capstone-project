const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  location: {
    type: String,
  },
  continent: {
    type: String,
  },
})

module.exports = mongoose.model('Sight', schema)
