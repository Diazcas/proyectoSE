var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    pNombre: String,
    sNombre: String,
    pApellido: String,
    sApellido: String, 
    email: String,
    password: String,
    tel: String
});

module.exports = mongoose.model('admins', esquema)