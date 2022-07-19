const { BlogPost, User, Category } = require('../database/models');

const getAllPostService = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User,
        as: 'user',
        attributes: {
          exclude: ['password'],
        },
      },
      { model: Category,
        as: 'categories',
        through: {
          attributes: [],
        },
      },
    ],
  });
  return blogPosts;
};

module.exports = {
  getAllPostService,
};