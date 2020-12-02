const donaciones = require('../components/donaciones/donaciones.controller');
const router = require('express').Router();


router.get('/', donaciones.getDonaciones);
router.get('/:id', donaciones.getDonacionesById);
router.post('/', donaciones.createDonaciones);

module.exports = router;