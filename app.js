var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var usuariosRouter = require ('./routes/usuarios.routes');
var publicacionesRouter = require('./routes/publicaciones.routes');
var organizacionesRouter = require('./routes/organizaciones.routes');
var authRouter = require('./routes/auth.routes');
var donacionesRouter = require('./routes/donaciones.routes');

var cors = require('cors');

var app = express();


//Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


//Rutas
app.use('/usuarios',usuariosRouter);
app.use('/publicaciones', publicacionesRouter);
app.use('/organizaciones', organizacionesRouter);
app.use('/auth', authRouter);
app.use('/donaciones', donacionesRouter);

module.exports = app;
