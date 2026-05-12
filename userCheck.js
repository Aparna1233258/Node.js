const fs = require("fs");

fs.writeFile("user.txt", "Welcome John", (err) => {
    if (err) {
        console.log("Error creating file");
        return;
    }

    console.log("File created successfully");

    fs.readFile("user.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file");
            return;
        }

        console.log("File Content:", data);

        function checkUser(text) {
            if (text.includes("John")) {
                console.log("Valid User");
            } else {
                console.log("Unknown User");
            }
        }

        checkUser(data);
    });
});