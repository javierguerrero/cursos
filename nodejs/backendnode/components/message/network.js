const express = require('express');
const router = express.Router();
const response = require('../../network/response');

router.get('/', function(req, res){
    console.log(req.headers);
    res.header({
        "Custom-header": "Nuetro valor personalizado"
    });
    response.success(req, res, 'Lista de mensajes');
});

router.post('/', function(req, res){
    console.log(req.query);
    console.log(req.body);

    if(req.query.error == "ok"){
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulación de los errores')
    } else {
        response.success(req, res, 'Añadido correctamente', 201)
    }
});


module.exports = router;