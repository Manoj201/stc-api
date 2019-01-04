'use strict';

import models from '../../../models';
const userModel = models.user;

const getAll = () => {
  let query = {
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'contactDetailId'],
    },
    include: [
      {
        model: models.role,
        attributes: ['id', 'name'],
      },
      {
        model: models.contactDetail,
        attributes: ['id'],
      },
    ],
  };
  const userList = userModel.findAll(query);
  return userList;
};

export default getAll;
