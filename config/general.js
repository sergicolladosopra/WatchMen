module.exports = {
  'notifications' : {
    enabled: true, //if disabled, no notifications will be sent
    to: ['youremail@email.com'], //default notification list if no alert_to is specified for host or url
    from: 'status@email.com'
    , postmark : {
      api_key : 'your-postmark-key-here'
    }
    , nodemailer: { //See https://github.com/andris9/Nodemailer
      smtp: {
        service: "Gmail",
        auth: {
          user: "user@gmail.com",
          pass: "password"
        }
      }
      , ses: { //AWS SES config

      }
    }
  }
};
