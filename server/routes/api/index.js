const express = require('express')
const router = express.Router()

router.use('/polly', require('./polly'))
router.use('/rekognition', require('./rekognition'))

module.exports = router