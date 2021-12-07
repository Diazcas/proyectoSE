const express = require('express')
var router = express.Router();
var productos = require('../models/producto')

router.get('/:idEmpresa', function (req, res){
    // console.log(req.params.idEmpresa)
    productos.find({
        empresaId: req.params.idEmpresa
    }).then((result) => {
        // console.log(result)
        res.send(result);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
})

router.get('/', function (req, res){
    productos.find().then((result) => {
        res.send(result);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
})

module.exports = router