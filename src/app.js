require('dotenv').config()
const express = require('express')
const mongoose = require('./database/mongooseConect')
const colaboradorasRoutes = require('./routes/colaboradorasRoutes')
//const flagfemininoRoutes = require('./routes/flagfemininoRoutes')

const app = express()

app.use(express.json())

mongoose.connect()

app.use(colaboradorasRoutes)
// app.use(flagfemininoRoutes)

module.exports = app