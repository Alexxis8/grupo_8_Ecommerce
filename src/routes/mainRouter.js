const express = require('express')
const controller = require('../controllers/mainController')
const router = express.Router()


router.get('/', controller.index)
router.get('/login', controller.login)
router.get('/productCart', controller.carrito)
router.get('/products', controller.products)
router.get('/productDetail/:id', controller.detalle)
router.get('/register', controller.register)
router.get('/productRegister', controller.productRegister)

module.exports = router