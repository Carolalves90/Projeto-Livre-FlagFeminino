const mongoose = require('mongoose')

const timesfemininosSchema = new mongoose.Schema({
    nome: {type: String},
    cidade: {type: String},
    estado: {type: String},
    redesocial: {type: String},
    contato: {type: String},
    modalidades: {type: String}
},
{
    versionKey: false
})

const timesfemininos = mongoose.model('timesfemininos', timesfemininosSchema)

module.exports =  timesfemininos