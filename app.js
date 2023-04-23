
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
var path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "/index.html")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post("/send_email", function (req, res) {
    var from = req.body.from;
    var to = req.body.to;
    var subject = req.body.subject;
    var message = req.body.message;
    // Create a transporter with your email account details
    let transporter = nodemailer.createTransport({
      service: 'gmail',
        auth: {
            user: "priyanshuranjan232@gmail.com",
            pass: "ryznumecnicybdqx",
        }
    });

    // Setup email data
    var mailOptions = {
        from: 'priyanshuranjan232@gmail.com', // Replace with your email
        to: to,
        subject: subject,
        text: message,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            
        } else {
            console.log('Email sent:', info.response);
            
        }
        res.redirect('/'); // Redirect to main page after sending email
    });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
