const express = require('express')
const Sights = require('../models/Sights')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json(await Sights.find().catch(next))
})

module.exports = router
