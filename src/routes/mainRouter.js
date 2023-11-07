const express = require('express')
const controller = require('../controllers/mainController')
const productsController = require('../controllers/productsController')
const router = express.Router()


router.get('/', controller.index)
router.get('/login', controller.login)
router.get('/productCart', controller.carrito)
router.get('/products', productsController.products)
router.get('/productDetail/:id', productsController.productDetail)
router.get('/register', controller.register)


router.get('/productRegister', productsController.productRegister)
router.post('/productCreate', productsController.create)

module.exports = router