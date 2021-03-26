const express = require('express')
const Sight = require('../models/Sight')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json(await Sight.find().catch(next))
})

module.exports = router
