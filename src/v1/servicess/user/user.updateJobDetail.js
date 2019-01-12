'use strict';
import {OK, NOT_FOUND} from 'http-status-codes';

import models from '../../../models';

const {user: userModel, contactDetail: contactDetailsModel, jobDetail: jobDetailModel} = models;

const updateJobDetail = async (jobData, userId) => {
  let payload = {};

  const existUser = await userModel.findById(userId);
  if (!existUser) {
    payload.status = NOT_FOUND;
  } else {
    const existContactDetail = await contactDetailsModel.findById(existUser.contactDetailId);
    const existJobDetail = await jobDetailModel.findById(existContactDetail.jobDetailId);
    const updateJobDetail = await existJobDetail.update({
      ...jobData,
    });

    payload.status = OK;
    payload.result = updateJobDetail;
  }
  return payload;
};
export default updateJobDetail;
