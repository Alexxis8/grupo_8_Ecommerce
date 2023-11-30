const express = require('express')
const multer = require('multer')
const path = require('path')
const controller = require('../controllers/mainController')
const productsController = require('../controllers/productsController')
const userController = require('../controllers/userController')
const router = express.Router()


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/motos/modelos'))
    },
    filename: (req, file, cb) => {
        console.log(file)
        const newFileName = 'models-' + Date.now() + path.extname(file.originalname)
        cb(null, newFileName)
    }
})



router.get('/', controller.index)
router.get('/login', controller.login)
router.get('/productCart', controller.carrito)
router.get('/products', productsController.products)
router.get('/productDetail/:id', productsController.productDetail)


//PARA USUARIOS
router.get('/register', userController.register)
router.get('/user', userController.user)
router.post('/userCreate', userController.create)

//PARA PRODUCTOS//
router.get('/productRegister', productsController.productRegister)
router.post('/create', productsController.create)
router.get('/edit/:id', productsController.edit)
router.post('/update/:id', productsController.update)
router.get('/delete/:id', productsController.delete)
router.post('/delete/:id', productsController.destroy)
router.get('/restore/:id', productsController.restore)

module.exports = router