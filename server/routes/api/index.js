const express = require('express')
const router = express.Router()

router.use('/polly', require('./polly/index'))
router.use('/reko', require('./reko/index'))

module.exports = router