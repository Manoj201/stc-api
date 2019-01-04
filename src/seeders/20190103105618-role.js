'use strict';

const uuidv1 = require('uuid/v1');


module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('roles', [
      {
        id: uuidv1(),
        name: 'admin',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv1(),
        name: 'student',
        createdAt: now,
        updatedAt: now,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  },
};

