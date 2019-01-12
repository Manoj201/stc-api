'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('employer', [
      {
        id: '5c76a065-d065-4d5a-92f2-26703da37e58',
        name: 'Calcey Technologies',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 'a2aa35e9-67c5-489c-9339-cf5c7ff891ca',
        name: 'Sampath Bank',
        createdAt: now,
        updatedAt: now,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('employer', null, {});
  },
};
