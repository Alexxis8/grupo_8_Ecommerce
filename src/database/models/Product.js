module.exports = (sequelize, dataTypes)=>{
    let alias = 'Product'
    let cols = {}
    let config = {
        tableName: 'productos',
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config)

    return Product
}