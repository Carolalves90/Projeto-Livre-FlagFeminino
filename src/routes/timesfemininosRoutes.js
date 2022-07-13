const express = require('express')
const router = express.Router
const controller = require('../controller/timesfemininosController')

router.get('/timesfemininos', controller.teamCreate)

module.exports = router