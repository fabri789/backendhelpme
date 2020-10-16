const organizaciones = require("../components/organizaciones/organizaciones.controller");

const express = require ("express");

const router = express.Router();

//rutas de organizaciones

router.get("/", organizaciones.getOrganizaciones);

router.get("/:id/", organizaciones.getOrganizacionesById);

router.delete("/:id", organizaciones.deleteOrganizacionById);

router.post("/", organizaciones.createOrganizacion);

router.put("/", organizaciones.updateOrganizacion);

module.exports = router;