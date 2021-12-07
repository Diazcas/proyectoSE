const mongoose = require('mongoose')

var esquema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    tel: String
})

module.exports = mongoose.model('clientes', esquema)