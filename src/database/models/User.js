module.exports = (sequelize, dataTypes)=>{
    let alias = 'User'
    let cols = {}
    let config = {
        tableName: 'usuarios',
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config)

    return User
}