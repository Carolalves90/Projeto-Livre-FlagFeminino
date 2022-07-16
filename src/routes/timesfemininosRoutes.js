const express = require('express')
const router = express.Router()
const controller = require('../controller/timesfemininosController')

router.post('/timesfemininos', controller.teamCreate)
router.get('/timesfemininos', controller.findAllTeams)
router.put('/timesfemininos/:id', controller.updateTeam)
router.delete('/timesfemininos/:id', controller.deleteTeam)

module.exports = router