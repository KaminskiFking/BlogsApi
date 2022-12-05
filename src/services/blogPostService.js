const { Op } = require('sequelize');
const { BlogPost, Category, PostCategory } = require('../models');

const createNewBlogPost = async (title, content, categoryIds) => {
  const arrayCategory = categoryIds.map((id) => ({ id }));
  console.log(arrayCategory);
  const { count } = await Category.findAndCountAll({
    where: {
        [Op.or]: arrayCategory,
    },
  });
  
  console.log(count);
  if (count !== arrayCategory.length) {
    return { type: 'ONE_OR_MORE_NOT_FOUND', message: 'one or more "categoryIds" not found' };
  }

  const category = await BlogPost.create({ title, content });

  arrayCategory.forEach(async (e) => {
   await PostCategory.create({ postId: category.dataValues.id, categoryId: e.id });
  });
  return { type: null, message: category };
};

// const findAllCategories = async () => {
//   const categories = await Category.findAll();
//   return { type: null, message: categories };
// };

module.exports = {
  createNewBlogPost,
};