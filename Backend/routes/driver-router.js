var express = require('express');
var router = express.Router();
const { addProducto } = require('../controllers/productoCont');
const upload = require('../libs/storage');
var driver = require('../models/driver')

//crear usuario
router.post('/', function (req, res) {
    let u = new driver({
        pNombre: req.body.pNombre,
        sNombre: req.body.sNombre,
        pApellido: req.body.pApellido,
        sApellido: req.body.sApellido,
        correo: req.body.email,
        password: req.body.password,
        tel: req.body.tel,
        estado: req.body.estado
    })

    u.save().then(result => {
        res.send(result);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
});

//guardar una foto
router.post('/productos', upload.single('image'), addProducto)

//Obtener un usuario
router.get('/:id', function (req, res) {
    // console.log(req)
    driver.find({ _id: req.params.id }).then(result => {
        res.send(result[0]);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
})

//Obtener todos los drivers
router.get('/', function (req, res) {
    // console.log('correcto')
    driver.find().then(result => {
        res.send(result);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
})

//Actualizar un usuarios
router.put('/:id', function (req, res) {
    driver.update(
        {
            _id: req.params.id
        },
        {
            pNombre: req.body.pNombre,
            sNombre: req.body.sNombre,
            pApellido: req.body.pApellido,
            sApellido: req.body.sApellido,
            correo: req.body.correo,
            password: req.body.password,
            tel: req.body.tel,
            estado: req.body.estado
        }).then(result => {
            res.send(result);
            res.end()
        }).catch(error => {
            res.send(error);
            res.end()
        })
})

//elimnar orden por Id
router.get('/eliminar/:id', function (req, res) {
    driver.findOneAndRemove({ _id: req.params.id}).then((result) => {
        console.log('error')
        res.send(result);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
})


module.exports = router