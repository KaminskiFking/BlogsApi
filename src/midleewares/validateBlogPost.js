const Joi = require('joi');

const validFields = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
  categoryIds: Joi.array().items().min(1).required(),
});

const validateFields = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { error } = validFields
    .validate({ title, content, categoryIds });
  if (error && (error.details[0].type === 'any.required' || error
  .details[0].type === 'string.empty')) {
    return res.status(400)
    .json({ message: 'Some required fields are missing' });
  }
  
  return next();
};

module.exports = {
  validateFields,
};