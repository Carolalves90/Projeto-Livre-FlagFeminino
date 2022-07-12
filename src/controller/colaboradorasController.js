const ColaboradorasModel = require('../model/colaboradorasModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const create = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
    req.body.senha = senhaComHash

    const colaboradora = new ColaboradorasModel(req.body)
    colaboradora.save(function(err){
        if(err){
            res.status(500).send({message: err.message})
        }
        res.status(201).send(colaboradora.toJSON)
    })
}

const getAll = (req, res) => {
    ColaboradorasModel.find(function (err, colaboradoras){
        if(err){
            res.status(500).send({message: err.message})
        }
        res.status(200).send(colaboradoras)
    })
}

const deleteById = async (req, res) => {
    try{
        const { id } = req.params
        await ColaboradorasModel.findByIdAndDelete(id)
        res.status(200).json({message: `A colaboradora com o ${id} foi deletada com sucesso`})
    } catch (err) {
        console.error(err)
        res.status(500).json({message: err.message})
    }
}

const login = (req, res) => {
    ColaboradorasModel.findOne({email: req.body.email}, function (err, colaboradora) {
        if(!colaboradora) {
            return res.status(404).send(`Não existe colaboradora com o email ${req.body.email}`)
        }
        const senhaValida = bcrypt.compareSync(req.body.senha, colaboradora.senha)

        if(!senhaValida){
            return res.status(403).send('Senha Inválida')
        }
        const token = jwt.sign({email: req.body.email}, SECRET)
        res.status(200).send(token)
    })
}

module.exports = {
    create,
    getAll,
    deleteById,
    login
}