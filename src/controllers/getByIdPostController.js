const { getByIdPostService } = require('../services/getByIdPostService');

const getByIdPostController = async (req, res) => {
  const { id } = req.params;
  const postId = await getByIdPostService(id);
  return res.status(200).json(postId);
};

module.exports = {
  getByIdPostController,
};
