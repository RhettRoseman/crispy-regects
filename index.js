
const inquirer = require('inquirer');
const mysql = require('mysql2');
// const { type } = require('os');


var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    database: "employees_db",
    password: "",



}
);

connection.connect(function (err) {
    if (err) {
        throw err;
    } else { showQuestions() }
}
)


function showQuestions() {
    inquirer.prompt({
        message: 'Welcome, look at your directories below:',
        type: "list",
        name: "userChoice",
        choices: [
            "View All Employees",
            // "View Departments",
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

                // case "View AllDepartments":
                //     viewDepartments()
                //     break;

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
    }
    )
};

function viewEmployees() {
    connection.query("SELECT * FROM employees", function (err, data) {
        if (err) throw err;
        console.table(data);
    }
    );
}


function newEmployees() {
    inquirer.prompt([
        {
            message: "Employees first name:",
            type: "input",
            name: "first_name",
        },
        {
            message: "Employee last name:",
            type: "input",
            name: "last_name",
        },
        {
            message: "Employee email:",
            type: "input",
            name:"email",
        
        },
        {
            message: "Employee department:",
            type: "list",
            name:"department",
            choices : [
                "Engineering",
                "Marketing",
                "Sales",
            ],
        },
        {
            message: "Employee position:",
            type: "list",
            name:"position",
            choices: [
                "Software Engineer",
                "Junior Engineer",
                "Product Manager",
                "Marketing Specialist",
                "Sales Representitive",
                "Sales Manager",
                
            ],
        },
        {
            message: "Employee Salary:",
            type: "list",
            name:"salary",
            choices: [
                50000,
                60000,
                65000,
                70000,
                75000,
                80000,
                85000,
                90000,
                100000,
            ],
        },


    ]).then(function (res) {
        connection.query("INSERT INTO employees (first_name, last_name, email, department, position, salary) VALUES (?, ?, ?, ?, ?, ?)",
        [res.first_name, res.last_name, res.email, res.department, res.position, res.salary],
            function (err, data) {
                if (err) throw err;
                console.table(data);

                showQuestions()

            }  
        )
        }
    )
}
       
  
function newRole() {
    inquirer.prompt([
        {
            message: "Enter Department:",
            type: "list",
            name: "title",
            choices : [
                "Engineering",
                "Marketing",
                "Sales",
            ],
        }, 
        {
            message: "Enter position:",
            type: "list",
            name: "position",
            choices: [
                "Software Engineer",
                "Junior Engineer",
                "Product Manager",
                "Marketing Specialist",
                "Sales Representitive",
                "Sales Manager",
                
            ],
        },
        {
            message:"Enter Salary",
            type: "list",
            name: "salary",
            choices: [
                50000,
                60000,
                65000,
                70000,
                75000,
                80000,
                85000,
                90000,
                100000,
            ],
        },
    ]).then(function (res) {
        connection.query('INSERT INTO employees (department, position, salary) VALUES (?, ?, ?)', [res.department, res.position, res.salary],
            function (err, data) {
                if (err) throw err;
                console.table(data);

                showQuestions()

            }  
        )
        }
    ),
function updateEmployees() {
    inquirer.prompt([
        {
            message: "Employee email:",
            type: "input",
            name:"email",
        },
        {
            message: "Employee department:",
            type: "list",
            name:"department",
            choices : [
                "Engineering",
                "Marketing",
                "Sales",
            ],
        },
        {
            message: "Employee position:",
            type: "list",
            name:"position",
            choices: [
                "Software Engineer",
                "Junior Engineer",
                "Product Manager",
                "Marketing Specialist",
                "Sales Representitive",
                "Sales Manager",
                
            ],
        },
        {
            message: "Employee Salary:",
            type: "list",
            name:"salary",
            choices: [
                50000,
                60000,
                65000,
                70000,
                75000,
                80000,
                85000,
                90000,
                100000,
            ],
        },


    ]).then(function (res) {
        connection.query("UPDATE employees SET department = ?, position = ?, salary = ? WHERE email = ?",
            function (err, data) {
                if (err) throw err;
                console.table(data);

                showQuestions()

            }  
        )
        }
    )
}
}

    