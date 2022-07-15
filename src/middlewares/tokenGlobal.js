const { MyError } = require('../utils/customerError');
const { validateToken } = require('../utils/token/verifyToken');

const tokenValidation = async (req, _res, next) => {
  // try {
    const token = req.headers.authorization;
    if (!token) throw new MyError(401, 'Token not found');
    await validateToken(token);
    return next();   
  // } catch (error) {
  //   console.log('====================');
  //   console.log(error);
  //   return res.status(error.status).json({ message: error.message });
  // }
};

module.exports = {
  tokenValidation,
};
