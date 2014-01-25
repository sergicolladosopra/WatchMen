var postmark = require ('./postmark');
var nodemailer = require("nodemailer");
var config = require ('../../../config/general');

exports.sendEmail = function (to_list, subject, body, callback){
  console.log("sending e-mail");
  if (config.notifications.postmark) {
    console.log("sending postmark")
    postmark.sendEmail({
      'From' : config.notifications.from,
      'To': to_list.join(','),
      'Subject': subject,
      'TextBody': body }, config.notifications.postmark.api_key, function(err, data) {
        if (err) {
          console.error (err);
          if (callback) callback (err, null);
        } else {
          if (callback) callback (null,'Email sent successfully to ' + to_list.join(','));
        }
      });
  }

  if (config.notifications.nodemailer) {
    console.log("sending nodemailer email");
    var transports = [];
    if (config.notifications.nodemailer.smtp) {
      transports.push(nodemailer.createTransport("SMTP", config.notifications.nodemailer.smtp));
    }
    if (config.notifications.nodemailer.ses) {
      transports.push(nodemailer.createTransport("SES", config.notifications.nodemailer.ses));
    }

    transports.forEach(function(transport) {
      transport.sendMail({
        from : config.notifications.from,
        to : to_list.join(','),
        subject : subject,
        text : body
      }, function(err, response) {
        if (err) {
          console.error (err);
          if (callback) callback (err, null);
        } else {
          if (callback) callback (null,'Email sent successfully to ' + to_list.join(','));
        }
      });
    });
  }
};
