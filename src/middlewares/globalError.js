const { MyError } = require('../utils/customerError');

class GlobalError {
  constructor(defaultStatus = 500) {
    this.defaultStatus = defaultStatus;
  }

  handle(error, _req, res, _next) {
    if (error instanceof MyError) {
      return res.status(error.status).json({ message: error.message });
    }

    return res.status(this.defaultStatus).json({ message: 'verifica aí, valeus parça' });
  }
}

const globalError = new GlobalError();

module.exports = globalError;
