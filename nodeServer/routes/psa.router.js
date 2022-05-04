var express = require('express');
var router = express.Router();
const psaController = require('../controllers/psa.controller');

router.get('/getpsas', psaController.getAllPSAs);
router.post('/addpsa', psaController.addPsa);
router.get('/markinactive/:num', psaController.markPSAinactive);

module.exports = router;