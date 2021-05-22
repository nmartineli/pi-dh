var express = require('express');
var router = express.Router();

const controller = require('../controllers/DocenteController');

router.get('/', controller.index);
router.get('/limit', controller.limit);
router.get('/:nome', controller.searchName);

module.exports = router;
