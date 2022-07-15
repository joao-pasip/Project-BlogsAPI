const { getByIdUserService } = require('../services/getByIdUserService');

const getByIdUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const userOne = await getByIdUserService(id);
    return res.status(200).json(userOne);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  getByIdUserController,
};