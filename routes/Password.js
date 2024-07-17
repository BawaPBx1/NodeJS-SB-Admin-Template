const express = require('express');
const router = express.Router();
const passwordController = require('../controllers/Password');

router.get('/password', passwordController.index);
// router.get('/index', indexController.index);

module.exports = router;