const fs = require("fs");

const introStream = fs.createReadStream("intro.txt");
const conclusionStream = fs.createReadStream("conclusion.txt");

let introData = [];
let conclusionData = [];

introStream.on("data", (chunk) => {
    introData.push(chunk);
});

conclusionStream.on("data", (chunk) => {
    conclusionData.push(chunk);
});

introStream.on("end", () => {

    conclusionStream.on("end", () => {

        const fullContent = Buffer.concat([
            ...introData,
            Buffer.from("\n"),
            ...conclusionData
        ]);

        const writeStream =
            fs.createWriteStream("full_report.txt");

        writeStream.write(fullContent);

        writeStream.end();

        writeStream.on("finish", () => {
            console.log("Merging complete!");
        });
    });
});