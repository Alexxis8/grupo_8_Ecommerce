const express = require('express')
const controller = require('../controllers/mainController')
const router = express.Router()


router.get('/', controller.index)
router.get('/login', controller.login)
router.get('/productCart', controller.carrito)
router.get('/productDetail', controller.detalle)
router.get('/register', controller.register)

module.exports = router