const { BlogPost, User, Category } = require('../database/models');
const { MyError } = require('../utils/customerError');
const { helperUserId } = require('../utils/helperUserId');

const putByIdPostService = async (id, token, title, content) => {
  const userValid = await helperUserId(token);
  const postId = await BlogPost.findOne({ where: { id } });
  const validPost = postId.userId === userValid;
  if (!validPost) throw new MyError(401, 'Unauthorized user');

  const newObj = { title, content, updated: Date() };
  if (!title && !content) throw new MyError(400, 'Some required fields are missing');

  const putPost = await BlogPost.update({
    title: newObj.title, content: newObj.content, updated: newObj.updated,
  }, { where: { id }, 
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] }); 
  
  const postUpdated = await BlogPost.findOne({ where: { id: putPost }, 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] }); return postUpdated;
};

module.exports = {
  putByIdPostService,
};