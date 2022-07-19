const { User } = require('../database/models');
const { validateToken } = require('./token/verifyToken');

const helperUserId = async (token) => {
  const credentials = await validateToken(token);
  const user = await User.findOne({ where: { email: credentials.email } });
  return user.id;
};

module.exports = {
  helperUserId,
};