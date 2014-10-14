
/**
 * General configuration
 */

var secondsPerDay = 60 * 60 * 24;

module.exports = {
  remove_events_older_than_seconds : secondsPerDay * 10, // how old service events are kept. This can be overriden on per service basis (hosts.js)
};