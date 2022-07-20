const { getByQueryPostService } = require('../services/getByQueryPostService');

const getByQueryPostController = async (req, res) => {
  const query = req.query.q;
  console.log(query);
  const queryTitle = await getByQueryPostService(query);
  return res.status(200).json(queryTitle);
};

module.exports = {
  getByQueryPostController,
};