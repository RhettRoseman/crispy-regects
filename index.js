const mysql = require('mysql');

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
    }).then((answers) => {
        // Handle user's choice here
        switch (answers.userChoice) {
            case "View All Employees":
                // Do something for this choice
                break;
            case "View All Departments":
                // Do something for this choice
                break;
            // Add cases for other choices as needed
        }
    }).then( answers => {
    console.log(answer.choice); {
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