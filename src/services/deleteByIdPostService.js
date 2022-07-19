const { helperUserId } = require('../utils/helperUserId');
const { BlogPost } = require('../database/models');
const { MyError } = require('../utils/customerError');

const deleteByIdPostService = async (id, token) => {
  const userValid = await helperUserId(token);
  const postId = await BlogPost.findOne({ where: { id } });
  if (!postId) throw new MyError(404, 'Post does not exist');
  const validPost = postId.userId === userValid;
  if (!validPost) throw new MyError(401, 'Unauthorized user');
  await BlogPost.destroy({ where: { id } });
};

module.exports = {
  deleteByIdPostService,
};