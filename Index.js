//Importamos la libreria de express mediante una sentencia
const express = require ('express')
const mongoose = require ('mongoose')

//Importamos los modelos de la BD
const Contact = require ('./models/contact')

//Importamos las rutas
const contactRoutes = require ('./routes/contacts')

// Instanciamos express en una variable
const server = express()

// Indicamos a todo el servidor que todos los metodos se usan en general
server.use(express.json())
server.use('/contact', contactRoutes)

async function start (){
    await mongoose.connect('mongodb+srv://oscark021:metallica110401@cluster0.h7kbmw6.mongodb.net/Agenda')
    server.listen(3000)
}

start()