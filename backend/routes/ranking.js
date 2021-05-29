const express = require('express');
const router = express.Router();

const controller = require('../controllers/RankingController');

router.get('/:id', controller.index);

module.exports = router;
