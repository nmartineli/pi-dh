var express = require('express');
var router = express.Router();

const controller = require('../controllers/DocenteCursoController');

router.get('/:id', controller.index);

module.exports = router;
