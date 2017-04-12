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

// setup email data with unicode symbols
var mailOptions = {
  from: 'test_reporter@karoliskrulis.com', // sender address
  to: 'kkruliux@gmail.com', // list of receivers
  subject: 'test results', // Subject line
  text: 'See attached:', // plain text body
  attachments: [

    { // use URL as an attachment
      filename: 'logs.txt',
      path: './outputFile.json'
    }

  ]
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message %s sent: %s', info.messageId, info.response);
});