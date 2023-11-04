const mysql = require('mysql2');

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
            viewEmloyees()
            break;

            case "View All Departments":
            viewDepartments()
            break;

            case "New Employees":
            newEmloyees()
            break;

            case "New Role":
            newRole()
            break;

            case "Update Employee Role":
            updateEmloyees()
            break;

            default:
            connection.end()
            break;

         }
    }
})};
// connection.query('SELECT * FROM employee', (error, results, fields) => {
//     if (error) {
//       console.error(error);
//       return;
//     }});

function viewEmloyees() {
    connection.query("SELECT * FROM employee",
    function (err, data) {
        if (err) throw err
        console.table(data)
        showQuestions();
    })
}
