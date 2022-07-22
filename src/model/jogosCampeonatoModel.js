const mongoose = require('mongoose')

const jogosCampeonatoSchema = new mongoose.Schema({
    jogoNumero: {type: Number},
    paisContra: {type: String},
    fase: {type: String},
    placar: {type: String},
    localJogo: {type: String},
    dataCalendario: {type: String},
    diaSemana: {type: String},
    horario: {type: String}
},
{
    versionKey: false
})

const jogosCampeonato = mongoose.model('jogosCampeonato', jogosCampeonatoSchema)

module.exports = jogosCampeonato