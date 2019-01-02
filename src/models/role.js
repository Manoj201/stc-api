'use strict';

module.exports = (sequelize, DataTypes) => {
  let role = sequelize.define('role', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  });
  role.USER_ROLE = {
    admin: 1,
    student: 2,
  };
  role.associate = (models) => {
    role.hasMany(models.user,
      {foreignKey: {name: 'roleId'}}
    );
  };
  return role;
};
