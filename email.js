var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8169061a195a73",
    pass: "6e8cef4ea1cc8d"
  }
});
var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'yourfriend@yahoo.com',
  subject: 'How to send Email using NodeJS',
  text: 'This is very easy!'
};
transport.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});