const express = require('express')
const router = express.Router()
const controller = require('../controller/selecaofemininoController')

router.post('/selecao', controller.createInfo)
// router.get('/selecao', controller.)
// router.put('/selecao', controller.)
// router.delete('/selecao', controller.)



module.exports = router