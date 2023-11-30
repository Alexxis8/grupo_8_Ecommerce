const db = require('../database/models');


const userController ={
    user:(req, res) =>{
        db.User.findByPk(req.params.id/* para panel de admin ,{paranoid: false}*/)
        .then(user =>{
            res.render('user.ejs', {user})
        })
    },
    register: async (req, res)=>{
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
        res.redirect('/user')
    },

}

module.exports = userController