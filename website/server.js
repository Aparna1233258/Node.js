const http = require("http");
const fs = require("fs");
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("pageLoaded", (pageName) => {
    console.log(`${pageName} page was viewed`);
});

const server = http.createServer((req, res) => {

    let fileName = "";

    if (req.url === "/home") {
        fileName = "home.html";
    }

    else if (req.url === "/services") {
        fileName = "services.html";
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
        return;
    }

    fs.readFile(fileName, (err, data) => {

        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Page not found");
        }

        else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);

            eventEmitter.emit("pageLoaded", fileName);
        }
    });
});

server.listen(8080, () => {
    console.log("Server running at http://localhost:8080");
});