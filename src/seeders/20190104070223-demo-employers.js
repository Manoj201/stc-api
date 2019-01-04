'use strict';
const uuidv1 = require('uuid/v1');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('employers', [
      {
        id: uuidv1(),
        name: 'Calcey Technologies',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv1(),
        name: 'Sampath Bank',
        createdAt: now,
        updatedAt: now,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('employers', null, {});
  },
};
