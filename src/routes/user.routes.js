const { Router } = require('express');
const { userValidation } = require('../middlewares/zod/userValidation/userValidation');
const { postUserController } = require('../controllers/postUserController');

const userRoutes = Router();

userRoutes.post('/user', userValidation, postUserController);

module.exports = {
  userRoutes,
};