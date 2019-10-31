const express = require('express');

const config = require('./config');

const Logger = require('./loaders/logger');

const startServer = async () => {
  const app = express();

  require('./loaders')(app);

  app.listen(config.port, err => {
    if (err) {
      Logger.error(err);
      process.exit(1);
      return;
    }

    Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️ 
      ################################################
    `);
  });
}

startServer();