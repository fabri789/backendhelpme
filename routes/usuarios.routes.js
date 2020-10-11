const usuarios = require ("../controllers/usuario.controller");

const express = require ("express");

const router = express.Router();

router.get("/",usuarios.getUsuarios);

router.get("/:id/", usuarios.getUsuariosById);

router.delete("/:id", usuarios.deleteUsuarioById);

router.post("/", usuarios.createUsuario);


module.exports = router;
