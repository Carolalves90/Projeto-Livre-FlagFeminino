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

module.exports = {
    create,
    getAll,
    deleteById
}