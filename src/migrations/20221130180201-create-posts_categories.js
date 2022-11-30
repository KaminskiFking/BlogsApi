'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        // Configuram o que deve acontecer ao atualizar ou excluir um usuário
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'post_id',
        // Informa que o campo é uma Foreign Key (Chave estrangeira)
        references: {
          // Informa a tabela da referência da associação
          model: 'blog_posts',
          // Informa a coluna da referência que é a chave correspondente
          key: 'id',
        },
      },
      category_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          // Configuram o que deve acontecer ao atualizar ou excluir um usuário
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          field: 'category_id',
          // Informa que o campo é uma Foreign Key (Chave estrangeira)
          references: {
            // Informa a tabela da referência da associação
            model: 'categories',
            // Informa a coluna da referência que é a chave correspondente
            key: 'id',
          },
        },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('post_categories');
  }
};
