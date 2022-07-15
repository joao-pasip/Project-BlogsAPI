const { getAllUserService } = require('../services/getAllUserService');

const getAllUserController = async (_req, res) => {
  try {
    const getAllUser = await getAllUserService();
    return res.status(200).json(getAllUser);
  } catch (error) {
    return res.status(error.status).json(error.message);
  }
};

module.exports = {
  getAllUserController,
};