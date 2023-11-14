module.exports = (sequelize, dataTypes)=>{
    let alias = 'Product'
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cilindrada:{
            type: dataTypes.DECIMAL(8,2)
        },
        modelo:{
            type: dataTypes.STRING(255)
        },
        estilo:{
            type: dataTypes.INTEGER
        },
        precio:{
            type: dataTypes.DECIMAL(8,2)
        },
        imagen:{
            type: dataTypes.STRING(255)
        },
        stock:{
            type: dataTypes.INTEGER
        },
        descripcion:{
            type: dataTypes.STRING(255)
        },
        color:{
            type: dataTypes.INTEGER
        },
        marca:{
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'productos',
        timestamps: true,
        paranoid: true,
        deletedAt: 'deleted_at',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    const Product = sequelize.define(alias, cols, config)

    return Product
}