const { deleteByIdPostService } = require('../services/deleteByIdPostService');

const deleteByIdPostController = async (req, res) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  await deleteByIdPostService(id, token);
  return res.status(204).send();
};

module.exports = {
  deleteByIdPostController,
};