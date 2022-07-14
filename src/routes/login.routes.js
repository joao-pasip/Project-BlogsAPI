const { Router } = require('express');
const controller = require('../controllers/postLoginController');
const { loginValidation } = require('../middlewares/requestLogin');

const login = Router();

login.post('/login', loginValidation, controller.postLoginController);

module.exports = {
  login,
};
