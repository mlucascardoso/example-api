const router = require('express').Router();

module.exports = (app) => {
  app.use('/example3', router);

  router.get('/', (req, res) => {
    return res.json('Oi').status(200);
  });
};