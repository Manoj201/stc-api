'use strict';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  let user = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    shortName: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      set(password) {
        this.setDataValue('password', bcrypt.hashSync(password, 10));
      },
    },

  }, {});
  user.associate = (models) => {
    user.belongsTo(models.role,
      {foreignKey: {name: 'roleId'}}
    );
    user.belongsTo(models.contactDetail,
      {foreignKey: {name: 'contactDetailId'}}
    );
  };
  return user;
};
