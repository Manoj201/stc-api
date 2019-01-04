'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('contactDetails', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      mobileNo1: {
        type: Sequelize.STRING
      },
      mobileNo2: {
        type: Sequelize.STRING
      },
      homePhone: {
        type: Sequelize.STRING
      },
      officePhone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      fbUrl: {
        type: Sequelize.STRING
      },
      linkedinUrl: {
        type: Sequelize.STRING
      },
      skypeId: {
        type: Sequelize.STRING
      },
      addressId: {
        type: Sequelize.UUID,
        references: {
          key: 'id',      // primary key of the referenced table
          model: 'address', // database table name
          as: 'addressId'   // given foreign key
        }
      },
      jobDetailId: {
        type: Sequelize.UUID,
        references: {
          key: 'id',      // primary key of the referenced table
          model: 'jobDetails', // database table name
          as: 'jobDetailId'   // given foreign key
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
    return queryInterface.dropTable('contactDetails');
  }
};
