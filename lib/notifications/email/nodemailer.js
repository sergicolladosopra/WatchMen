var nodemailer = require("nodemailer");

module.exports.sendEmail = function (nodemailerConfig, email, callback) {

  var transports = [];

  if (nodemailerConfig.smtp.enabled) {
    var smtpTransport = require('nodemailer-smtp-transport');
    transports.push(nodemailer.createTransport(smtpTransport(nodemailerConfig.smtp)));
  }

  if (nodemailerConfig.ses.enabled) {
    var ses = require('nodemailer-ses-transport');
    transports.push(nodemailer.createTransport(ses(nodemailerConfig.ses)));
  }

  transports.forEach(function(transport) {
    transport.sendMail(email, callback);
  });
};