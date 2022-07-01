var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'smtp.outlook.com',
    secure: false,
    debug: true,
    secureConnection: false,
    port: 587,
    auth: {
        user: 'myemail@outlook.com',
        pass: 'pass'
    },
    tls: {
        rejectUnauthorized: true,
    }
});

var mailOptions = {
    from: 'myemail@outlook.com',
    to: 'myemail@outlook.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Email sent: ' + info.response);
    }
});