const { Router } = require('express');

const { login } = require('./login.routes');

const route = Router();

route.use(login);

module.exports = {
  route,
};
