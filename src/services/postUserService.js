const { User } = require('../database/models');
const { MyError } = require('../utils/customerError');
const { generateToken } = require('../utils/token/generateToken');

const postUserService = async (user) => {
  const registeredUser = await User.findOne({ where: { email: user.email } });
  if (registeredUser) {
    throw new MyError(409, 'User already registered');
  }
  await User.create(user);

  const newUser = {
    email: user.email,
    password: user.password,
  };
  const token = await generateToken(newUser);
  return token;
};

module.exports = {
  postUserService,
};