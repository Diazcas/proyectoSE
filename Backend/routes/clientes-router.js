var express = require('express')
var router = express.Router();
var clientes = require('../models/clientes');

router.get('/', function (req, res) {
    clientes.find().then(result => {
        // console.log(result)
        res.send(result);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
})

//crear cliente
router.post('/', function (req, res) {
    let u = new clientes({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password,
        tel: req.body.tel,
    })

    u.save().then(result => {
        res.send(result);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
});

router.get('/:id', function (req, res) {
    // console.log(req.params.id)
    clientes.find({
        _id: req.params.id
    }).then(result => {
        // console.log(result)
        res.send(result[0]);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
})

router.put('/:id', function (req, res) {
    console.log(req.params.id)
    console.log(req.body.nombre)
    clientes.update(
        {
            _id: req.params.id
        },
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: req.body.password,
            tel: req.body.tel,
        }).then(result => {
            res.send(result);
            res.end()
        }).catch(error => {
            res.send(error);
            res.end()
        })
})

module.exports = router;