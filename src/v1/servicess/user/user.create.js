'use strict';
import HttpStatus from 'http-status-codes';
import uuidv1 from 'uuid/v1';

import models from '../../../models';


// const uuidv1 = require('uuid/v1');
const userModel = models.user;
const addressModel = models.address;
const contactDetailsModel = models.contactDetail;
const jobDetailModel = models.jobDetail;

const create = async (userData, addressData) => {
  let payload = {};

  const existUser = await userModel.find({
    attributes: ['userName'],
    where: {
      userName: userData.userName,
    },
  });
  if (existUser) {
    payload.status = HttpStatus.CONFLICT;
  } else {
    const transaction = await models.sequelize.transaction();
    try {
      const address = await addressModel.create({
        id: uuidv1(),
      }, {transaction});


      const jobDetail = await jobDetailModel.create({
        id: uuidv1(),
      }, {transaction});

      const contactDetail = await contactDetailsModel.create({
        id: uuidv1(),
        addressId: address.id,
        jobDetailId: jobDetail.id,
      }, {transaction});

      const user = await models.user.create({
        ...userData,
        contactDetailId: contactDetail.id,
      }, {transaction});

      transaction.commit();
      payload.status = HttpStatus.CREATED;
      payload.result = user;
    } catch (e) {
      transaction.rollback();
    }
  }
  return payload;
};

export default create;
