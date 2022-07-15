const { User } = require('../database/models');

const getAllUserService = async () => {
  const getAllUser = await User.findAll({ attributes: {
    exclude: ['password'],
  } });
  return getAllUser;
};

module.exports = {
  getAllUserService,
};