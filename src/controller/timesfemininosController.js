const TimesfemininosModel = require('../model/timesfemininosModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const teamCreate = async (req, res) => {
    try{
        const authHeader = req.get('authorization')

        if(!authHeader){
            return res.status(401).send('É necesssário um token')
        }
            const token = authHeader.split(' ')[1]

            await jwt.verify(token, SECRET, async function (erro){
                if (erro){
                    return res.status(403).send('Você não está autorizado')
                }
                const {nome, cidade, estado, redesocial, contato, modalidades} = req.body
                const newTeam = new TimesfemininosModel({
                    nome, cidade, estado, redesocial, contato, modalidades
                })
                const savedTeam = await newTeam.save()
        
                res.status(201).json(savedTeam)
            })
    } catch (error){
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const findAllTeams = async (req, res) => {
    try{
        const allTeams = await TimesfemininosModel.find()
        res.status(200).json(allTeams)

    } catch (error){
        console.error(error)
        res.status(500).json({ message: error.message})
    }
}

module.exports = {
    teamCreate,
    findAllTeams
}