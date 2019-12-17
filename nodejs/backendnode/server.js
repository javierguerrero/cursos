const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(router);

router.get('/message', function(req, res){
    console.log(req.headers);
    res.header({
        "Custom-header": "Nuetro valor personalizado"
    });
    response.success(req, res, 'Lista de mensajes');
});

router.post('/message', function(req, res){
    console.log(req.query);
    console.log(req.body);

    if(req.query.error == "ok"){
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulación de los errores')
    } else {
        response.success(req, res, 'Añadido correctamente', 201)
    }
});

router.post('/demo', function(req, res){
    res.status(201).send({error:'', body:'Creado correctamente'});
});


app.use('/app', express.static('public'));


app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');