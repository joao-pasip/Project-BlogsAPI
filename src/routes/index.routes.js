const { Router } = require('express');

const { login } = require('./login.routes');
const { userRoutes } = require('./user.routes');

const route = Router();

route.use(login);
route.use(userRoutes);

module.exports = {
  route,
};
