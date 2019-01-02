'use strict';

module.exports = (sequelize, DataTypes) => {
  let employer = sequelize.define('employer', {
    name: {
      type: DataTypes.STRING,
    },
  });

  employer.associate = (models) => {
    employer.hasMany(models.branch,
      {foreignKey: {name: 'employerId'}}
    );
  };

  return employer;
};
