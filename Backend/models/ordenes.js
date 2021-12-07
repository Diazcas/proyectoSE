const { json } = require('body-parser');
var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    clienteId: String,
    clienteNombre: String,
    driverId: String,
    driverNombre: String,
    estado: Number,
    direccion: JSON,
    totalOrden: Number,
    costes: JSON,
    productos: JSON
});

module.exports = mongoose.model('ordenes', esquema)