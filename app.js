var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var usuariosRouter = require ('./routes/usuarios.routes')
var publicacionesRouter = require('./routes/publicaciones.routes')

var app = express();


//Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Rutas
app.use('/usuarios',usuariosRouter);
app.use('/publicaciones', publicacionesRouter);

module.exports = app;
