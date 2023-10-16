// const { EmptyResultError } = require('sequelize')
const department = require('./dept')
const employee = require('./employee')
const roles  = require('./role')

// department.hasMany(employee);
// employee.belongsTo(department);
// roles.hasMany(employee);
// employee.belongsTo(roles)
// department.hasMany(employee,{
//     foreignKey: "id"

// })
// employee.belongsTo(department,{
//     foreignKey: "departments"
// })
// roles.hasMany(employee,{
//     foreignKey:"id"
// })
// employee.belongsTo(roles,{
//     foreignKey: "id"
// })
// console.log(employee.associations)

module.exports = { department, employee, roles}