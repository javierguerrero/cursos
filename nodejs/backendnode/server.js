const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://db_user_platzi:UkJfyEw18fy6iDpS@cluster0-ywwfb.mongodb.net/platzi');

var app = express();
app.use(bodyParser.json());
router(app);
app.use('/app', express.static('public'));
app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');