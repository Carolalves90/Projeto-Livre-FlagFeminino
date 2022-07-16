const app = require('./src/app.js')
const { resolve } = require('path')
const express = require('express')
const PORT = process.env.PORT

app.use('/',
    express.static(
        resolve(
            __dirname,
            './build'
        )
    )
)

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index'));
})

app.listen(PORT, () => {
    console.log(`Servidor conectado na porta ${PORT}`)
})