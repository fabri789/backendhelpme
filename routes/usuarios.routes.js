const usuarios = require ("../controllers/usuario.controller");

const express = require ("express");

const router = express.Router();

router.get("/",usuarios.getUsuarios);



module.exports = router;
