const {Model, DataTypes} = require('sequelize')
const db = require('../db/connections')
const roles  = require('./role')

class employee extends Model{}

employee.init({
    first_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    manager: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.STRING,
        references:{
            model: 'roles',
            key:'title'
        }
    },
    salary:{
        type: DataTypes.INTEGER,
        references:{
            model: 'roles',
            key:'salary'
        }
    },
    department:{
        type: DataTypes.STRING,
        references:{
            model: 'departments',
            key:'name'
        }
    }
},{
    modelname: 'employee',
    sequelize: db,
    timestamps:false,
})

module.exports = employee;