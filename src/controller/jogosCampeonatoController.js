const JogosCampeonatoModel = require('../model/jogosCampeonatoModel')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const registerGame = async(req, res) => {
    try{
        const authHeader = req.get('authorization')
        if(!authHeader){
            return res.status(401).send('É necessário um Token')
        }

        const token = authHeader.split(' ')[1]

        await jwt.verify(token, SECRET, async function(erro){
            if(erro){
                return res.status(403).send('Token inválido')
            }
            const {jogoNumero, paisContra, fase, placar, localJogo, dataCalendario, diaSemana, horario} = req.body
            const newGame = new JogosCampeonatoModel({
            jogoNumero, paisContra, fase, placar, localJogo, dataCalendario, diaSemana, horario
            })
            const savedGame = await newGame.save()

            res.status(201).json(savedGame)
        })        
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

const updateGame = async(req, res) => {
    try{
        const authHeader = req.get('authorization')
        if(!authHeader){
            return res.status(401).send('É necessário um token')
        }
            const token = authHeader.split(' ')[1]

            await jwt.verify(token,SECRET, async function(erro){
                if(erro){
                    return res.status(403).send('Token inválido')
                }
                const {jogoNumero, paisContra, fase, placar, localJogo, dataCalendario, diaSemana, horario} = req.body
                const updatedGame = await JogosCampeonatoModel.findByIdAndUpdate(req.params.id, {jogoNumero, paisContra, fase, placar, localJogo, dataCalendario, diaSemana, horario
                })
                res.status(200).json(updatedGame)
            })
    } catch (erro){
        console.error(erro)
        res.status(500).json({message: error.message})
    }
}

const deleteGame = async(req, res) => {
    try{
        const authHeader = req.get('authorization')
        if(!authHeader){
            return res.status(401).send('É necessário um token')
        }
            const token = authHeader.split(' ')[1]

            await jwt.verify(token, SECRET, async function(erro){
                if(erro){
                    return res.status(403).send('Token inválido')
                }
                    const {id} = req.params
                    await JogosCampeonatoModel.findByIdAndDelete(id)
                    res.status(200).json({message: `O jogo com o id ${id} deletado`})
            })
    } catch (erro){
        console.error(erro)
        res.status(500).json({message: error.message})
    }
}

module.exports =  {
    registerGame,
    getAllGames,
    updateGame,
    deleteGame
}