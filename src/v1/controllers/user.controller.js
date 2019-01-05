'use strict';
import HttpStatus from 'http-status-codes';
import uuidv1 from 'uuid/v1';

import {userService} from '../servicess';
import errorFactory from '../../util/errorFactory';

const userOperations = {

  getById: async (req, res, next) => {
    try {
      const data = await userService.getById(req.params.id);
      data ? res.status(HttpStatus.OK).json(data) : next(errorFactory.notFound(req.traceId));
    } catch (error) {
      next(error);
    }
  },

  getAll: async (req, res, next) => {
    try {
      const data = await userService.getAll();
      res.status(HttpStatus.OK).json(data);
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const userData = {
        id: uuidv1(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        shortName: req.body.shortName,
        userName: req.body.userName,
        password: req.body.password,
        roleId: req.body.roleId,
        contactDetail: {
          id: uuidv1(),
        },
      };
      const addressData = {
        id: uuidv1(),
      };
      const data = await userService.create(userData, addressData);
      data.status === HttpStatus.CREATED ?
        res.status(HttpStatus.CREATED).json(data.result) : next(errorFactory.conflict(req.traceId));
    } catch (error) {
      next(error);
    }
  },
};

export default userOperations;
