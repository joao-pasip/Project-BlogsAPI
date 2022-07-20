const { Router } = require('express');

const { tokenValidation } = require('../middlewares/tokenGlobal');
const { postValidation } = require('../middlewares/postValidation');

const { postPostController } = require('../controllers/postPostController');
const { getAllPostController } = require('../controllers/getAllPostController');
const { getByIdPostController } = require('../controllers/getByIdPostController');
const { putByIdPostController } = require('../controllers/putByIdPostController');
const { deleteByIdPostController } = require('../controllers/deleteByIdPostController');
const { getByQueryPostController } = require('../controllers/getByQueryPostController');

const postRoutes = Router();

postRoutes.get('/post/search', tokenValidation, getByQueryPostController);
postRoutes.post('/post', tokenValidation, postValidation, postPostController);
postRoutes.get('/post', tokenValidation, getAllPostController);
postRoutes.get('/post/:id', tokenValidation, getByIdPostController);
postRoutes.put('/post/:id', tokenValidation, putByIdPostController);
postRoutes.delete('/post/:id', tokenValidation, deleteByIdPostController);

module.exports = {
  postRoutes,
};