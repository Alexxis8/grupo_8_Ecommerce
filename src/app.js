const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/mainRouter')


app.use(express.static('public'));
app.listen(process.env.PORT || 3000, function() {console.log("Servidor corriendo");})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(mainRouter)

app.get('/', (req,res)=> {
        res.sendFile(path.join(__dirname,'/views/index.html'))
} )
app.get('/login', (req,res)=> {
        res.sendFile(path.join(__dirname,'/views/login.html'))
} )
app.get('/register', (req,res)=> {
        res.sendFile(path.join(__dirname,'/views/register.html'))
} )
app.get('/productDetail', (req,res)=> {
        res.sendFile(path.join(__dirname,'/views/productDetail.html'))
} )
app.get('/productCart', (req,res)=> {
        res.sendFile(path.join(__dirname,'/views/productCart.html'))
} )