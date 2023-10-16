const {Model, DataTypes} = require('sequelize')
const db = require('../db/connections')

class roles extends Model{}

roles.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salary:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    department:{
        type: DataTypes.STRING,
        references:{
            model: 'departments',
            key:'name'
        }
    }
},
{
    indexes:[{fields: ["title"]},{fields:["salary"]}],
    modelname: 'roles',
    sequelize: db,
    timestamps:false
})

module.exports = roles;