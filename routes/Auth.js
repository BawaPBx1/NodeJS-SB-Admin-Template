const express = require('express')
const app = express()

const authController = require('../controllers/Auth')

const router = express.Router()

// router.get('/auth', (req, res)=>{
//     res.send('This is auth route!')
// })
router.get('/auth', authController.index)
router.get('/login', authController.login)

module.exports = router