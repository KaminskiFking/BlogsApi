const blogPostService = require('../services/blogPostService');

const createBlogPostController = async (req, res) => {
  const { title, content, categoryIds } = req.body;
    const { type, message } = await blogPostService.createNewBlogPost(title, content, categoryIds);
    if (type) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    return res.status(201).json(message);
};

module.exports = {
  createBlogPostController,
};