const Joi = require('joi');

const validField = Joi.object({
  name: Joi.string().min(1).required(),
});

const validateFieldName = (req, res, next) => {
  const { name } = req.body;
  const { error } = validField
    .validate({ name });
    console.log(error);
  if (error && error.details[0].type === 'any.required') {
    return res.status(400)
    .json({ message: '"name" is required' });
  }
  
  return next();
};

module.exports = {
  validateFieldName,
};