'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING
      },
      shortName: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING
      },
      roleId: {
        type: Sequelize.UUID,
        references: {
          key: 'id',      // primary key of the referenced table
          model: 'roles', // database table name
          as: 'roleId'   // given foreign key
        }
      },
      contactDetailId: {
        type: Sequelize.UUID,
        references: {
          key: 'id',      // primary key of the referenced table
          model: 'contactDetails', // database table name
          as: 'contactDetailId'   // given foreign key
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
    return queryInterface.dropTable('users');
  }
};
