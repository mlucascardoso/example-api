const { Router } = require('express');
const example = require('./routes/example');

module.exports = () => {
  const app = Router();
  example(app);

  return app;  
}
