const publicaciones = require("../controllers/publicaciones.controller");

const express = require ("express");

const router = express.Router();


//rutas de publicaciones

router.get("/", publicaciones.getPublicaciones);

router.get("/:id/", publicaciones.getPublicacionByID);

router.get("/:id",publicaciones.deletePublicacionById );



module.exports = router;
