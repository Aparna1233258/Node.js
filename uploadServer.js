const http = require("http");
const fs = require("fs");
const formidable = require("formidable");
const nodemailer = require("nodemailer");

http.createServer((req, res) => {

    if (req.url === "/") {

        res.writeHead(200, { "Content-Type": "text/html" });

        res.write(`
            <form action="/upload" method="post" enctype="multipart/form-data">
                <input type="file" name="myfile"><br><br>
                <input type="submit" value="Upload File">
            </form>
        `);

        res.end();
    }

    else if (req.url === "/upload" && req.method === "POST") {

        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {

            const oldPath = files.myfile[0].filepath;
            const newPath = "./Uploads/" + files.myfile[0].originalFilename;

            fs.rename(oldPath, newPath, (err) => {

                if (err) {
                    res.end("File upload failed");
                    return;
                }

                var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8169061a195a73",
    pass: "6e8cef4ea1cc8d"
  }
});

                const mailOptions = {
                    from: "yourgmail@gmail.com",
                    to: "friend@gmail.com",
                    subject: "File Upload Notification",
                    text: "A file was uploaded successfully."
                };

                transporter.sendMail(mailOptions, (error, info) => {

                    if (error) {
                        res.end("File uploaded but email failed");
                    }

                    else {
                        res.writeHead(200, { "Content-Type": "text/html" });
                        res.end("File uploaded and email sent successfully!");
                    }
                });
            });
        });
    }

}).listen(8080);

console.log("Server running at http://localhost:8080");