'use strict';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import models from '../../models';
const userModel = models.user;

const authenticate = async (userName, password) => {
  let result = {};
  let query = {
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'contactDetailId'],
    },
    where: {userName},
  };
  const user = await userModel.findOne(query);
  if (user !== null) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      let userObj = {};
      userObj.id= user.id;
      userObj.name= user.name;
      result.user = userObj;
      result.token = jwt.sign({userName, id: user.id}, 'stc_ob_09', {expiresIn: 86400});
    }
  }
  return result;
};

export default {
  authenticate,
};

