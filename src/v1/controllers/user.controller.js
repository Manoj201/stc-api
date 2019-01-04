'use strict';
import HttpStatus from 'http-status-codes';

import {userService} from '../servicess';
import errorFactory from '../../util/errorFactory';

const uuidv1 = require('uuid/v1');

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
      };
      const data = await userService.create(userData);
      data.status === HttpStatus.CREATED ?
        res.status(HttpStatus.CREATED).json(data.result) : next(errorFactory.conflict(req.traceId));
    } catch (error) {
      next(error);
    }
  },
};

export default userOperations;
