const controller = {
    index:(req, res)=>{
        res.render('index')
    },
    login:(req, res)=>{
        res.render('login')
    },
    carrito:(req, res)=>{
        res.render('productCart')
    },
    detalle:(req, res)=>{
        res.render('productDetail')
    },
    register:(req, res)=>{
        res.render('register')
    }
}

module.exports = controller