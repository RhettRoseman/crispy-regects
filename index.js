const mysql = require('mysql2');
const { type } = require('os');

const inquirer = import('inquirer');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "employeeDB"

});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected as ID#' + connection.threadId + "\n")
})


function showQuestions() {
    inquirer.prompt({
        message: 'Welcome, look at your directories below:',
        type: "list",
        name: "userChoice",
        choices: [
            "View All Employees",
            "View All Departments",
            "New Employees",
            "New Department",
            "New Role",
            "Update Employee Role",
        ]
    }).then( answers => {
    console.log(answer.choice); {
    // handle prompt answer choices  
        switch (answers.choice) {
            case "View All Employees":
            viewEmployees()
            break;

            case "View All Departments":
            viewDepartments()
            break;

            case "New Employees":
            newEmployees()
            break;

            case "New Role":
            newRole()
            break;

            case "Update Employee Role":
            updateEmployees()
            break;

            default:
            connection.end()
            break;

         }
    }
})};
// connection.query('SELECT * FROM employee', 
//     if (error) {
//       console.error(error);
//       return;
//     }});
 function addDepartment() {
    inquirer.prompt([{
        type: "imput",
        name:  "department",
        message: "What is the Department you would like to add?"     
},
]).then(function(res) {
    connection.query('INSERT INTO department (name) VALUES (?)', [res.department_id],
   function(err,data){
    if (err) throw err;
    console.table(data);
    askQuestions();
   })
})}

function addRole() {
    inquirer.prompt([
        {
            message: "Enter Title:",
            type: "input",
            name: "title"
        }, {
            message: "Enter Salary:",
            type: "number",
            name: "salary",
        }, {
            message: "Enter Department ID:",
            type: "number",
            name: "department_id"
        },
 ]).then(function (response) {
    connection.query('INSERT INTO roles(title, salary, department_id) values (?, ?, ?)', ) [res.title, res.salary, res.department_id],
   function(err,data){
    if (err) throw err;
    console.table(data);
   }
 })
}
