const { User } = require('../database/models');
const { MyError } = require('../utils/customerError');

const getByIdUserService = async (id) => {
  const userOne = await User.findOne({
    where: { id },
    attributes: {
      exclude: ['password'],
    },
  });
  if (!userOne) throw new MyError(404, 'User does not exist');
  return userOne;
};

module.exports = {
  getByIdUserService,
};