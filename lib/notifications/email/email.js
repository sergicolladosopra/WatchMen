var postmark = require ('./postmark');
var nodemailer = require("./nodemailer");
var notificationsConfig = require ('../../../config/notifications');

module.exports.sendEmail = function (to_list, subject, body, callback){

  function errHandler(err, info){
    if (err) {
      console.error (err);
      if (callback) callback (err, null);
    } else {
      //console.log(info);
      if (callback) callback (null, 'Email sent successfully to ' + to_list.join(','));
    }
  }


  if (notificationsConfig.postmark.enabled) {
    console.log("sending email via postmark", subject, body);
    var email = {
        'From' : notificationsConfig.from,
        'To': to_list.join(','),
        'Subject': subject,
        'TextBody': body
    };
    postmark.sendEmail(email, notificationsConfig.postmark.api_key, errHandler);
  }

  if (notificationsConfig.nodemailer.enabled) {
    console.log("sending email via nodemailer", subject, body);
    var email = {
      from : notificationsConfig.from,
      to : to_list.join(','),
      subject : subject,
      text : body
    };
    nodemailer.sendEmail(notificationsConfig.nodemailer, email, errHandler);
  }

};
