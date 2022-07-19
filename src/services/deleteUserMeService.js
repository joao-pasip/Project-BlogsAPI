const { helperUserId } = require('../utils/helperUserId');
const { MyError } = require('../utils/customerError');
const { User } = require('../database/models');

const deleteUserMeService = async (token) => {
  const userValid = await helperUserId(token);
  if (!userValid) throw new MyError(404, 'User not exists');
  await User.destroy({ where: { id: userValid } });
};

module.exports = {
  deleteUserMeService,
};