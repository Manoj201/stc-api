'use strict';

module.exports = (sequelize, DataTypes) => {
  let occupation = sequelize.define('occupation', {
    position: {
      type: DataTypes.STRING,
      unique: true,
    },
  }, {
    freezeTableName: true,
  });

  occupation.associate = (models) => {
    occupation.hasMany(models.jobDetail,
      {foreignKey: {name: 'occupationId'}}
    );
  };

  return occupation;
};
