'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('branch', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      town: {
        type: Sequelize.STRING
      },
      employerId: {
        type: Sequelize.UUID,
        references: {
          key: 'id',      // primary key of the referenced table
          model: 'employer', // database table name
          as: 'employerId'   // given foreign key
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('branch');
  }
};
