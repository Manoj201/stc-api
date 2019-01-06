'use strict';
import {OK, NOT_FOUND} from 'http-status-codes';

import models from '../../../models';

const contactDetailsModel = models.contactDetail;
const userModel = models.user;

const updateContactDetails = async (contactDetailsData, userId) => {
  let payload = {};

  const existUser = await userModel.findById(userId);
  if (!existUser) {
    payload.status = NOT_FOUND;
  } else {
    const existContactDetail = await contactDetailsModel.findById(existUser.contactDetailId);
    const updateContactDetail = await existContactDetail.update({
      ...contactDetailsData,
    });

    payload.status = OK;
    payload.result = updateContactDetail;
  }
  return payload;
};
export default updateContactDetails;
