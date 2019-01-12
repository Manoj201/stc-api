'use strict';
import {OK, NOT_FOUND} from 'http-status-codes';

import models from '../../../models';

const {user: userModel, contactDetail: contactDetailsModel, address: addressModel} = models;

const updateAddress = async (addressData, userId) => {
  let payload = {};

  const existUser = await userModel.findById(userId);
  if (!existUser) {
    payload.status = NOT_FOUND;
  } else {
    const existContactDetail = await contactDetailsModel.findById(existUser.contactDetailId);
    const existAddress = await addressModel.findById(existContactDetail.addressId);
    const updateAddress = await existAddress.update({
      ...addressData,
    });

    payload.status = OK;
    payload.result = updateAddress;
  }
  return payload;
};
export default updateAddress;
