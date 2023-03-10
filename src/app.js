const express = require('express');

const { validateUserController, 
  createUserController, 
  getAllUsersController, getUserById } = require('./controllers/userController');

const { createCategoryController, 
  getAllCategoriesController } = require('./controllers/categoryController');

  const { createBlogPostController } = require('./controllers/blogPostController');

const { validateField } = require('./midleewares/validateLoginUser');
const { validateFields } = require('./midleewares/validateBlogPost');
const { validateFieldName } = require('./midleewares/validateCategory');
const { validateToken } = require('./midleewares/validateToken');
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
app.get('/user', validateToken, getAllUsersController);
app.get('/user/:id', validateToken, getUserById);

app.post('/categories', validateToken, validateFieldName, createCategoryController);
app.get('/categories', validateToken, getAllCategoriesController);

app.post('/post', validateToken, validateFields, createBlogPostController);

module.exports = app;
