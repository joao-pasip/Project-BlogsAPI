const service = require('../services/postCategoryService');

const postCategoryController = async (req, res) => {
  const { name } = req.body;
  // const token = req.headers.authorization;
  const category = await service.postCategoryService(name);
  // console.log(category);
  return res.status(201).json(category);
};

module.exports = { 
  postCategoryController,
};