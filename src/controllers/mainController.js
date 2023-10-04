const productsList = [
    {
        id:1,
        name: 'Yamaha',
        subtitle: 'FZX',
        description: 'Quisque nec accumsan eros. Nulla mattis gravida ex a iaculis. Quisque non odio diam. Ut nec urna ut ex rutrum lacinia quis sit amet urna. Lorem ipsum dolor sit amet',
        category: 'Moto',
        color: 'Azul',
        cost: '20.000',
        img: '2023_YC150_MDPBM1_IND_01 YAMAHA FZX BLU 360 00003.jpg'
    },
    {
        id:2,
        name: 'Yamaha',
        subtitle: 'MT03',
        description: 'Quisque nec accumsan eros. Nulla mattis gravida ex a iaculis. Quisque non odio diam. Ut nec urna ut ex rutrum lacinia quis sit amet urna. Lorem ipsum dolor sit amet',
        category: 'Moto',
        color: 'Blanco',
        cost: '25.000',
        img: '2022_MTN320_PGD_EUR_360_001_03.jpeg'
    },
    {
        id:3,
        name: '',
        description: '',
        category: '',
        color: '',
        cost: '',
        img: ''
    },
    {
        id:4,
        name: '',
        description: '',
        category: '',
        color: '',
        cost: '',
        img: ''
    },
    {
        id:5,
        name: '',
        description: '',
        category: '',
        color: '',
        cost: '',
        img: ''
    },
    {
        id:6,
        name: '',
        description: '',
        category: '',
        color: '',
        cost: '',
        img: ''
    },
    {
        id:7,
        name: '',
        description: '',
        category: '',
        color: '',
        cost: '',
        img: ''
    },
    {
        id:8,
        name: '',
        description: '',
        category: '',
        color: '',
        cost: '',
        img: ''
    },
]

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
    products:(req, res)=>{
        res.render('products', {list: productsList})
    },
    detalle:(req, res)=>{
        let productFound = productsList.find((product)=> product.id == req.params.id)
        res.render('productDetail', {product: productFound})
    },
    register:(req, res)=>{
        res.render('register')
    },
    productRegister:(req, res)=>{
        res.render('productRegister')
    }
}

module.exports = controller