const express = require('express')
const router = express.Router()

router.use('/', require('./reko'))

module.exports = router