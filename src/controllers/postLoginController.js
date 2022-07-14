const service = require('../services/postLoginService');

const postLoginController = async (req, res) => {
    try {
      const loginUser = req.body;
      const tokenValid = await service.postLoginService(loginUser);
      return res.status(200).json({ token: tokenValid });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  // const { email, password } = req.body;
  // const tokenValid = await service.postLoginService(email, password);
  // return res.status(200).json({ tokenValid });
};

module.exports = {
  postLoginController,
};