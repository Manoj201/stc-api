'use strict';

module.exports = (sequelize, DataTypes) => {
  let branch = sequelize.define('branch', {
    name: {
      type: DataTypes.STRING,
    },
    town: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  });
  branch.associate = (models) => {
    branch.belongsTo(models.employer,
      {foreignKey: {name: 'employerId'}},
    );
    branch.hasMany(models.jobDetail,
      {foreignKey: {name: 'branchId'}},
    );
  };
  return branch;
};
