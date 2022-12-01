const express = require('express');

const { validateUserController, createUserController } = require('./controllers/userController');

const { validateField } = require('./midleewares/validateLoginUser');
const { validateDisplayNameField, 
  validatePasswordField, validateEmailField } = require('./midleewares/validateCreateUser');

// ...

const app = express();

app.use(express.json());

// ...
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

app.post('/login', validateField, validateUserController);
app.post('/user', validateDisplayNameField, validatePasswordField, 
validateEmailField, createUserController);

module.exports = app;
