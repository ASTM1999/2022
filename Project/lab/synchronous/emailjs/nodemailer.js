const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
let PORT = process.env.PORT || 3000;


let transporter = nodemailer.createTransport({
    serviec: "gmail",
    auth: {
        user: "AnusornSriprom@gmail.com",
        pass: "ToTotbuttas122790814530252!",
    },
    tls: {
        rejectUnauthorized: false,
    },
})

let mailOptions = {
    from: "AnusornSriprom@gmail.com",
    to: "llltotolll2018@gmail.com",
    subject: "Testing",
    text: "First email sent from Nodejs using Nodemailer",
}

transporter.sendMail(mailOptions, function(err, success){
    if(err){
        console.log(err)
    } else {
        console.log('Email sent successfully')
    }
}) 
