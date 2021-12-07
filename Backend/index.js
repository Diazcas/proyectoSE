var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var driverRouter = require('./routes/driver-router')
var categoriasRouter = require('./routes/categorias-router')
var productosRouter = require('./routes/productos-router')
var empresasRouter = require('./routes/empresa-router')
var ordenesRouter = require('./routes/ordenes-router')
var clientesRouter = require('./routes/clientes-router')
var adminRouter = require('./routes/admin-router')
var database = require('./modules/database')

var app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/empresas', empresasRouter)
app.use('/productos', productosRouter)
app.use('/categorias', categoriasRouter)
app.use('/driver', driverRouter);
app.use('/ordenes', ordenesRouter);
app.use('/clientes', clientesRouter);
app.use('/admin', adminRouter);
app.use('/public', express.static(`${__dirname}/assets/img`))


app.get('/', function(req, res){
    res.send('Servidor backend en linea')
})

app.listen(8888, function(){
    console.log('Servidor levantado en 8888')
})