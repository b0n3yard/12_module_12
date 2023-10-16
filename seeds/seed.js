const sequelize = require('../db/connections')
const { department, employee, roles } = require('../models')

const employeeseed = require('./empseed.json')
const deptseed = require('./deptseed.json')
const roleseed = require('./roleseed.json')

const employeedb = async () => {



    // const employees = await employee.bulkCreate(employeeseed,{
    //     individualHooks: true,
    //     returning: true
    // })


    for (const departments of deptseed) {
        const nwdept = await department.create({
            ...departments,
        })
    }
    for (const role of roleseed) {
        const nwrole = await roles.create({
            ...role,
        })
        // console.table(nwrole)
    }
    // for (const emps of employeeseed){
    //     const nwdept = await employee.create({
    //         ...emps,
    //     })

    // }
    employeedb2();
    // process.exit(0);
}
const employeedb2 = async () => {
    for (const emps of employeeseed) {
        const nwdept = await employee.create({
            ...emps,
        })
        console.log(emps)
    }
    // const depts = await department.findAll({
    //     raw: true
    // })
    //   console.log(depts)
    // const emps = await employee.findAll({
    //     raw: true
    // })
    //   console.log(emps)
      process.exit(0);
}

sequelize.sync({ force: true }).then(employeedb)
