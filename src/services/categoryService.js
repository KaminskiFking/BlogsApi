const { Category } = require('../models');

const createNewCategory = async (name) => {
  const category = await Category.create({ name });
  return { type: null, message: category };
};

module.exports = {
  createNewCategory,
};