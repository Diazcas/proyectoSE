var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    pNombre: String,
    sNombre: String,
    pApellido: String,
    sApellido: String, 
    correo: String,
    password: String,
    tel: String,
    estado: Boolean
});

module.exports = mongoose.model('driver', esquema)