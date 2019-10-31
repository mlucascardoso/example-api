const { Router } = require('express');
const { join } = require('path');
const example = require('./routes/example');
const requireDir = require('require-dir');

/**
 * This function allows us to require all routes inside routes/ path dynamically
 */
const routes = () => {
  const routesFn = requireDir(join(__dirname, './routes'));
  const routes = Object.keys(routesFn).map(key => routesFn[key]);

  return routes;
}

module.exports = () => {
  const app = Router();
  routes().forEach(route => route(app));

  return app;
}
