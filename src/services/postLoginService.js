const { User } = require('../database/models');
// const { MyError } = require('../utils/customerError');
const { generateToken } = require('../utils/token/generateToken');

const postLoginService = async (loginUser) => {
  const tableUser = await User.findOne({ where: { email: loginUser.email } });

  if (!tableUser) throw new Error('Invalid fields');

  const passwordValid = tableUser.password === loginUser.password;

  if (!passwordValid) throw new Error('Invalid password');

  const tokenPassword = generateToken({
    email: loginUser.email,
    password: loginUser.password,
  });

  return tokenPassword;
};

module.exports = { 
  postLoginService,
};