const TimesfemininosModel = require('../model/timesfemininosModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const teamCreate = async (req, res) => {
    try{
        const {nome, cidade, estado, redesocial, contato, modalidades} = req.body
        const newTeam = new TimesfemininosModel({
            nome, cidade, estado, redesocial, contato, modalidades
        })
        const savedTeam = await newTeam.save()
    
        res.status(201).json(savedTeam)
    } catch {

    }
}

module.exports = {
    teamCreate
}