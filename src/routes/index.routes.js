const { Router } = require('express');

const { login } = require('./login.routes');
const { userRoutes } = require('./user.routes');
const { categoriesRoutes } = require('./categories.routes');
const { postRoutes } = require('./post.routes');

const route = Router();

route.use(login);
route.use(userRoutes);
route.use(categoriesRoutes);
route.use(postRoutes);

module.exports = {
  route,
};
