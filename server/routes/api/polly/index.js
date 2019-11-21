const express = require('express')
const router = express.Router()

router.use('/polly', require('./polly'))

module.exports = router
