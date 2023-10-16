const inquirer = require('inquirer')
const {department, employee,roles} = require('./models')
// const employee = {}
const temparry = []
const temparry2 =[]
const temparry3 =[]
async function viewdept(){
    
    const depts = await department.findAll({
        raw: true,
        
    })
    console.table(depts) 
    
    mainmenu()
}
async function viewemployee(){
    const emps = await employee.findAll({
        raw: true
    })
    // console.log()
    console.table(emps)
    mainmenu()
}
async function mkdept(){
    const {name} = await inquirer.prompt({
        name: 'name',
        message: "add a department name"
    })
    console.log(name)
    await department.create({name})

    mainmenu()
}
async function mkrle(){
    const {title,salary} = await inquirer.prompt([{
        name: 'title',
        message: "add a department name"
    },{
        name: 'salary',
        message:"add salary"
    },{
        name:'department',
        message:'choose a department',
        type: 'list',
        choices: temparry2
    }])
    console.log(title)
    await roles.create({title,salary})

    mainmenu()
}
async function mkemp(dp){
    const rle = await roles.findAll({})
    rle.forEach((rle,x) => {
        temparry[x] = rle.title 
        // console.log(rle.title)
    });
    const mangr = await employee.findAll({
        where: {
            role:'manager'
        }
    })
    
    mangr.forEach((mangr,x)=>{
        temparry3[x] = mangr.first_name +' '+ mangr.last_name;
    })
    console.log(temparry3[0])
    let {first_name,last_name,manager,role,department} = await inquirer.prompt([{
        name: 'first_name',
        message: "add the first name of employee"
    },{
        name: 'last_name',
        message:"add the last name of employee"
    },{
        name:'manager',
        message: 'choose manger for employee',
        type: 'list',
        choices: temparry3 
    },
    {
        name:'role',
        message: 'add the role',
        type: 'list',
        choices: temparry
    }])
    const find = await roles.findAll({
        where:{
            title: role
        }
    })
    if (role === 'manager'){
        manager = ''
    }
    console.log(find[0].salary)
    department = find[0].department
    const salary = find[0].salary
    await employee.create({first_name,last_name,manager,role,salary,department})

    mainmenu()
}
async function viewroles(){
    const rls = await roles.findAll({
        raw:true
    })
    console.table(rls)
    mainmenu()
}
async function rleup(){
    const rle = await roles.findAll({})
    rle.forEach((rle,x) => {
        temparry[x] = rle.title 
        // console.log(rle.title)
    });
    const empnm = await employee.findAll({})
    empnm.forEach((empnm,x) => {
        temparry2[x] = empnm.first_name 
        // console.log(empnm.first_name)
    });
    const {names, role} = await inquirer.prompt([{
        name: 'names',
        message: 'chose name of employee you wish to update',
        type: 'list',
        choices:temparry2
    },{
        name: 'role',
        message: 'choose the role you would like to change to',
        type: 'list',
        choices: temparry
    }])
    console.log(role)
    console.log(names)
    const find = await roles.findAll({
        where:{
            title: role
        }
    })
    const salary = find[0].salary
    employee.update({
        role: role,
        salary: salary
    },{where:{
        first_name: names
    }})
    mainmenu()
}

function mainmenu(){
    inquirer.prompt({
        name: 'menu',
        message:' welcome choose an option below',
        type: 'list',
        choices:['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role','done']
    }).then((e)=>{

        switch(e.menu){
            case 'view all departments':
                viewdept()
                break;
            case 'view all roles':
                viewroles()
                break;
            case 'view all employees':
                viewemployee()
                break;
            case 'add a department':
                mkdept()
                break;
            case 'add a role':
                async function employ(){
                 const dp = await department.findAll({})
                 dp.forEach((dp,x)=>{
                 temparry2[x] = dp.name;
                 })
                 employ()
                mkrle()
                }
                break;
            case 'add an employee':
                mkemp()
                break;
            case 'update an employee role':
                rleup()
                break;
            case 'done':
            break;

        }
    })

}




mainmenu()