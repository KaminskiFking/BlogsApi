const categoryService = require('../services/categoryService');

const createCategoryController = async (req, res) => {
  const { name } = req.body;
    const { message } = await categoryService.createNewCategory(name);
    return res.status(201).json(message);
};
module.exports = {
  createCategoryController,
};