'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('occupation', [
      {
        id: '8280ae28-d3dd-4341-9dc0-b9aa9fd0e5c1',
        position: 'software engineer',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 'de93b9ee-c130-4a45-9d99-ac191424aa0d',
        position: 'doctor',
        createdAt: now,
        updatedAt: now,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('occupation', null, {});
  },
};
