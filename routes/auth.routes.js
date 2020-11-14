const auth = require('../components/auth');
const express = require('express')
const router = express.Router();

router.post('/registro', auth.registrarse);
router.post('/ingreso', auth.ingresar);

module.exports = router;