var express = require('express')
var router = express.Router();
var categorias = require('../models/categorias');

router.get('/', function (req, res) {
    categorias.find().then(result => {
        // console.log(result)
        res.send(result);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
})

router.get('/:id', function (req, res) {
    // console.log(req.params.id)
    categorias.find({
        _id: req.params.id
    }).then(result => {
        // console.log(result)
        res.send(result);
        res.end()
    }).catch(error => {
        res.send(error);
        res.end()
    })
})

module.exports = router;