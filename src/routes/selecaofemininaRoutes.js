const express = require('express')
const router = express.Router()
const controller = require('../controller/selecaofemininaController')

router.post('/selecao', controller.createInfo)
router.patch('/selecao/:id', controller.registerGame)
router.get('/selecao', controller.getAll)
router.get('/selecao/:id', controller.findInfoById)
router.put('/selecao/:id', controller.updateInfo)
router.delete('/selecao/:id', controller.deleteInfo)



module.exports = router