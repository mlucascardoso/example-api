const dotenv = require('dotenv');

const env = dotenv.config();
if(!env) {
  throw new Error('️⚠️ ️️.env file not found ⚠️');
}

module.exports = {
  env: process.env.NODE_ENV || 'development',
  
  port: parseInt(process.env.PORT, 10),

  jwtSecret: process.env.JWT_SECRET,

  /**
   * Logger configs
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
}