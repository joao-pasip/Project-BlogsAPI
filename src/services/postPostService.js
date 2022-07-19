const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { Category } = require('../database/models');
const { BlogPost } = require('../database/models');
const { PostCategory } = require('../database/models');
const { MyError } = require('../utils/customerError');
const { helperUserId } = require('../utils/helperUserId');

const sequelize = new Sequelize(config.development);

const auxFunc = async (postId, categories, t) => {
  await Promise.all(categories.map(async (category) => {
    await PostCategory.create({
      postId,
      categoryId: category,
    }, { transaction: t });
  }));
};

const postPostService = async (post, token, res) => {
  const userId = await helperUserId(token);
  const t = await sequelize.transaction();
  try {
    const category = await Category.findAll({ where: { id: post.categoryIds } });
    const categories = category.map((e) => e.dataValues.id);
    if (categories.length !== post.categoryIds.length) {
      throw new MyError(400, '"categoryIds" not found');
    }
    const blogPost = await BlogPost.create({ title: post.title, 
      content: post.content, 
      userId,
      published: Date(),
      updated: Date(),
    }, { transaction: t });
    await auxFunc(blogPost.id, post.categoryIds, t); await t.commit(); return blogPost;
  } catch (error) {
    await t.rollback(); return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  postPostService,
};