
/**
 * Notifications configuration
 */

module.exports = {

    enabled: true, // if disabled, no notifications will be sent

    to: ['youremail@email.com'], //default notification list if no alert_to is specified for host or url
    from: 'status@email.com',

    postmark : {
      enabled: false,
      api_key : 'your-postmark-key-here'
    },

    nodemailer: { // see https://github.com/andris9/Nodemailer

      enabled: true,

      smtp: {

        enabled: true,

        service: "Gmail",
        auth: {
          user: "user@gmail.com",
          pass: "password"
        }
      },

      ses: { // AWS SES config

        enabled: true,

        accessKeyId: "XX",
        secretAccessKey: "YY"
      }
    }
};
