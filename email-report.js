'use strict';

const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'rocket.asoshared.com',
  port: 465,
  secure: true,
  auth: {
    user: 'test_reporter@karoliskrulis.com',
    pass: 'Ep4-2JCsaUs3'
  }
});

// setup email 
var mailOptions = {
  from: 'test_reporter@karoliskrulis.com', // sender address
  to: 'karoliskrulis@gmail.com', // list of receivers <<<<< change this email to your own!
  subject: 'test results', // Subject line
  text: 'See attached reports: ', // plain text body
  attachments: [
    {
      path: 'output/reports/report.json'
    }
  ]
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message %s sent: %s', info.messageId, info.response);
});