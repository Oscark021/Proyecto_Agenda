//Importamos la libreria de Mongoose
const mongoose = require ('mongoose')

//De esctructuramos la clase/propiedad de Mongoose (1 de muchas)
const {Schema} = mongoose

//Creamos un objeto de tipo schema y definimos su tipo de dato
const contactSchema = new Schema({
    name:String,
    lastname:String,
    phone:String,
    desc:String
})

//Exportamos la sentencia envuelto en un modelo de manera global
module.exports = mongoose.model('Contact', contactSchema)