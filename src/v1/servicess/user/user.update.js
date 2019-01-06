'use strict';
import {OK, NOT_FOUND} from 'http-status-codes';

import models from '../../../models';

const userModel = models.user;

const update = async (userData) => {
  let payload = {};
  const existUser = await userModel.findById(userData.id);
  if (!existUser) {
    payload.status = NOT_FOUND;
  } else {
    const updatedUser = await existUser.update({
      ...userData,
    });
    payload.status = OK;
    payload.result = updatedUser;
  }
  return payload;
};

export default update;
