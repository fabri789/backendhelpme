const usuarios = require ("../components/usuarios/usuario.controller");

const express = require ("express");

const router = express.Router();



// rutas de usuaruios
router.get( "/",usuarios.getUsuarios );

router.get( "/:id/", usuarios.getUsuariosById );

router.delete( "/:id", usuarios.deleteUsuarioById) ;

router.post( "/", usuarios.createUsuario );

router.put( "/",usuarios.updateUsuario );


module.exports = router;
