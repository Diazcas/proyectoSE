const express = require('express')
var router = express.Router();
var empresas = require('../models/empresas')

//Traer todas las empresas
router.get('/', function (req, res) {
    empresas.find().then((result) => {
        res.send(result);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
})

//Traer las empresas de una categoria
router.get('/:idCategoria', function (req, res) {
    // console.log(req.params.idCategoria)
    empresas.find({
        categoriaId: req.params.idCategoria,
    }).then((result) => {
        // console.log(result)
        res.send(result);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
})

router.get('/nombre/:nombreCategoria', function (req, res) {
    empresas.find({
        nombreCategoria: req.params.nombreCategoria,
    }).then((result) => {
        // console.log(result)
        res.send(result);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
})

//Traer una empresa por su id
router.get('/empresaId/:idEmpresa', function (req, res) {
    // console.log(req.params.idCategoria)
    empresas.find({
        _id: req.params.idEmpresa,
    }).then((result) => {
        console.log(result)
        res.send(result[0]);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
})

module.exports = router