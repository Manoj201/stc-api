'use strict';

import models from '../../../models';
const userModel = models.user;

const getById = (id) => {
  let query = {
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'contactDetailId'],
    },
    include: [
      {
        model: models.role,
        attributes: ['id', 'name'],
      }],
    where: {id},
  };
  const user = userModel.findOne(query);
  return user;
};

export default getById;
