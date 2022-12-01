const Joi = require('joi');

const validFieldFilled = Joi.object({
  email: Joi.string().min(1).required(),
  password: Joi.string().min(1).required(),
});

const validateField = (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  const { error } = validFieldFilled
    .validate({ email, password });
    console.log(error);
  if (error && error.details[0].type === 'any.required') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if (error && error.details[0].type === 'string.empty') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  return next();
};

module.exports = {
  validateField,
};