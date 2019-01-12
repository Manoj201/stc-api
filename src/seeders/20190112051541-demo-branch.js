'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('branch', [
      {
        id: '67c32f45-fec1-4395-abd4-7121c746e4e0',
        name: 'Development Center',
        town: 'Colombo',
        employerId: '5c76a065-d065-4d5a-92f2-26703da37e58',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 'd0f4da20-7a03-4bcc-beca-c49b211298c6',
        name: 'Matara Branch',
        town: 'Matara',
        employerId: 'a2aa35e9-67c5-489c-9339-cf5c7ff891ca',
        createdAt: now,
        updatedAt: now,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('branch', null, {});
  },
};
