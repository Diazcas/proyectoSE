const producto = require('../models/producto')

async function addProducto(req, res) {
    try {
        const {
            nombre,
            detalle,
            precio
        } = req.body

        
        const product = producto({
            nombre,
            detalle,
            precio
        })
        
        if(req.file){
            const {filename} = req.file
            product.setImgUrl(filename)
        }

        const productStored = await product.save()

        res.status(201).send({ productStored })
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    addProducto
}