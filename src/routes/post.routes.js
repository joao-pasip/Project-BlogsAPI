const { Router } = require('express');

const { tokenValidation } = require('../middlewares/tokenGlobal');
const { postValidation } = require('../middlewares/postValidation');

const { postPostController } = require('../controllers/postPostController');
const { getAllPostController } = require('../controllers/getAllPostController');

const postRoutes = Router();

postRoutes.post('/post', tokenValidation, postValidation, postPostController);
postRoutes.get('/post', tokenValidation, getAllPostController);

module.exports = {
  postRoutes,
};