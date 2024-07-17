const express = require('express');
const router = express.Router();
const registerController = require('../controllers/Register');

router.get('/register', registerController.index);
router.post('/register', registerController.register);
// router.get('/index', indexController.index);

module.exports = router;