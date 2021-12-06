var mongoose = require('mongoose');

//nombre BD
let bd = 'proyectoSE';
let host = 'cluster0.fnuga.mongodb.net';
let user =  'madmin'
let password = '12345'

class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        // mongoose.connect(`mongodb://${host}:${port}/${bd}`)
        mongoose.connect(`mongodb+srv://${user}:${password}@${host}/${bd}`)
        
        .then(res => console.log('Se conecto a mongoDb'))
        .catch(error => console.log(error, 'error'))
    }
}

module.exports = new Database();