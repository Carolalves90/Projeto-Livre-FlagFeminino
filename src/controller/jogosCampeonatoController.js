const JogosCampeonatoModel = require('../model/jogosCampeonatoModel')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const registerGame = async(req, res) => {
    try{
        const {jogoNumero, paisContra, fase, placar, localJogo, dataCalendario, diaSemana, horario} = req.body
        const newGame = new JogosCampeonatoModel({
            jogoNumero, paisContra, fase, placar, localJogo, dataCalendario, diaSemana, horario
        })
        const savedGame = await newGame.save()

        res.status(201).json(savedGame)
    } catch (erro) {
        console.error(erro)
        res.status(500).json({message: error.message})
    }
}

const getAllGames = async(req, res) => {
    try{
        const AllGames = await JogosCampeonatoModel.find()
        res.status(200).json(AllGames)

    } catch (erro) {
        console.error(erro)
        res.status(500).json({message: error.message})
    }
}

module.exports =  {
    registerGame,
    getAllGames
}