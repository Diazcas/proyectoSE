var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    categoriaId: String,
    nombre: String,
    banner: String,
    logo: String,
    descripcion: String, 
    puntuacion: Number,
    nombreCategoria: String
});

esquema.methods.setImgUrl = function setImgUrl(filename){
    this.banner = `cluster0.fnuga.mongodb.net/public/${filename}`
}

module.exports = mongoose.model('empresas', esquema)