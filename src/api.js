require('express-async-errors');
const express = require('express');
const globalError = require('./middlewares/globalError');
const { route } = require('./routes/index.routes');

// ...

const app = express();

app.use(express.json());
app.use(route);
app.use(globalError.handle);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
