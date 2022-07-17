const { getAllCategoryService } = require('../services/getAllCategoryService');

const getAllCategoryController = async (_req, res) => {
  const getAllCategory = await getAllCategoryService();
  return res.status(200).json(getAllCategory);
  // try {
  //   const getAllCategory = await getAllCategoryService();
  //   return res.status(200).json(getAllCategory);
  // } catch (error) {
  //   return res.status(error.status).json(error.message);
  // }
};

module.exports = {
  getAllCategoryController,
};