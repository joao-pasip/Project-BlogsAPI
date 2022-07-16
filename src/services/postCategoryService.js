const { Category } = require('../database/models');
const { MyError } = require('../utils/customerError');
// const { validateToken } = require('../utils/token/verifyToken');

const postCategoryService = async (name) => {
  if (!name) throw new MyError(400, '"name" is required');

  const verifyCategory = await Category.findOne({ where: { name } });

  if (verifyCategory) throw new MyError(401, 'Category exists');
  // console.log(verifyCategory);
  const createCategory = await Category.create({ name });

  const newCategory = {
    id: createCategory.null,
    name,
  };
  // console.log(createCategory.null);
  return newCategory;
};

module.exports = {
  postCategoryService,
};