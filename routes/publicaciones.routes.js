const publicaciones = require("../controllers/publicaciones.controller");

const express = require ("express");

const router = express.Router();


//rutas de publicaciones

router.get("/", publicaciones.getPublicaciones);




module.exports = router;
