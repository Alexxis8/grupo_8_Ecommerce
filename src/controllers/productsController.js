const db = require('../database/models');


const productsController = {
    products: async (req, res)=>{
        let productos = await db.Product.findAll()
        res.render('products', {list: productos})
    },
    productDetail: async (req, res)=>{
        let productos = await db.Product.findByPk(req.params.id)
        res.render('productDetail', {product: productos})
    },



    productRegister:(req, res)=>{
        res.render('productRegister')
    },
    create: async function (req, res) {
        const productCreated = await db.Product.create({
            name: req.body.modelo
        })
    }
}

module.exports = productsController 