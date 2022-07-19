const { MyError } = require('../utils/customerError');

const postValidation = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    throw new MyError(400, 'Some required fields are missing');
  }
  next();
};

module.exports = {
  postValidation,
};