'use strict';
import HttpStatus from 'http-status-codes';

import models from '../../../models';
const userModel = models.user;

const create = async (userData) => {
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
    const user = await userModel.create({
      ...userData,
    });
    payload.status = HttpStatus.CREATED;
    payload.result = user;
  }
  return payload;
};

export default create;
