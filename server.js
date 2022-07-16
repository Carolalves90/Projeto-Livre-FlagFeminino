const app = require('./src/app')

const PORT = process.env.PORT || 2305

app.listen(PORT, () => {
    console.log(`Servidor conectado na porta ${PORT}`)
})