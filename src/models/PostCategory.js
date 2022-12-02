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
      foreignKey: 'userId', // se refere ao id de Book na tabela de `users_books`
      otherKey: 'id', // se refere a outra chave de `users_books` 
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'id',  // se refere ao id de User na tabela de `users_books`
      otherKey: 'useId',
    });
  };

  return PostCategory;
};


module.exports = PostCategoryModel;