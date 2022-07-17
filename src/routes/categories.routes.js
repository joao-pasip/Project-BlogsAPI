const { Router } = require('express');
const { tokenValidation } = require('../middlewares/tokenGlobal');
const { postCategoryController } = require('../controllers/postCategoryController');
const { getAllCategoryController } = require('../controllers/getAllCategoryController');

const categoriesRoutes = Router();

categoriesRoutes.post('/categories', tokenValidation, postCategoryController);
categoriesRoutes.get('/categories', tokenValidation, getAllCategoryController);

module.exports = {
  categoriesRoutes,
};