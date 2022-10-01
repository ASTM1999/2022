var nodemailer = require('nodemailer');
var mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-gmail-password'
    }
  });
  