const fs = require("fs");

fs.writeFile(
    "book.txt",
    "Books are a uniquely portable magic.",
    (err) => {

        if (err) {
            console.log("Error writing file");
            return;
        }

        console.log("Writing completed successfully");

        fs.readFile("book.txt", "utf8", (err, data) => {

            if (err) {
                console.log("Error reading file");
                return;
            }

            console.log("Reading completed successfully");
            console.log("File Content:");
            console.log(data);
        });
    }
);