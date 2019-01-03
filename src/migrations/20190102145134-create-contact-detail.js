'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('contact_details', {
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
    return queryInterface.dropTable('contact_details');
  }
};
