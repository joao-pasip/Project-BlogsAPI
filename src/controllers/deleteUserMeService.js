const { deleteUserMeService } = require('../services/deleteUserMeService');

const deleteUserMeController = async (req, res) => {
  const token = req.headers.authorization;
  await deleteUserMeService(token);
  return res.status(204).send();
};

module.exports = {
  deleteUserMeController,
};