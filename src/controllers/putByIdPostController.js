const { putByIdPostService } = require('../services/putByIdPostService');

const putByIdPostController = async (req, res) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  const { title, content } = req.body;
  const putPost = await putByIdPostService(id, token, title, content);
  return res.status(200).json(putPost);
};

module.exports = {
  putByIdPostController,
};