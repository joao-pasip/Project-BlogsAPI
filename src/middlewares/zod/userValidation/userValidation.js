// const { userSchema } = require('./userSchema');

// const userValidation = (req, _res, next) => {
//   const { email, password } = req.body;
//   console.log(email, password);
//   const error = userSchema.safeParse({ email, password });
//   console.log(error);
//   next();
// };

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

// module.exports = {
//   userValidation,
// };
