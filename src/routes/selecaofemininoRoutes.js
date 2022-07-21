const express = require('express')
const router = express.Router()
const controller = require('../controller/selecaofemininoController')

router.post('/selecao', controller.createInfo)
router.get('/selecao', controller.getAll)
router.put('/selecao/:id', controller.updateInfo)
router.delete('/selecao/:id', controller.deleteInfo)



module.exports = router