const express = require('express')
const router = express.Router()
const controller = require('../controller/jogosCampeonatoController')

router.post('/jogos', controller.registerGame)
router.get('/jogos', controller.getAllGames)
router.put('/jogos/:id', controller.updateGame)
// router.delete('/jogos/:id', controller.deleteGame)

module.exports = router