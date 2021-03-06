const express = require('express')
const nodemailer = require('nodemailer');
const router = express.Router()
require('dotenv').config();

router.post('/', (req, res) => {
       
    const user = req.body
    console.log(user)
    res.json({message: "Submitted Successfully!!!!", user})

    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.number}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

    // Step 1
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {  
            user: process.env.EMAIL || 'abc@gmail.com', // TODO: your gmail account
            pass: process.env.PASSWORD || 'app specific password' // TODO: your gmail password
        }
    });

    // Step 2
    let mailOptions = {   
        from: 'kunalguatam1371@gmail.com', // TODO: email sender
        to: 'kunal.1822it1077@kiet.edu', // TODO: email receiver
        subject: 'Nodemailer - Test',
        text: "Hello World",
        html: output    
    };

    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return console.log('Error occurs ' + err);
        }
        return console.log('Email sent!!!');
    });
})

module.exports = router;