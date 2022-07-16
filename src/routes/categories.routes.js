const { Router } = require('express');
const { tokenValidation } = require('../middlewares/tokenGlobal');
const { postCategoryController } = require('../controllers/postCategoryController');

const categoriesRoutes = Router();

categoriesRoutes.post('/categories', tokenValidation, postCategoryController);

module.exports = {
  categoriesRoutes,
};