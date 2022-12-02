const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.STRING, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },{
    underscored: true,
    tableName: 'blog_posts',
    timestamps: false,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'user_id'} );
  }
  return BlogPost;
};


module.exports = BlogPostModel;