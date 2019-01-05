'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('jobDetail', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      occupationId: {
        type: Sequelize.UUID,
        references: {
          key: 'id',      // primary key of the referenced table
          model: 'occupation', // database table name
          as: 'occupationId'   // given foreign key
        }
      },
      employerId: {
        type: Sequelize.UUID,
        references: {
          key: 'id',      // primary key of the referenced table
          model: 'employer', // database table name
          as: 'employerId'   // given foreign key
        }
      },
      branchId: {
        type: Sequelize.UUID,
        references: {
          key: 'id',      // primary key of the referenced table
          model: 'branch', // database table name
          as: 'branchId'   // given foreign key
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
    return queryInterface.dropTable('jobDetail', {});
  }
};
