const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const students = [
    { id: 1, name: "rajesh" },
    { id: 2, name: "rahul" },
    { id: 3, name: "sruthi" }
];
rl.question("Enter student ID: ", function(num) {
    let found = false;
    for (let i = 0; i < students.length; i++) {
        if (students[i].id == num) {
            console.log("Student Name: " + students[i].name);
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("Student not found");
    }
    rl.close();
});



//Without using loop
rl.question("Enter student ID: ", function(num) {

    const student = students.find(s => s.id == num);

    if (student) {
        console.log("Student Name: " + student.name);
    } else {
        console.log("Student not found");
    }

    rl.close();
});