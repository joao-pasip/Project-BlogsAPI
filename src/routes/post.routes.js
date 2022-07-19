const { Router } = require('express');

const { tokenValidation } = require('../middlewares/tokenGlobal');
const { postValidation } = require('../middlewares/postValidation');

const { postPostController } = require('../controllers/postPostController');
const { getAllPostController } = require('../controllers/getAllPostController');
const { getByIdPostController } = require('../controllers/getByIdPostController');

const postRoutes = Router();

postRoutes.post('/post', tokenValidation, postValidation, postPostController);
postRoutes.get('/post', tokenValidation, getAllPostController);
postRoutes.get('/post/:id', tokenValidation, getByIdPostController);

module.exports = {
  postRoutes,
};