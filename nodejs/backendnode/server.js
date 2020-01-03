const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://db_user_platzi:UkJfyEw18fy6iDpS@cluster0-ywwfb.mongodb.net/platzi');

app.use(bodyParser.json());

socket.connect(server);

router(app);

app.use('/app', express.static('public'));

server.listen(3000, function(){
    console.log('La aplicación está escuchando en http://localhost:3000');
});
