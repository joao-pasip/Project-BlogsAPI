// const { MyError } = require('../utils/customerError');
// const { validateToken } = require('../utils/token/verifyToken');

// const tokenValidation = async (req, _res, next) => {
//   const { authorization } = req.headers;

//   if (!authorization) throw new MyError(401, 'Token not found');

//   const ifTokenValidated = await validateToken(authorization);

//   if (!ifTokenValidated) throw new MyError(401, 'Expired or invalid token');

//   return next();
// };

// module.exports = {
//   tokenValidation,
// };
