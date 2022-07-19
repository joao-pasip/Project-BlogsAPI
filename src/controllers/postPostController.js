const { postPostService } = require('../services/postPostService');

const postPostController = async (req, res) => {
    const token = req.headers.authorization;
    const post = req.body;
    const createPost = await postPostService(post, token, res);
    return res.status(201).json(createPost);
};

module.exports = {
  postPostController,
};