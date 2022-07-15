const { MyError } = require('../../../utils/customerError');
const { userSchema } = require('./userSchema');

const userValidation = (req, res, next) => {
  try {
    const user = req.body;
    const error = userSchema.safeParse(user);
    if (error.success) return next(); 
    const { issues: [{ message }] } = error.error;
    if (message) throw new MyError(400, message);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

// const { MyError } = require('../../../utils/customerError');

// class UserValidation {
//   constructor(schema) {
//     this.schema = schema;
//   }

//   validate(req, _res, next) {
//     const user = req.body;
//     const result = this.schema.safeParse(user);
//     if (result.success) return next();
//     const { issues: [{ message }] } = result.error;
//     throw new MyError(400, message);
//   }
// }

// const userValidation = new UserValidation(userSchema);

module.exports = {
  userValidation,
};
