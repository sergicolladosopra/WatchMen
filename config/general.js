
/**
 * General configuration
 */

module.exports = {
  notifications : require('./notifications'),
  remove_events_older_than_seconds : 60 * 60 * 24 * 10, // 10 days default configuration
};
