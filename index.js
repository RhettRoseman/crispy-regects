
const inquirer = require('inquirer');
const mysql = require('mysql2');
// const { type } = require('os');


var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    database: "employees_db",
    password: "",



});

connection.connect(function (err) {
    if (err) {
        throw err;
        // console.log('Connected as ID#' + connection.threadId + "\n")
    } else { showQuestions() }
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
        ],
    }).then(answers => {
        console.log(answers.userChoice); {
            // handle prompt answer choices  
            switch (answers.userChoice) {
                case "View All Employees":
                    viewEmployees()
                    break;

                case "View All Departments":
                    viewDepartments()
                    break;

                case "Add new Department":
                    addDepartment()
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
    })
};
// connection.query('SELECT * FROM employee', 
//     if (error) {
//       console.error(error);
//       return;
//     }});
function viewEmployees() {
    connection.query("SELECT * FROM employees", function (err, data) {
        if (err) throw err;
        console.table(data);
    });
}
function viewDepartments() {
    connection.query("SELECT * FROM departments")
    function viewEmployees() {
        connection.query('SELECT * FROM departments',
            function (err, data) {
                if (err) throw err;
                console.table(data);
            });
    }
};

// }function addDepartment() {
//     inquirer.prompt([{
//         type: "input",
//         name:  "department",
//         message: "What is the Department you would like to add?"     
// },
// ]).then(function(res) {
//     connection.query('INSERT INTO department (name) VALUES (?)', [res.department_id],
//    function(err,data){
//     if (err) throw err;
//     console.table(data);

//   }); 
//showQuestions();

// })}

function newEmployees() {
    inquirer.prompt([
        {
            message: "Employees first name:",
            type: "input",
            name: "firstname",
        },
        {
            message: "Employee last name:",
            type: "input",
            name: "lastname",
        },


    ]).then(function (res) {
        connection.query('INSERT INTO employees(first_name, last_name) VALUES (?,?)', [res.first_name, res.last_name],
            function (err, data) {
                if (err) throw err;
                console.table(data);

                showQuestions()

            }  
        );
      
    }
    )
};

function newRole() {
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
    ]).then(function (res) {
        connection.query('INSERT INTO employees(title, salary, department_id) values (?, ?, ?)',)[res.title, res.salary, res.department_id],
            function (err, data) {
                if (err) throw err;
                console.table(data);

            }; showQuestions();
    })
}
function updateEmployees() {
    inquirer.prompt([
        {
            message: "Which employee do you want to update: Use first name:",
            type: "input",
            name: " employees_id",
        },
        {
            message: "Enter the new role id:",
            type: "input",
            name: "role_id",
        },

    ]).then(function (res) {
        connection.query('INSERT INTO employees(employee_id, role_id) values (?, ?)',)[res.employee_id, res.role_id]
    }
    )
}