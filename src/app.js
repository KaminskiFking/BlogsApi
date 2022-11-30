const express = require('express');

const { validateUserController } = require('./controllers/userController');

const { validateCamposField } = require('./middlewares/validateLoginUser');

// ...

const app = express();

app.use(express.json());

// ...
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

app.post('/login', validateCamposField, validateUserController);

module.exports = app;
