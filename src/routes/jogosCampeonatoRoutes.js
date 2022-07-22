const express = require('express')
const router = express.Router()
const controller = require('../controller/jogosCampeonatoController')

router.post('/jogos', controller.registerGame)
router.get('/jogos', controller.getAllGames)

module.exports = router