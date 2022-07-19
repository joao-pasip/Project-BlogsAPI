const { Router } = require('express');

const { tokenValidation } = require('../middlewares/tokenGlobal');
const { postValidation } = require('../middlewares/postValidation');

const { postPostController } = require('../controllers/postPostController');

const postRoutes = Router();

postRoutes.post('/post', tokenValidation, postValidation, postPostController);

module.exports = {
  postRoutes,
};