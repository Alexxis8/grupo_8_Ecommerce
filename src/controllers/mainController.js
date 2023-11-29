const db = require('../database/models');


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
}

module.exports = controller