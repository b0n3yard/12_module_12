const inquirer = require('inquirer')
const employee = {}

function viewdept(){

}


function mainmenu(){
    inquirer.prompt({
        name: 'menu',
        message:' welcome choose an option below',
        type: 'list',
        choices:['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }).then((e)=>{

        switch(e.menu){
            case 'view all departments':
                break;
            case 'view all roles':
                break;
            case 'view all employees':
                break;
            case 'add a department':
                break;
            case 'add a role':
                break;
            case 'add an employee':
                break;
            case 'update an employee role':
                break;

        }
    })

}




mainmenu()