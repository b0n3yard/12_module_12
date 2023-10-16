const {Model, DataTypes} = require('sequelize')
const db = require('../db/connections')

class department extends Model{}

department.init({
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    indexes:[{fields: ["name"]}],
    modelname: 'department',
    sequelize: db,
    timestamps:false
})

module.exports = department;