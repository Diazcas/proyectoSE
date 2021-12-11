var express = require('express');
var router = express.Router();
var ordenes = require('../models/ordenes')

//Traer las ordenes
router.get('/', function (req, res) {
    ordenes.find().then((result) => {
        res.send(result);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
})

//Traer las ordenes disponibles
router.get('/disponible', function (req, res) {
    ordenes.find({ driverId: null }).then((result) => {
        // console.log(result);
        res.send(result);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
})

//Traer las ordenes en seguimiento
router.get('/seguimiento/:id', function (req, res) {
    ordenes.find({ driverId: req.params.id}).then((result) => {
        console.log(result)
        var filter = [];
        for(let i = 0; i < result.length; i++){
            if(result[i].estado < 3){
                filter.push(result[i])
            }
        }
        console.log("--------------------------------------")
        console.log(filter)
        res.send(filter);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
})

//Traer las ordenes en finalizadas
router.get('/finalizadas/:id', function (req, res) {
    ordenes.find({ driverId: req.params.id, estado: 3 }).then((result) => {
        var filter = [];
        for(let i = 0; i < result.length; i++){
            if(result[i].estado == 3){
                filter.push(result[i])
            }
        }
        res.send(filter);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
})

//elimnar orden por Id
router.get('/eliminar/:id', function (req, res) {
    ordenes.findOneAndRemove({ _id: req.params.id}).then((result) => {
        res.send(result);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
})

//guardar una nueva Orden

router.post('/', function (req, res) {
    let orden = new ordenes({
        clienteId: req.body.clienteId,
        clienteNombre: req.body.clienteNombre,
        driverId: req.body.driverId,
        driverNombre: req.body.driverNombre,
        estado: req.body.estado,
        direccion: req.body.direccion,
        totalOrden: req.body.totalOrden,
        costes: req.body.costes,
        productos: req.body.productos,
        pago: req.body.pago
    })

    // console.log(orden);

    orden.save().then(result => {
        res.send(result);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
});

//Actualizar la orden
router.put('/:id', function (req, res) {
    // console.log(req.params.id)
    ordenes.update(
        {
            _id: req.params.id
        },
        {
            clienteId: req.body.clienteId,
            clienteNombre: req.body.clienteNombre,
            driverId: req.body.driverId,
            driverNombre: req.body.driverNombre,
            estado: req.body.estado,
            direccion: req.body.direccion,
            totalOrden: req.body.totalOrden,
            costes: req.body.costes,
            productos: req.body.productos
        }).then(result => {
            res.send(result);
            res.end()
        }).catch(error => {
            res.send(error);
            res.end()
        })
})

module.exports = router