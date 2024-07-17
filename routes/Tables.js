const express = require('express');
const router = express.Router();
const tablesController = require('../controllers/Tables');

router.get('/tables', tablesController.index);
// router.get('/index', indexController.index);

module.exports = router;