const jwt = require('jsonwebtoken');
const { MyError } = require('../customerError');

require('dotenv').config();

const validateToken = (token) => new Promise((resolve, _reject) => {
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) throw new MyError(401, 'Expired or invalid token');
      resolve(decoded);
    });
    return verifyToken;
  });

module.exports = {
  validateToken,
};