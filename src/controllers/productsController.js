const db = require('../database/models');



const productsController = {
    'products': async (req, res)=>{
        db.Product.findAll(/* para un panel de administracion {paranoid: false}*/)
        .then(products =>{
            res.render('products.ejs', {products})
        })
    },
    'productDetail': async (req, res)=>{
        db.Product.findByPk(req.params.id/* para panel de admin ,{paranoid: false}*/)
        .then(product =>{
            res.render('productDetail.ejs', {product})
        })
    },



    productRegister:(req, res)=>{
        res.render('productRegister')
    },
    create: async function (req, res) {
        const productCreated = await db.Product.create({
            cilindrada: req.body.cc,
            modelo: req.body.name,
            precio: req.body.cost,
            imagen: req.body.image,
            descripcion: req.body.description,
            color: req.body.colors,
            marca: req.body.brand,
        })
        console.log(productCreated);
        res.redirect('/products')
    },
    edit: async function (req, res) {
        const productFound = await db.Product.findByPk(req.params.id)
        res.render('productEdit',{Product:productFound})
    },
    update: async function (req, res) {
        const productEdited = await db.Product.update({
            cilindrada: req.body.cc,
            modelo: req.body.name,
            precio: req.body.cost,
            imagen: req.body.image,
            descripcion: req.body.description,
            color: req.body.colors,
            marca: req.body.brand,
        }, {where:{
            id: req.params.id,}})
            console.log(productEdited);
            res.redirect('/products')
    },
    delete: async function (req, res) {
        const productDeleted = await db.Product.findByPk(req.params.id)
        res.render('productDelete',{Product:productDeleted})
    },
    destroy: async function (req, res) {
        const productDestroyed =  await db.Product.destroy({where:{
            id: req.params.id} })
            console.log(productDestroyed);
            res.redirect('/products')
    },
    restore: async function (req, res) {
        const productRestored =  await db.Product.restore({where:{
            id: req.params.id} })
            console.log(productRestored);
            res.redirect('/products')
    },
}

module.exports = productsController 