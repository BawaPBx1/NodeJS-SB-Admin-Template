const express = require('express');
const router = express.Router();
const chartsController = require('../controllers/Charts');

router.get('/charts', chartsController.index);
// router.get('/index', indexController.index);

module.exports = router;