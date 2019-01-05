'use strict';

const uuidv1 = require('uuid/v1');


module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('role', [
      {
        id: 1,
        name: 'admin',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 2,
        name: 'student',
        createdAt: now,
        updatedAt: now,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('role', null, {});
  },
};

