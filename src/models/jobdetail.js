'use strict';

module.exports = (sequelize, DataTypes) => {
  let jobDetail = sequelize.define('jobDetail', {
  });

  jobDetail.associate = (models) => {
    jobDetail.belongsTo(models.occupation,
      {foreignKey: {name: 'occupationId'}}
    );
    jobDetail.belongsTo(models.employer,
      {foreignKey: {name: 'employerId'}}
    );
    jobDetail.belongsTo(models.branch,
      {foreignKey: {name: 'branchId'}}
    );
  };

  return jobDetail;
};
