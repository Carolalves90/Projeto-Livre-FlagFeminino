require('dotenv').config()
const express = require('express')
const mongoose = require('./database/mongooseConect')
const index = require('./routes/index')
const timesfemininosRoutes = require('./routes/timesfemininosRoutes')
const colaboradorasRoutes = require('./routes/colaboradorasRoutes')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger/swagger_output.json')

const app = express()

app.use(express.json())

mongoose.connect()

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/', index)
app.use(colaboradorasRoutes)
app.use(timesfemininosRoutes)

module.exports = app