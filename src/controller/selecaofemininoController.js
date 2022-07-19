const SelecaofemininaModel = require('../model/selecaofemininaModel')
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
                const {campeonato, local, ano, colocacaoFinal, chavePaises, treinadores, headCoach, ataqueCoach, defesaCoach, auxiliares, atletasRelacionadas, 
                    jogosCampeonato, jogoNumero, paisContra, fase,placar, localJogo, dataCalendario, diaSemana, horario} = req.body
                const newInfo = new SelecaofemininaModel({
                    campeonato, local, ano, colocacaoFinal, chavePaises, treinadores, headCoach, ataqueCoach, defesaCoach, auxiliares, atletasRelacionadas, 
                    jogosCampeonato, jogoNumero, paisContra, fase,placar, localJogo, dataCalendario, diaSemana, horario
                })
                const savedInfo = await newInfo.save()

                res.status(201).json(savedInfo)
            })
    }catch (error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

module.exports ={
    createInfo
}