'use strict';

module.exports = (sequelize, DataTypes) => {
  let branch = sequelize.define('branch', {
    name: {
      type: DataTypes.STRING,
    },
    town: {
      type: DataTypes.STRING,
    },
  });
  branch.associate = (models) => {
    branch.belongsTo(models.employer,
      {foreignKey: {name: 'employerId'}}
    );
  };
  return branch;
};
