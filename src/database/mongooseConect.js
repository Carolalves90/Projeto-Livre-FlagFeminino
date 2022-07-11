const MONGOOSE_URI = process.env.MONGOOSE_URI
const mongoose = require('mongoose')

const connect = async() => {
    try {
      await mongoose.connect(MONGOOSE_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true
      })
 
      console.log('Banco conectado! ')
    } catch (error) {
     console.error(error)
    }
}
 
 module.exports = {
   connect
}