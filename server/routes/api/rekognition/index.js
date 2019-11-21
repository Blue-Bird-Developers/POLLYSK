const express = require('express')
const router = express.Router()

router.use('/', require('./rekognition'))

module.exports = router