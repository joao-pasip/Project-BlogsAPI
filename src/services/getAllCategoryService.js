const { Category } = require('../database/models');

const getAllCategoryService = async () => {
  const getAllCategory = await Category.findAll();
  return getAllCategory;
};

module.exports = {
  getAllCategoryService,
};