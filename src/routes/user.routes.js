const { Router } = require('express');
const { userValidation } = require('../middlewares/zod/userValidation/userValidation');
const { postUserController } = require('../controllers/postUserController');
const { getAllUserController } = require('../controllers/getAllUserController');
const { getByIdUserController } = require('../controllers/getByIdUserController');
const { deleteUserMeController } = require('../controllers/deleteUserMeService');
const { tokenValidation } = require('../middlewares/tokenGlobal');

const userRoutes = Router();

userRoutes.post('/user', userValidation, postUserController);
userRoutes.get('/user', tokenValidation, getAllUserController);
userRoutes.get('/user/:id', tokenValidation, getByIdUserController);
userRoutes.delete('/user/me', tokenValidation, deleteUserMeController);

module.exports = {
  userRoutes,
};