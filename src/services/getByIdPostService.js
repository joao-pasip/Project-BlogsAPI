const { BlogPost, User, Category } = require('../database/models');
const { MyError } = require('../utils/customerError');

const getByIdPostService = async (id) => {
  const postId = await BlogPost.findOne({
    where: { id },
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
  if (!postId) throw new MyError(404, 'Post does not exist'); return postId;
};

module.exports = {
  getByIdPostService,
};