const Joi = require('joi');

const validFieldDisplayName = Joi.object({
  displayName: Joi.string().min(8).required(),
});

const validFieldPassword = Joi.object({
  password: Joi.string().min(6).required(),
});

const validateDisplayNameField = (req, res, next) => {
  const { displayName } = req.body;
  const { error } = validFieldDisplayName
    .validate({ displayName });
    console.log(error);
  if (error && error.details[0].type === 'string.min') {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  
  return next();
};

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const validateEmailField = (req, res, next) => {
  const { email } = req.body;
  const emailValidate = validateEmail(email);
  if (!emailValidate) {
    return res.status(400)
    .json({ message: '"email" must be a valid email' });
  } 
  
  return next();
};

const validatePasswordField = (req, res, next) => {
  const { password } = req.body;
  const { error } = validFieldPassword
    .validate({ password });
  if (error && error.details[0].type === 'string.min') {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }
  
  return next();
};

module.exports = {
  validateDisplayNameField,
  validatePasswordField,
  validateEmailField,
};