'use strict';
const uuidv1 = require('uuid/v1');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('occupations', [
      {
        id: uuidv1(),
        position: 'software engineer',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv1(),
        position: 'doctor',
        createdAt: now,
        updatedAt: now,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('occupations', null, {});
  },
};
