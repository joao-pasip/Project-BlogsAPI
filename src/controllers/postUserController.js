const { postUserService } = require('../services/postUserService');

const postUserController = async (req, res) => {
  try {
    const user = req.body;
    const token = await postUserService(user);
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  postUserController,
};