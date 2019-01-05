'use strict';
module.exports = (sequelize, DataTypes) => {
  let address = sequelize.define('address', {
    number: {
      type: DataTypes.STRING,
    },
    street: {
      type: DataTypes.STRING,
    },
    town: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  });
  return address;
};
