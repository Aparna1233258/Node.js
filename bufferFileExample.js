const fs = require("fs");
const path = require("path");

const buffer1 = Buffer.from("Node.js buffers are powerful");

buffer1.write("FAST ");

const buffer2 = Buffer.from(" and flexible!");

const finalBuffer = Buffer.concat([buffer1, buffer2]);

const finalText = finalBuffer.toString();

const filePath = path.join(__dirname, "buffer_output.txt");

fs.writeFile(filePath, finalText, (err) => {

    if (err) {
        console.log("Error writing file");
        return;
    }

    console.log("File saved successfully");

    // Log full file path
    console.log("Full File Path:");
    console.log(filePath);
});