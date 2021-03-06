'use strict';
import {CREATED, INTERNAL_SERVER_ERROR, CONFLICT} from 'http-status-codes';
import uuidv1 from 'uuid/v1';

import models from '../../../models';

const userModel = models.user;
const addressModel = models.address;
const contactDetailsModel = models.contactDetail;
const jobDetailModel = models.jobDetail;

const create = async (userData) => {
  let payload = {};

  const existUser = await userModel.find({
    attributes: ['userName'],
    where: {
      userName: userData.userName,
    },
  });
  if (existUser) {
    payload.status = CONFLICT;
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
      payload.status = CREATED;
      payload.result = user;
    } catch (e) {
      transaction.rollback();
      payload.status = INTERNAL_SERVER_ERROR;
    }
  }
  return payload;
};

export default create;
