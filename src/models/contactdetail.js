'use strict';

module.exports = (sequelize, DataTypes) => {
  let contactDetail = sequelize.define('contactDetail', {
    mobileNo1: {
      type: DataTypes.STRING,
    },
    mobileNo2: {
      type: DataTypes.STRING,
    },
    homePhone: {
      type: DataTypes.STRING,
    },
    officePhone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      set(email) {
        this.setDataValue('email', email.toLowerCase());
      },
    },
    fbUrl: {
      type: DataTypes.STRING,
    },
    linkedinUrl: {
      type: DataTypes.STRING,
    },
    skypeId: {
      type: DataTypes.STRING,
    },
  }, {});

  contactDetail.associate = (models) => {
    contactDetail.belongsTo(models.address,
      {foreignKey: {name: 'addressId'}}
    );
  };
  return contactDetail;
};
