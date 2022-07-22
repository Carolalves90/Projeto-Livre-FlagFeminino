const mongoose = require('mongoose')

const selecaoSchema = new mongoose.Schema({
    campeonato: {type: String},
    local: {type: String},
    ano: {type: Number},
    colocacaoFinal: {type: String},
    chavePaises: {type: [String]},
    treinadores: {type: [String]},
    atletasRelacionadas: {type: [String]},
    jogosCampeonato:[
        {type: mongoose.Schema.Types.ObjectId,
        ref: 'jogosCampeonato' }
    ]
},{
    versionKey: false
})

const selecaofeminina = mongoose.model('selecaofeminina', selecaoSchema)

module.exports = selecaofeminina