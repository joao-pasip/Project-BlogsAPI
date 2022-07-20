const Sequelize = require('sequelize');

const { Op } = Sequelize;
const { BlogPost, User, Category } = require('../database/models');

const getByQueryPostService = async (query) => {
  const blogPostQuery = await BlogPost.findAll({ 
    where: {
      [Op.or]: {
        title: {
          [Op.like]: `%${query}%`,
        },
        content: {
          [Op.like]: `%${query}%`,
        },
      },
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return blogPostQuery;
};

module.exports = {
  getByQueryPostService,
};