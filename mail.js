var express = require("express");
var http = require("http");
var path = require("path");
var nodemailer = require("nodemailer");

var app = express();
var server = http.Server(app);
var port = 500;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "Form/index.html")));

// Routing
app.get("/", function (req, res) {
  response.sendFile(path.join(__dirname, "Form/index.html"));
});

app.post("/send_email", function (req, response) {
  var from = req.body.from;
  var to = req.body.to;
  var subject = req.body.subject;
  var message = req.body.message;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "priyanshuranjan232@gmail.com",
      pass: "ryznumecnicybdqx",
    },
  });
  var mailOptions = {
    from: 'priyanshuranjan232@gmail.com',
    to: to,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email Send: " + info.response);
    }
    response.redirect("/");
  });
});

//initialize web server
server.listen(port, function () {
  console.log("Starting Server on the port: " + port);
});
