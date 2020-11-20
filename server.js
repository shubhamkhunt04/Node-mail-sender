require("dotenv").config();
const nodemailer = require("nodemailer");

// Step 1
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Step 2
let mailOptions = {
  from: "shubhamkhunt12@gmail.com",
  to: "shubhamkhunt34@gmail.com",
  subject: "Hello World",
  text: "Mood enhancer",
};

// Step 3

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    console.log("Error ", err);
  } else {
    console.log("Send Email !!", data);
  }
});
