const db = require('../database/models');


const userController ={
    register:(req, res)=>{
        res.render('register')
    },
    create: async function(req,res){
        const userCreated = await db.User.create({
            nombre: req.body.name,
            apellido: req.body.surname,
            dni: req.body.dni,
            email: req.body.email,
            clave: req.body.clave,
        })
        console.log(userCreated);
    },

}

module.exports = userController