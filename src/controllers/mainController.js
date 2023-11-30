const db = require('../database/models');


const controller = {
    login:(req, res)=>{
        res.render('login')
    },
    carrito:(req, res)=>{
        res.render('productCart')
    },
}

module.exports = controller