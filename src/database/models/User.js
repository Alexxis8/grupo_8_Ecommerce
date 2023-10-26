module.exports = (sequelize, dataTypes)=>{
    let alias = 'User'
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING(255)
        },
        apellido:{
            type: dataTypes.STRING(255)
        },
    }
    let config = {
        tableName: 'usuarios',
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config)

    return User
}