const express = require('express')
const router = express.Router()
const controller = require('../controller/timesfemininosController')

router.post('/timesfemininos', controller.teamCreate)
router.get('/timesfemininos', controller.findAllTeams)

module.exports = router