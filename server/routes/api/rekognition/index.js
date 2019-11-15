const express = require('express')
const router = express.Router()

router.use('/rekognition', require('./rekognition'))

module.exports = router