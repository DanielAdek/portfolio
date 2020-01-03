const nodemailer = require('nodemailer');
const ses = require('nodemailer-ses-transport');
const { config } = require('dotenv');

config();

const transport = nodemailer.createTransport(
  ses({
    region: process.env.region,
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
  })
);

exports.Sender = async (options) => {
  const mailOptions = {
    from: `${options.name} <maildaniel.me1@gmail.com>`,
    to: 'maildaniel.me1@gmail.com',
    subject: `${options.name || options.from}: Job Invitation`,
    html: ``,
    text: `${options.message}. From: ${options.from}`
  };

  return transport.sendMail(mailOptions);
};
