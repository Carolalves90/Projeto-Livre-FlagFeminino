const mongoose = require('mongoose')

const selecaoSchema = new mongoose.Schema({
    campeonato: {type: String},
    local: {type: String},
    ano: {type: Number},
    colocacaoFinal: {type: String},
    chavePaises: [{type: String}],
    atletasRelacionadas: [{type: String}],
    jogosCampeonato:[{
        jogoNumero: {type: Number},
        paisContra: {type: String},
        fase: {type: String},
        placar: {type: String},
        local: {type: String},
        dataCalendario: {type: String},
        diaSemana: {type: String},
        horario: {type: String}
}]
},{
    versionKey: false
})

const selecaofeminina = mongoose.model('selecaofeminina', selecaoSchema)

module.exports = selecaofeminina