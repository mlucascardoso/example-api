const expressLoader = require('./express');
const Logger = require('./logger');

module.exports = (app) => {
  expressLoader(app);
  Logger.info('✌️ Express loaded');
};
