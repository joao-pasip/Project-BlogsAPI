const { getAllPostService } = require('../services/getAllPostService');

const getAllPostController = async (_req, res) => {
  const blogPosts = await getAllPostService();
  return res.status(200).json(blogPosts);
};

module.exports = {
  getAllPostController,
};