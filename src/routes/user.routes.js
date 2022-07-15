const { Router } = require('express');
const { userValidation } = require('../middlewares/zod/userValidation/userValidation');
const { postUserController } = require('../controllers/postUserController');
const { getAllUserController } = require('../controllers/getAllUserController');
const { tokenValidation } = require('../middlewares/tokenGlobal');

const userRoutes = Router();

userRoutes.post('/user', userValidation, postUserController);
userRoutes.get('/user', tokenValidation, getAllUserController);

module.exports = {
  userRoutes,
};