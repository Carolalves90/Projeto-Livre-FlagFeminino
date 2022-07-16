require('dotenv').config()
const express = require('express')
const mongoose = require('./database/mongooseConect')
const index = require('./routes/index')
const timesfemininosRoutes = require('./routes/timesfemininosRoutes')
const colaboradorasRoutes = require('./routes/colaboradorasRoutes')

const app = express()

app.use(express.json())

mongoose.connect()

app.use(index)
app.use(colaboradorasRoutes)
app.use(timesfemininosRoutes)

module.exports = app