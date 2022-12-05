const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {type: DataTypes.INTEGER, primaryKey: true},
    categoryId: DataTypes.STRING,
  },{
    underscored: true,
    tableName: 'posts_categories',
    timestamps: false,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: PostCategory,
      foreignKey: 'postId', // se refere ao id de Book na tabela de `users_books`
      otherKey: 'categoryId', // se refere a outra chave de `users_books` 
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId',  // se refere ao id de User na tabela de `users_books`
      otherKey: 'postId',
    });
  };

  return PostCategory;
};


module.exports = PostCategoryModel;