var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    empresaId: String,
    empresaNombre: String,
    imgUrl: String,
    nombre: String,
    detalle: String,
    precio: Number
});

esquema.methods.setImgUrl = function setImgUrl(filename){
    this.imgUrl = `cluster0.fnuga.mongodb.net/public/${filename}`
}

module.exports = mongoose.model('productos', esquema)