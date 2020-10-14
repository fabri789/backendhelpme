const publicaciones = require("../controllers/publicaciones.controller");

const express = require ("express");

const router = express.Router();


//rutas de publicaciones

router.get("/", publicaciones.getPublicaciones);

router.get("/:id/", publicaciones.getPublicacionByID);

router.delete("/:id",publicaciones.deletePublicacionById );

router.post("/",publicaciones.createPublicacion);



module.exports = router;
