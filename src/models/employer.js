'use strict';

module.exports = (sequelize, DataTypes) => {
  let employer = sequelize.define('employer', {
    name: {
      type: DataTypes.STRING,
    },
  }, {
    freezeTableName: true,
  });

  employer.associate = (models) => {
    employer.hasMany(models.branch,
      {foreignKey: {name: 'employerId'}}
    );
    employer.hasMany(models.jobDetail,
      {foreignKey: {name: 'employerId'}}
    );
  };

  return employer;
};
