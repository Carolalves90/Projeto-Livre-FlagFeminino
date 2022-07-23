const SelecaofemininaModel = require('../model/selecaofemininaModel')
const JogosCampeonatoModel = require('../model/jogosCampeonatoModel')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const createInfo = async(req, res) => {
    try{
        const authHeader = req.get('authorization')

        if(!authHeader) {
            return res.status(401).send('É necessário um Token')
        }
            const token = authHeader.split(' ')[1]

            await jwt.verify(token, SECRET, async function(error){
                if(error){
                    return res.status(403).send('Token inválido')
                }
                const {campeonato, local, ano, colocacaoFinal, chavePaises, treinadores, atletasRelacionadas, jogosCampeonato} = req.body
                const newInfo = new SelecaofemininaModel({
                    campeonato, local, ano, colocacaoFinal, chavePaises, treinadores, atletasRelacionadas, jogosCampeonato
                })
                const savedInfo = await newInfo.save()

                res.status(201).json(savedInfo)
            })
    }catch (error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

const getAll = async (req, res) => {
    try{
        const allInfo = await SelecaofemininaModel.find().populate('jogosCampeonato')
        res.status(200).json(allInfo)

    }catch (error){
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const updateInfo = async ( req, res) => {
    try{
        const authHeader = req.get('authorization')

        if(!authHeader) {
            return res.status(401).send('É necessário um token')
        }
            const token = authHeader.split(' ')[1]

            await jwt.verify(token, SECRET, async function(erro){
                if(erro) {
                    return res.status(403).send('Token inválido')
                }
                const {campeonato, local, ano, colocacaoFinal, chavePaises, treinadores, headCoach, ataqueCoach, defesaCoach, auxiliares, atletasRelacionadas, 
                jogosCampeonato} = req.body
                
                const updatedInfo = await SelecaofemininaModel.findByIdAndUpdate(req.params.id, {
                    campeonato, local, ano, colocacaoFinal, chavePaises, treinadores, headCoach, ataqueCoach, defesaCoach, auxiliares, atletasRelacionadas, 
                    jogosCampeonato
                })
                res.status(200).json(updatedInfo)
            })
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const deleteInfo = async (req, res) => {
    try{
        const authHeader = req.get('authorization')

        if(!authHeader) {
            return res.status(401).send('É necessário um Token')    
        }
            const token = authHeader.split(' ')[1]
            await jwt.verify(token, SECRET, async function(erro){
                if(erro) {
                    return res.status(403).send('Token inválido')
                }
                const { id } = req.params
                await SelecaofemininaModel.findByIdAndDelete(id)
                res.status(200).json({message: `Informação de Campeonato com o id ${id} deletado com sucesso`})
            })    
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const findInfoById = async (req, res) => {
    try {
        const findInfo = await SelecaofemininaModel.findById(req.params.id)
        res.status(200).json(findInfo)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const registerGame = async (req, res) => {
    try{
        const authHeader = req.get('authorization')
        if(!authHeader){
            return res.status(401).send('É necessário um Token')
        }

        const token = authHeader.split(' ')[1]

        await jwt.verify(token, SECRET, async function (erro){
            if(erro){
                return res.status(403).send('Token inválido')
            }
                const idRequest = req.params.id
                const findCampeonato = await SelecaofemininaModel.findById(idRequest)

                if(findCampeonato == null){
                    return res.status(404).json({message: 'Informação de Campeonato não encontrado'})
                }

                const idRequestGame = req.body.id
                const findGame = await JogosCampeonatoModel.findById(idRequestGame)

                findCampeonato.jogosCampeonato.push(findGame)
                

                const savedGame = await findCampeonato.save()

                res.status(201).json(savedGame)
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    createInfo,
    getAll,
    updateInfo,
    deleteInfo,
    findInfoById,
    registerGame
}